document.addEventListener('DOMContentLoaded', () => {
    const readingPassageDiv = document.getElementById('reading-passage');
    const questionsAreaDiv = document.getElementById('questions-area');
    const timerDisplay = document.getElementById('timer');
    const textNavigationButtons = document.querySelectorAll('.text-navigation button');
    const submitTestBtn = document.getElementById('submit-test-btn');

    let currentTextId = 'text1'; // Default text
    let answers = {};
    let highlights = {};
    let timerInterval;
    const testDuration = 60 * 60;
    let timeLeft = testDuration;

    function loadContent(textId) {
        console.log(`[loadContent] Attempting to load: ${textId}. Current active: ${currentTextId}`);

        if (currentTextId) {
            saveCurrentAnswers();
            saveCurrentHighlights();
            console.log(`[loadContent] Saved answers for ${currentTextId}:`, answers[currentTextId]);
            console.log(`[loadContent] Saved highlights for ${currentTextId}:`, highlights[currentTextId]);
        }

        currentTextId = textId;
        const data = ieltsData.find(d => d.id === textId);

        if (!data) {
            console.error('Text data not found for ID:', textId);
            return;
        }

        readingPassageDiv.innerHTML = data.passage;
        applyHighlights(currentTextId, 'passage');

        questionsAreaDiv.innerHTML = ''; // Clear previous questions

        // Calculate the starting question number for the current text
        // This 'questionCounter' will track the sequence of *all* questions (visible or not)
        let questionCounter = 0;
        for (const tData of ieltsData) {
            if (tData.id === textId) {
                break; // Found the current text, stop summing previous questions
            }
            tData.questions.forEach(qGroup => {
                // Count ALL items from previous texts, regardless of type
                // If table-completion has an 'items' array, sum its length
                if (qGroup.type === 'table-completion' && qGroup.items && qGroup.items.length) {
                    questionCounter += qGroup.items.length;
                } else if (qGroup.items && qGroup.items.length) { // For other types with 'items'
                    questionCounter += qGroup.items.length;
                }
            });
        }
        // 'questionCounter' now holds the total count of all question items before the current text.

        data.questions.forEach(qGroup => {
            const questionGroupDiv = document.createElement('div');
            questionGroupDiv.classList.add('question-group');
            questionGroupDiv.innerHTML = `<p>${qGroup.instructions}</p>`;

            if (qGroup.type === 'table-completion') {
                const tableContainer = document.createElement('div');
                tableContainer.classList.add('table-completion-container');

                let tableHtml = '<table><thead><tr>';
                qGroup.table.headers.forEach(header => { tableHtml += `<th>${header}</th>`; });
                tableHtml += '</tr></thead><tbody>';

                qGroup.table.rows.forEach(rowDataCells => { // Each row is an array of cell contents
                    tableHtml += '<tr>';
                    rowDataCells.forEach(cellContent => { // Each item in rowDataCells is a cell's content
                        tableHtml += '<td>';
                        let currentCellHtml = '';

                        // A cell's content can be a string, an object ({gapId}), or an array of those.
                        // Ensure elementsInCell is always an array for consistent processing.
                        const elementsInCell = Array.isArray(cellContent) ? cellContent : [cellContent];

                        elementsInCell.forEach(element => {
                            if (typeof element === 'string') {
                                currentCellHtml += element; // Static text
                            } else if (typeof element === 'object' && element !== null && element.gapId) {
                                // This is a gap/input field. Increment global counter for it.
                                questionCounter++; // Increment for each gap found

                                currentCellHtml += `
                                    <span class="question-number">${questionCounter}.</span>
                                    <input type="text" class="user-answer-input table-completion-input"
                                           id="ans-${textId}-${element.gapId}"
                                           data-question-id="${element.gapId}"
                                           data-question-type="${qGroup.type}">
                                `;
                            }
                        });
                        tableHtml += currentCellHtml;
                        tableHtml += '</td>';
                    });
                    tableHtml += '</tr>';
                });

                tableHtml += '</tbody></table>';
                tableContainer.innerHTML = tableHtml;
                questionGroupDiv.appendChild(tableContainer);
                questionsAreaDiv.appendChild(questionGroupDiv);

                return; // Skip the rest of the loop for this qGroup as it's handled.
            }

            // --- Logic for other question types (gap-fill, matching-headings, true-false, etc.) ---
            const questionList = document.createElement('ul');
            questionList.classList.add(qGroup.type);

            qGroup.items.forEach(item => {
                // Increment questionCounter for EVERY item here too, regardless of its displayed number status
                questionCounter++;

                const li = document.createElement('li');
                li.classList.add('question-item');

                let questionHtmlContent = '';
                const numberSpan = `<span class="question-number">${questionCounter}.</span>`; // Prepare the number span

                if (qGroup.type === 'gap-fill') {
                    // For gap-fill, the number is embedded in item.text, so we DON'T prepend the numberSpan.
                    const inputPlaceholderReplaced = item.text.replace('_____', `<input type="text" class="user-answer-input gap-fill-input" id="ans-${textId}-${item.id}" data-question-id="${item.id}" data-question-type="${qGroup.type}">`);
                    questionHtmlContent = `<span class="question-text">${inputPlaceholderReplaced}</span>`;
                } else {
                    // For all other types, we DO prepend the numberSpan.
                    if (qGroup.type === 'matching-headings' || qGroup.type === 'matching-information') {
                        questionHtmlContent = `
                            ${numberSpan}
                            <input type="text" class="user-answer-input" id="ans-${textId}-${item.id}" data-question-id="${item.id}" data-question-type="${qGroup.type}" maxlength="4" onkeyup="this.value = this.value.toUpperCase()">
                            <span class="question-text">${item.text}</span>
                        `;
                    } else if (qGroup.type === 'true-false-not-given') {
                        questionHtmlContent = `
                            ${numberSpan}
                            <span class="question-text">${item.text}</span><br>
                            <label><input type="radio" class="user-answer-input" name="radio-ans-${textId}-${item.id}" value="TRUE" data-question-id="${item.id}" data-question-type="${qGroup.type}"> TRUE</label><br>
                            <label><input type="radio" class="user-answer-input" name="radio-ans-${textId}-${item.id}" value="FALSE" data-question-id="${item.id}" data-question-type="${qGroup.type}"> FALSE</label><br>
                            <label><input type="radio" class="user-answer-input" name="radio-ans-${textId}-${item.id}" value="NOT GIVEN" data-question-id="${item.id}" data-question-type="${qGroup.type}"> NOT GIVEN</label>
                        `;
                    } else if (qGroup.type === 'multiple-choice') {
                        let optionsHtml = '';
                        for (const optionKey in item.options) {
                            optionsHtml += `<label><input type="radio" class="user-answer-input" name="radio-ans-${textId}-${item.id}" value="${optionKey}" data-question-id="${item.id}" data-question-type="${qGroup.type}"> ${optionKey}. ${item.options[optionKey]}</label><br>`;
                        }
                        questionHtmlContent = `
                            ${numberSpan}
                            <span class="question-text">${item.question}</span><br>
                            ${optionsHtml}
                        `;
                    } else if (qGroup.type === 'summary-completion') {
                        const inputPlaceholderReplaced = item.text.replace('__________', `<input type="text" class="user-answer-input summary-input" id="ans-${textId}-${item.id}" data-question-id="${item.id}" data-question-type="${qGroup.type}">`);
                        questionHtmlContent = `
                            ${numberSpan}
                            <span class="question-text">${inputPlaceholderReplaced}</span>
                        `;
                    } else if (qGroup.type === 'short-answer') {
                        questionHtmlContent = `
                            ${numberSpan}
                            <span class="question-text">${item.text}</span> <input type="text" class="user-answer-input" id="ans-${textId}-${item.id}" data-question-id="${item.id}" data-question-type="${qGroup.type}">
                        `;
                    }
                }
                li.innerHTML = questionHtmlContent;
                questionList.appendChild(li);
            });
            questionGroupDiv.appendChild(questionList);
            questionsAreaDiv.appendChild(questionGroupDiv);
        });

        saveCurrentAnswers();
        applyHighlights(currentTextId, 'questions');
        restoreAnswers(currentTextId);
        textNavigationButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `${textId}-btn`) {
                btn.classList.add('active');
            }
        });
        setupHighlightingListeners(readingPassageDiv);
        setupHighlightingListeners(questionsAreaDiv);
    }

    function saveCurrentAnswers() {
        if (!answers[currentTextId]) {
            answers[currentTextId] = {};
        }
        const questionIdsInView = new Set();
        questionsAreaDiv.querySelectorAll('.user-answer-input').forEach(input => {
            questionIdsInView.add(input.dataset.questionId);
        });
        questionIdsInView.forEach(qId => {
            const inputsForQuestion = questionsAreaDiv.querySelectorAll(`[data-question-id="${qId}"]`);
            if (inputsForQuestion.length === 0) return;
            const firstInput = inputsForQuestion[0];

            if (firstInput.type === 'text') {
                answers[currentTextId][qId] = firstInput.value;
            } else if (firstInput.type === 'radio') {
                const checkedRadio = Array.from(inputsForQuestion).find(radio => radio.checked);
                if (checkedRadio) {
                    answers[currentTextId][qId] = checkedRadio.value;
                } else {
                    delete answers[currentTextId][qId];
                }
            }
        });
    }

    function restoreAnswers(textId) {
        const savedAnswersForText = answers[textId] || {};
        questionsAreaDiv.querySelectorAll('.user-answer-input').forEach(input => {
            const qId = input.dataset.questionId;
            const savedValue = savedAnswersForText[qId];

            if (input.type === 'text') {
                input.value = savedValue !== undefined ? savedValue : '';
            } else if (input.type === 'radio') {
                if (savedValue !== undefined) {
                    input.checked = (input.value === savedValue);
                } else {
                    input.checked = false;
                }
            }
        });
    }

    function setupHighlightingListeners(element) {
        element.onmouseup = function(event) {
            const selection = window.getSelection();
            if (selection.toString().length > 0 && element.contains(selection.anchorNode) && element.contains(selection.focusNode)) {
                const range = selection.getRangeAt(0);
                const span = document.createElement('span');
                span.classList.add('highlighted');
                try {
                    range.surroundContents(span);
                    saveCurrentHighlights();
                } catch (e) {
                    console.warn("[Highlighting] Could not highlight selection (e.g., partial tag selection):", e);
                }
                selection.removeAllRanges();
            }
        };
        element.onclick = function(event) {
            let target = event.target;
            while (target && target !== element) {
                if (target.classList.contains('highlighted')) {
                    const parent = target.parentNode;
                    while (target.firstChild) {
                        parent.insertBefore(target.firstChild, target);
                    }
                    parent.removeChild(target);
                    saveCurrentHighlights();
                    return;
                }
                target = target.parentNode;
            }
        };
    }

    function saveCurrentHighlights() {
        if (!highlights[currentTextId]) {
            highlights[currentTextId] = { passage: [], questions: [] };
        }
        highlights[currentTextId].passage = [];
        highlights[currentTextId].questions = [];
        readingPassageDiv.querySelectorAll('.highlighted').forEach(h => {
            highlights[currentTextId].passage.push(h.outerHTML);
        });
        questionsAreaDiv.querySelectorAll('.highlighted').forEach(h => {
            highlights[currentTextId].questions.push(h.outerHTML);
        });
    }

    function applyHighlights(textId, areaType) {
        const targetElement = areaType === 'passage' ? readingPassageDiv : questionsAreaDiv;
        if (highlights[textId] && highlights[textId][areaType] && highlights[textId][areaType].length > 0) {
            let currentContent = targetElement.innerHTML;
            currentContent = currentContent.replace(/<span class="highlighted">(.*?)<\/span>/g, '$1');
            highlights[textId][areaType].forEach(highlightHtml => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(highlightHtml, 'text/html');
                const innerText = doc.body.textContent;
                if (innerText && currentContent.includes(innerText)) {
                    currentContent = currentContent.replace(innerText, highlightHtml);
                } else {
                    console.warn(`[applyHighlights] Could not re-apply highlight: "${innerText}" not found in ${areaType} content for ${textId}.`);
                }
            });
            targetElement.innerHTML = currentContent;
        } else {
            targetElement.innerHTML = targetElement.innerHTML.replace(/<span class="highlighted">(.*?)<\/span>/g, '$1');
        }
    }

    textNavigationButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const textId = event.target.id.replace('-btn', '');
            if (textId !== currentTextId) {
                loadContent(textId);
            }
        });
    });

    function calculateScore() {
        saveCurrentAnswers();
        let totalCorrect = 0;
        let totalQuestions = 0;
        ieltsData.forEach(textData => {
            textData.questions.forEach(qGroup => {
                // For all question types, iterate through their 'items' array.
                // The 'items' array consistently defines the scorable questions for each group.
                if (qGroup.items && qGroup.items.length) {
                    qGroup.items.forEach(item => {
                        totalQuestions++;
                        const userAnswer = answers[textData.id]?.[item.id];
                        let correct = false; // Flag to track if the answer is correct

                        // Normalize user answer (trim whitespace and convert to uppercase)
                        const normalizedUserAnswer = userAnswer ? String(userAnswer).trim().toUpperCase() : '';

                        let correctAnswersForThisItem = qGroup.answers?.[item.id];

                        // Ensure correctAnswersForThisItem is always an array for consistent processing.
                        // If it's a single string, convert it to an array.
                        if (!Array.isArray(correctAnswersForThisItem)) {
                            correctAnswersForThisItem = [correctAnswersForThisItem];
                        }

                        // Check if the user's normalized answer matches any of the normalized accepted correct answers
                        for (const correctVariant of correctAnswersForThisItem) {
                            const normalizedCorrectVariant = correctVariant ? String(correctVariant).trim().toUpperCase() : '';
                            if (normalizedUserAnswer === normalizedCorrectVariant) {
                                correct = true;
                                break; // Found a match, no need to check other variants
                            }
                        }

                        if (correct) {
                            totalCorrect++;
                        }
                    });
                }
            });
        });
        displayScoreModal(totalCorrect, totalQuestions);
    }

    function displayScoreModal(correct, total) {
        const modalHtml = `
            <div id="scoreModal" class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2>Test Results</h2>
                    <p>You scored: <strong>${correct} / ${total}</strong></p>
                    <p>Good luck with your IELTS preparation!</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = document.getElementById('scoreModal');
        const closeButton = modal.querySelector('.close-button');
        modal.style.display = 'block';
        closeButton.onclick = function() { modal.remove(); };
        window.onclick = function(event) { if (event.target == modal) { modal.remove(); } };
    }

    submitTestBtn.addEventListener('click', calculateScore);

    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent =
                `${String(hours).padStart(2, '0')}:` +
                `${String(minutes).padStart(2, '0')}:` +
                `${String(seconds).padStart(2, '0')}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert('Time is up! The test has ended.');
                calculateScore();
                submitTestBtn.disabled = true;
                document.querySelectorAll('#questions-area input, #questions-area textarea, #questions-area select').forEach(input => {
                    input.disabled = true;
                });
            }
        }, 1000);
    }
// ... (previous JavaScript code remains the same) ...

    function displayScoreModal(correct, total) {
        const modalHtml = `
            <div id="scoreModal" class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2>Test Results</h2>
                    <p>You scored: <strong>${correct} / ${total}</strong></p>
                    <button id="showDetailsBtn" style="margin-top: 15px; padding: 10px 20px; cursor: pointer;">Show Answer Details</button>
                    <div id="answerSummary" style="margin-top: 20px; max-height: 400px; overflow-y: auto; text-align: left; border-top: 1px solid #eee; padding-top: 15px; display: none;">
                        </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('scoreModal');
        const closeButton = modal.querySelector('.close-button');
        const showDetailsBtn = modal.querySelector('#showDetailsBtn');
        const answerSummaryDiv = modal.querySelector('#answerSummary');

        modal.style.display = 'block';

        closeButton.onclick = function() {
            modal.remove();
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.remove();
            }
        };

        showDetailsBtn.onclick = function() {
            if (answerSummaryDiv.style.display === 'none') {
                answerSummaryDiv.innerHTML = generateAnswerSummaryHtml();
                answerSummaryDiv.style.display = 'block';
                showDetailsBtn.textContent = 'Hide Answer Details';
            } else {
                answerSummaryDiv.style.display = 'none';
                answerSummaryDiv.innerHTML = ''; // Clear content when hidden
                showDetailsBtn.textContent = 'Show Answer Details';
            }
        };
    }

    function generateAnswerSummaryHtml() {
        let summaryHtml = '<h3>Answer Summary</h3>';
        let currentQuestionNumber = 0; // Use a separate counter for display in summary

        ieltsData.forEach(textData => {
            summaryHtml += `<h4>Text: ${textData.id.replace('text', 'Reading Passage ')}</h4>`;

            textData.questions.forEach(qGroup => {
                summaryHtml += `<h5>${qGroup.instructions.replace(/<\/?strong>|<\/?br\/?>/g, '')}</h5>`; // Clean up instructions

                const itemsToProcess = qGroup.items || []; // Ensure 'items' array exists

                // Prepare a map for table-completion to get original cell content if available
                const tableCellMap = new Map();
                if (qGroup.type === 'table-completion' && qGroup.table && qGroup.table.rows) {
                    qGroup.table.rows.forEach(rowDataCells => {
                        rowDataCells.forEach(cellContent => {
                            const elementsInCell = Array.isArray(cellContent) ? cellContent : [cellContent];
                            elementsInCell.forEach(element => {
                                if (typeof element === 'object' && element !== null && element.gapId) {
                                    tableCellMap.set(element.gapId, cellContent); // Store the entire cell content
                                }
                            });
                        });
                    });
                }


                itemsToProcess.forEach(item => {
                    currentQuestionNumber++; // Increment for each item across all texts and groups

                    const userAnswer = answers[textData.id]?.[item.id] || '(No answer)';
                    let correctAnswersForThisItem = qGroup.answers?.[item.id];

                    // Ensure correctAnswersForThisItem is always an array
                    if (!Array.isArray(correctAnswersForThisItem)) {
                        correctAnswersForThisItem = [correctAnswersForThisItem];
                    }
                    const displayCorrectAnswer = correctAnswersForThisItem.filter(ans => ans !== undefined).join(' / '); // Join multiple correct answers

                    const normalizedUserAnswer = String(userAnswer).trim().toUpperCase();
                    let isCorrect = false;
                    for (const correctVariant of correctAnswersForThisItem) {
                        const normalizedCorrectVariant = String(correctVariant || '').trim().toUpperCase();
                        if (normalizedUserAnswer === normalizedCorrectVariant) {
                            isCorrect = true;
                            break;
                        }
                    }

                    const statusClass = isCorrect ? 'correct-answer' : 'incorrect-answer';

                    summaryHtml += `<div class="answer-item ${statusClass}">`;
                    summaryHtml += `<p><strong>${currentQuestionNumber}.</strong> `;

                    // Display question text based on type
                    if (qGroup.type === 'table-completion') {
                        // For table-completion, reconstruct the cell content to show context
                        const cellContent = tableCellMap.get(item.id);
                        if (cellContent) {
                            let cellDisplayText = '';
                            const elementsInCell = Array.isArray(cellContent) ? cellContent : [cellContent];
                            elementsInCell.forEach(el => {
                                if (typeof el === 'string') {
                                    cellDisplayText += el;
                                } else if (typeof el === 'object' && el !== null && el.gapId) {
                                    if (el.gapId === item.id) {
                                        cellDisplayText += `<u>[${currentQuestionNumber}]</u>`; // Highlight the specific gap
                                    } else {
                                        // If there are other gaps in the same cell, just show their number placeholder
                                        // This requires finding their currentQuestionNumber which is complicated on the fly.
                                        // For simplicity here, we'll just show a generic placeholder for other gaps.
                                        cellDisplayText += `<u>[Gap]</u>`;
                                    }
                                }
                            });
                            summaryHtml += `(Table) ${cellDisplayText}`;
                        } else {
                             summaryHtml += `(Table Question ID: ${item.id})`; // Fallback
                        }
                    } else if (qGroup.type === 'multiple-choice') {
                        summaryHtml += `(MC) ${item.question}`;
                    } else if (qGroup.type === 'true-false-not-given') {
                        summaryHtml += `(T/F/NG) ${item.text}`;
                    } else if (qGroup.type === 'matching-headings' || qGroup.type === 'matching-information') {
                         summaryHtml += `(Matching) ${item.text}`;
                    } else if (qGroup.type === 'gap-fill' || qGroup.type === 'summary-completion' || qGroup.type === 'short-answer') {
                        summaryHtml += item.text.replace('_____', '__________').replace('__________', '__________'); // Show gaps as underscores for context
                    } else {
                        summaryHtml += `(Unknown type) ${item.id}`; // Fallback for unhandled types
                    }
                    summaryHtml += `</p>`;

                    summaryHtml += `<p>Your Answer: <span class="user-given-answer">${userAnswer}</span></p>`;
                    summaryHtml += `<p>Correct Answer: <span class="actual-correct-answer">${displayCorrectAnswer}</span></p>`;
                    summaryHtml += `</div>`;
                });
            });
        });

        // Add some basic styling for the summary
        const style = `
            <style>
                .answer-item {
                    border: 1px solid #ddd;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                }
                .answer-item p {
                    margin: 5px 0;
                }
                .answer-item.correct-answer {
                    background-color: #e6ffe6; /* Light green */
                    border-color: #a3e9a3;
                }
                .answer-item.incorrect-answer {
                    background-color: #ffe6e6; /* Light red */
                    border-color: #e9a3a3;
                }
                .user-given-answer {
                    font-weight: bold;
                }
                .actual-correct-answer {
                    color: green;
                    font-weight: bold;
                }
                .incorrect-answer .user-given-answer {
                    color: red;
                }
            </style>
        `;
        return style + summaryHtml;
    }

    loadContent(currentTextId);
    startTimer();
});