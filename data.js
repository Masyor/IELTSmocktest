const ieltsData = [
    {
        id: 'text1',
        title: 'The History of Tea',
        passage: `
            <h3>Reading Passage 1: Pugilism</h3>
			<p><strong>A</strong></p>
            <p>Pugilism, a word rarely used today, is another term for boxing, a combat sport and a martial art in which two
people throw punches at each other for a predetermined amount of time in a boxing ring. The term pugilism comes
from the Latin word "pugil", which means "a boxer", and is related to the Latin word "pugnus", which stands for "a
fist".</p>
<p>There is no conclusive evidence of where the practice of boxing comes from. The first known form of boxing
seems to have prehistoric origins in present-day Ethiopia, where it presumably appeared in the sixth millennium
BC. When the Egyptians invaded Nubia, they learned the art of boxing from the local population, consequently
taking the sport to Egypt where it gained considerable popularity. From Egypt, boxing spread to other countries,
including Greece, eastward to Mesopotamia, and northward, all the way to Rome. Archaeological evidence of
ancient Greek boxing goes as far back as the Minoan and Mycenaean periods. Among numerous legends about the
origins of boxing in Greece one stands out in particular. It says that Theseus, the founder of Athens, invented a
form of fighting in which two men sat face-to-face and hit each other with their fists until one of them was dead.</p>
            <p><strong>B</strong></p>
            <p>All of this might sound like a barbaric pastime, but there is so much more to it than just two people trying to hit
each other as hard as they can. Even back then, the sport had certain rules and regulations. The few rules of boxing
in Ancient Greece that are known to us are mostly based on historical references and images. There were no holds
or wrestling. Any type of blow with the hand was allowed, but no eye gouging. No ring was used, and there were
no rounds or time limits. The fight would go on until one man was knocked out or admitted he had been beaten.
Unlike the modern sport, there was no rule against hitting an opponent when he was down. There were no weight
classes within the men's and boys' divisions; opponents for a match were chosen randomly. Although there is some
evidence of kicks used in ancient Greek boxing, this remains a subject for debate among scholars.</p>
<p>Instead of gloves, Olympic boxers of the time wrapped leather thongs around their hands and wrists, leaving their
fingers free. The earliest depiction of ancient boxing gloves in use comes in the form of a Minoan fresco from
Thera (modern-day Santorini), which is commonly known as the Boxing Boys, and dates from around 1600 BCE.
Eventually down the history road, further safety measures have been introduced to protect boxers from serious
injury. The additions included mouthguards and headgear, along with revised rules governing the length of rounds
and the conduct of the fight.</p>
            <p><strong>C</strong></p>
            <p>Boxing became an Olympic Games sport as early as 688 BC. This effectively meant boxing was one of the first
sports added to the Games. Onomastus of Smyrna was the first winner in Olympic boxing. Despite the lack of rules
and the tough nature of boxing at the Ancient Games, honour, respect, and fair play were always at the fulcrum of
this noble art. At the time, the god Apollo was regarded as the inventor and guardian of the sport of boxing. Boxers
in Ancient Greece who went down in history were revered as superheroes.<p>
</p>Boxing developed over time, with the pursuit of monetary gain becoming a significant part of the sport in England
in the 17th century. Popular with the gambling crowd because of its brutality and spectacularity, it slowly evolved
to become more civilised. Prizefighting was gaining popularity as well. Men were carefully trained to meet in the
roped-off ring, usually marked out in a field. Fights went to a finish, that is, until one of the pair was unable to
continue. The concept of modern boxing emerged around the mid-19th century in England. At that time, illegal
fights were organized by matchmakers to win bets. Often, the police would come and break up the fights. In 1865,
a journalist driven by his passion for pugilism wrote the rules of boxing, referred to as the Marquess of
Queensberry’s rules. Among a total of 15 rules, it mandated the fighters to wear gloves, banned wrestling, and
generally made this bloody sport more humane. Another thing to note is that it introduced certain standards and
promoted sportsmanship.</p>
            <p><strong>D</strong></p>
            <p>Around the same time in the 19th century, the sport began to gain widespread popularity in the United States,
where the first world championship fight was held in 1892. This marked the beginning of the "Golden Age" of
boxing, where legendary fighters such as Jack Johnson, Joe Louis, and Muhammad Ali dominated the sport. By the
20th century, America had become the centre of professional boxing. The sport's economic incentive rose as
growing viewership brought larger purses and commercial success. The increasing popularity of boxing led to a
rise in minority participation, with the first successful non-white champions coming at the beginning of the 20th
century, despite severe racism plaguing their attempts to gain and hold championship titles.</p>
			<p><strong>E</strong></p>
			<p>Although predominantly a men’s sport because of its ruthless nature, women are not left behind. Women's boxing
has been getting increasingly more attention over time, with the first women's boxing championship taking place in
1974. Women's amateur boxing championship was first introduced at the 1996 Summer Olympics in Atlanta,
Georgia. Since then, it has become a regular part of the Olympic program, where women compete in three weight
classes. It was officially recognized as an Olympic sport in 2012.</p>
<p>Women's professional boxing has also grown in popularity in recent years, with many talented female boxers
competing at the highest levels of the sport. Some of the most successful female boxers include Mary Kom of
India, who is a five-time World Amateur Boxing champion and the only woman boxer to have won a medal in each
one of the six world championships, and Claressa Shields, who is a three-time Olympic gold medalist and the most
successful American amateur boxer of all time.</p>
        `,
        questions: [
            {
                type: 'matching-headings',
                instructions: '<strong>Questions 1-5</strong></br></br>Reading Passage 1 has five sections (A-E). </br> Choose the most suitable heading for each section from the list of headings below. </br> Write the appropriate number (I-VIII) in boxes 1-5 on your Answer Sheet. There are more headings than sections, so you will not use all of them.</br></br>List of Headings</br>&emsp;I Punching and Kicking</br>&emsp;II Across the Atlantic</br>&emsp;III Blessed by Heavens</br>&emsp;IV Outnumbered, but not Outperformed</br>&emsp;V Evolution and Recognition</br>&emsp;VI Keeping it Civilised</br>&emsp;VII The First Blow</br>&emsp;VIII Gender Inequality',
                items: [
                    { id: 'mh1', text: 'Section A' },
                    { id: 'mh2', text: 'Section B' },
                    { id: 'mh3', text: 'Section C' },
					{ id: 'mh4', text: 'Section D' },
                    { id: 'mh5', text: 'Section E' }
                ],
                answers: {
                    'mh1': 'VII',
                    'mh2': 'VI',
                    'mh3': 'V',
					'mh4': 'II',
                    'mh5': 'IV'
                }
            },
            {
                type: 'true-false-not-given',
                instructions: '<strong>Questions 6-9</strong></br></br>Do the following statements agree with the information given in Reading Passage 1?</br></br>In boxes 6-9 choose:</br>&emsp;TRUE if the statement agrees with the information</br>&emsp;FALSE if the statement contradicts the information</br>&emsp;NOT GIVEN if there is no information on this',
                items: [
                    { id: 'tfng6', text: 'It is unknown what country boxing came from.' },
                    { id: 'tfng7', text: 'Greeks were the first to come up with rules for boxing matches.' },
                    { id: 'tfng8', text: 'No visual evidence of ancient boxing has survived.' },
                    { id: 'tfng9', text: 'A certain deity was associated with the sports of boxing.' }
                ],
                answers: {
                    'tfng6': 'TRUE',
                    'tfng7': 'NOT GIVEN',
                    'tfng8': 'FALSE',
                    'tfng9': 'TRUE'
                }
            },
            {
                type: 'multiple-choice',
                instructions: '<strong>Questions 10-14</strong></br></br>Choose the appropriate letters A-C and write them in boxes 10-14',
                items: [
                    {
                        id: 'mc10',
                        question: 'Boxing in 17th century England',
                        options: {
                            A: 'was illegal',
                            B: 'often had matches outdoors',
                            C: 'made gambling more popular'
                        }
                    },
                    {
                        id: 'mc11',
                        question: 'Marquess of Queensberry’s rules didn\'t require fighters to',
                        options: {
                            A: 'wear certain equipment',
                            B: 'treat opponents with respect',
                            C: 'use wrestling techniques'
                        }
                    },
					{
                        id: 'mc12',
                        question: 'Boxing in the United States',
                        options: {
                            A: 'helped defeat racism',
                            B: 'gave rise to many prominent athletes',
                            C: 'made the sports more expensive'
                        }
                    },
					{
                        id: 'mc13',
                        question: 'What is said about female boxing in the passage?',
                        options: {
                            A: 'Women are less likely to be boxers',
                            B: 'It has gained more fans recently',
                            C: 'It is less violent'
                        }
					},
					{
                        id: 'mc14',
                        question: 'Which aspect of boxing has remained unchanged throughout its history?',
                        options: {
                            A: 'How opponents are matched',
                            B: 'The venues of fights',
                            C: 'Prohibition of certain fighting techniques'
                        }
                    }
                ],
                answers: {
                    'mc10': 'B',
					'mc11': 'C',
					'mc12': 'B',
					'mc13': 'B',
                    'mc14': 'C'
                }
            },
            
        ]
    },
    {
        id: 'text2',
        title: 'The Impact of Artificial Intelligence',
        passage: `
            <h3>Reading Passage 2: The Antarctic</h3>
			<p><i>A deep dive into what remains to be the most mysterious continent.</i></p>
            <p>Antarctica is a sight to behold. Frigid landscape of snow cliffs, alternating with planes of ice, a place so seemingly
hostile that any form of life seems highly improbable. Home to diverse but fragile ecosystems, the continent plays
a crucial role in regulating the global climate and ocean currents.</p>
<p>The Antarctic and Antarctica are terms that are easily confused. To clarify, the first one is the region that includes
the continent itself, the Kerguelen Plateau, which is located some 2500 kilometers north, and a handful of much
smaller islands of the region. Conversely, Antarctica is a massive sheet of ice and snow with the South Pole in its
centre. The name itself comes from the Greek ‘antarktikos’, which means ‘the opposite of the Arctic’. However,
the literal translation would be ‘no bears’. This can be slightly confusing until you learn that the word Arctic is
derived from ‘arktos’ with the meaning ‘bear’. The bear in question is the constellation of Ursa Major, which has
stars that are said to have helped sailors of the past navigate towards the Arctic. Incidentally, the Arctic has polar
bears, and Antarctica does not.</p>
<p>Although the existence of the southern continent had been hypothesized by ancient scholars, it wasn't until the
early 19th century that the first confirmed sighting of the Antarctic mainland occurred. In 1820, a Russian
expedition led by Fabian Gottlieb von Bellingshausen and Mikhail Lazarev composed of two ships, Vostok (East)
and Mirniy (Peaceful), were the first to see the continent in person, followed closely by one led by British naval
officer, Edward Bransfield. These initial sightings led to increased interest to the region, culminating in the famed
explorations of James Clark Ross and Sir Ernest Shackleton, who made significant contributions to our
understanding of the continent.</p>
<p>Due to its extreme location off the equator, the Antarctic region has only two distinct seasons – summer and winter,
both with striking seasonal variation. Located in the southern hemisphere, its seasons are the opposite of what you
would think of them. During summer months its sees virtually no sunlight – the sun sets in late April. From then
on, you get increasingly cold weather with temperature going as low as 85°C; Contrastingly, September to March
is the warmer season with sun almost always in the sky and, owing to this, the local animals such as seals and
penguins muchmore active. The mid-seasons grace the continent with a sunrise and a sunset respectively, both
lasting for weeks.</p>
<p>Despite being a gigantic glacier, technically Antarctica falls into the climatic category of a desert. Even though in
our minds desert is something hot and sultry, this is not exactly what makes a desert. One striking similarity
between the sandy dunes of Sahara and the endless snow-covered plains of Antarctica is the amount of annual
precipitation. The region gets as little as 10 mm of rainfall a year. To put that figure into perspective, that is about
50 times less than world’s average figure. Because the continent is exposed to such miniscule amounts of rain,
nothing prevented ice and compacted snow from growing thicker over the course of millions of years. No rain and
low temperatures, in turn, lead to very dry air with very low humidity levels. The place also has the strongest winds
on the planet, with gusts reaching in excess of 300 kilometers an hour. This is mostly due to its stark seasonal
change and the way these affect the movement of air masses.</p>
<p>The continent has no indigenous people – men and women that populate it fall into two general categories:
scientists and tourists. The majority of them reside there on a semi-permanent basis, usually during the summer season. They concern themselves with various researches, from astronomy and biology to something more exotic,
such as glaciology and oceanography. The second, much larger group of people are tourists that come from all
across the world with their own aims in mind. Some - to marvel at the fields of glittering snow that span all the way
to the horizon; others – to get first-hand experience of the last unconquered bastion of savage nature. There are
individuals who have the Antarctic in their bucket list of places to visit – often after they have been almost
everywhere else. However, the lion's share choose to limit their exposure to a view from the comfort of their cruise
ship, admiring the greatness, while also keeping a safe distance from the harsh realities of the place.</p>
<p>All the scientific activity happening in the region has to abide by the Antarctic Treaty and the Madrid Protocol,
both in an effort to keep it as a place for peaceful researches that should have environmental concerns as top
priority. The former, signed in 1959 by 12 countries, aims to preserve Antarctica for peaceful and scientific
purposes. It sets aside territorial claims, promotes scientific cooperation, and prohibits military activities. The
Madrid Protocol, an addition to the treaty in 1991, designates Antarctica as a natural reserve, keeping a close eye
on its ecosystems. The reason why the researches focus on the environmental aspect is because of the region's
pivotal role in the entire planet's wellbeing. Antarctica's vast ice sheets and glaciers reflect a significant portion of
solar radiation back into space, helping to maintain the planet's overall temperature balance. The frigid waters
surrounding Antarctica act as a massive heat sink, absorbing and storing a great deal of warmth from the
atmosphere. That is just the tip of the iceberg though. The formation of dense, cold seawater near Antarctica drives
the global thermohaline circulation, also known as the ocean conveyor belt, indispensable at distributing heat
around the world. This circulation system influences regional climates and weather patterns, affecting everything
from precipitation levels to the intensity of tropical storms. This is why safeguarding the Antarctic region and
ensuring its longevity is vital for our planet's well-being.</p>
        `,
        questions: [
            {
                type: 'true-false-not-given',
                instructions: '<strong>Questions 15-20</strong></br></br>Do the following statements agree with the information given in Reading Passage 2?</br></br>In boxes 15-20 choose:</br>&emsp;TRUE if the statement agrees with the information</br>&emsp;FALSE if the statement contradicts the information</br>&emsp;NOT GIVEN if there is no information on this',
                items: [
                    { id: 'tfng15', text: 'Antarctica is larger in size than The Antarctic.' },
                    { id: 'tfng16', text: 'The name of the northernmost continent originates from a celestial body.' },
                    { id: 'tfng17', text: 'No bears can be found in the Antarctic.' },
					{ id: 'tfng18', text: 'The Antarctic gets colder during winter months.' },
					{ id: 'tfng19', text: 'An unusual weather condition has led to accumulation of landmass.' },
                    { id: 'tfng20', text: 'No aboriginal population exists in the Antarctic.' }
                ],
                answers: {
                    'tfng15': 'FALSE',
					'tfng16': 'TRUE',
					'tfng17': 'TRUE',
                    'tfng18': 'FALSE',
                    'tfng19': 'TRUE',
                    'tfng20': 'NOT GIVEN'
                }
            },
			{
                type: 'multiple-choice',
                instructions: '<strong>Questions 21-23</strong></br></br>Choose the appropriate letters A-C and write them in boxes 21-23',
                items: [
                    {
                        id: 'mc21',
                        question: 'What is said about the scientists of the Antarctic?',
                        options: {
                            A: 'They leave the continent during winter months',
                            B: 'The focus of their research constantly changes',
                            C: 'Their work has limitations imposed by international agreements'
                        }
                    },
                    {
                        id: 'mc22',
                        question: 'Most tourists coming to see the Antarctic',
                        options: {
                            A: 'have already seen all other continents.',
                            B: 'do not get off the ship.',
                            C: 'enjoy the grand views of the place.'
                        }
                    },
					{
                        id: 'mc23',
                        question: 'Why is it important to save the Antarctic?',
                        options: {
                            A: 'It creates a fruitful scientific environment',
                            B: 'It aids world ocean water circulation',
                            C: 'It is a vital part of the global ecosystem'
                        }
                    },
					],
                answers: {
                    'mc21': 'C',
					'mc22': 'B',
					'mc23': 'C'
				}
            },
			{
                type: 'gap-fill',
                instructions: '<strong>Questions 24-28</strong></br></br>Answer the questions below using NO MORE THAN ONE WORD from the passage for each answer.',
                items: [
                    { id: 'gfow24', text: 'Judging by its 24. _____ levels it is a desert, although entirely covered by snow.' },
                    { id: 'gfow25', text: 'Its 25. _____are ferocious and merciless, reaching highest velocities on the planet.' },
                    { id: 'gfow26', text: 'The continent\'s 26. _____had been predicted long before it was discovered in the beginning of the 19th century.' },
                    { id: 'gfow27', text: 'The reason this region is of utmost importance to us is simple: its 27. _____act as a shield against the harmful radiation Earth is exposed to.' },
                    { id: 'gfow28', text: 'If these were to perish entirely, it would upset the intricate temperature balance and threaten our 28. _____.' }
                ],
                answers: {
                    'gfow24': 'precipitation',
                    'gfow25': 'winds',
                    'gfow26': 'existence',
                    'gfow27': 'glaciers',
                    'gfow28': ['wellbeing','well-being']
                }
			},
			//{
            //    type: 'summary-completion',
            //    instructions: '<strong>Questions 24-28</strong></br></br>Answer the questions below using NO MORE THAN ONE WORD from the passage for each answer.',
            //    items: [
            //        { id: 'sc1', text: 'Tea originated in __________ and was initially used as a medicinal drink.' },
            //        { id: 'sc2', text: 'It became deeply embedded in Japanese culture after being introduced by __________.' },
            //        { id: 'sc3', text: 'The British East India Company established large tea plantations in India and Ceylon to break China\'s __________.' }
            //    ],
            //    answers: {
            //        'sc1': 'China',
            //        'sc2': 'Buddhist monks',
            //        'sc3': 'monopoly'
            //    }
            //}
            //{
            //    type: 'short-answer',
            //    instructions: 'Answer the questions below. Write NO MORE THAN THREE WORDS for each answer.',
            //    items: [
            //        { id: 'sa1', text: 'What is a subset of Artificial Intelligence?' },
            //        { id: 'sa2', text: 'What can AI algorithms analyze to detect early signs of cancer?' }
            //    ],
            //    answers: {
            //        'sa1': 'Machine learning',
            //        'sa2': 'medical images'
            //    }
            //}
        ]
    },
    {
        id: 'text3',
        title: 'The Impact of Artificial Intelligence',
        passage: `
            <h3>Reading Passage 3: Automobile engines of yesterday, today and tomorrow</h3>
			<p><i>Electric cars are all the rage nowadays. Some believe that the craze was started by a well-known, eccentric
billionaire and his lovechild of an electric car company. Others hold that people came to their senses about the
enormous carbon footprint their cars are leaving behind.</i></p>
            <p>This may come as a surprise to many, but the electric engine is not a novel idea. The mist electricity-propelled
vehicles were made as early as 1830, effectively predating cars equipped with the more conventional fuel engines
by more than 50 years. By the beginning of the twentieth century, however, the electric motor had started lagging
behind the petrol engine for a number of reasons, primarily due to their relatively high costs and unimpressive top
speed. Internal combustion engine, on the other hand, was undergoing rapid development. At the time, petrol
proved to be a more energy-efficient fuel, and its engine's output was easy to increase through the combined
displacement volume of all cylinders. Simply put, a bigger engine normally results in more powerful car,
something that is more difficult to achieve with the electric motor. These, among other factors, made it a more
favourable choice for the car manufacturers of the past.</p>
<p>The energy crises of the 1970s and 1980s brought about renewed interest in electric cars as a way to become less
dependent on the price volatility of hydrocarbon fuels. Several major car companies developed models that were
either fully electric or using so-called hybrid systems where petrol and electric engines would work to complement
one another. The latter would mostly be used for stop-and-go traffic, common during rush hours and city traffic in 
general. All in all, public reception of this innovation was lukewarm at best because by the time these new models
went for sale the oil prices had already stabilised, which, for the time being, mostly defeated the purpose of buying
an electric vehicle.</p>
<p>It is worth noting that the price of fuel is not the sole reason to give up on the older technology and make the
switch to electric. Because of its design, the electric motor has a significantly lower number of moving parts, which
in turn means reduced complexity and, consequently, servicing costs. The engine is virtually silent and does not
require as much attention. If that is not attractive enough, on top of that, many countries offer financial concessions
to people who choose to make the switch to driving electric. Depending on their location, they are eligible for free
parking, tax refunds, and other subsidies.</p>
<p>However, the whole idea of electric engines is not without a fault. One concern is limited number of battery charge
cycles. After continued use, the capacity of the battery goes down, reducing the car's range. The only way out is
usually to replace the costly components. And since the technology is still fairly new, there is no consistent
statistical data on how long these might last. Alarmingly, these batteries require particular chemical elements to
produce, some of which can only be procured from a select few locations on our planet, and in limited quantities.
Moreover, because the current era of electric vehicles is still in its infancy, there are not enough professionals
around willing to service these cars. So unless the owner lives in a major metropolitan area, they end up having no
other choice but to travel to another city should some major malfunction take place.</p>
<p>Then comes the issue of infrastructure. While the more glamorous cities like San Francisco boast thousands of
charging stations conveniently placed, this is not the case for most other cities, where charging points are few and
far apart. This means that most electric car owners are limited to recharging their vehicles from power sockets at
home - if they are lucky to live in a house, that is. This limitation alone is enough to hinder mass adoption of the
technology. Since demand for these cars is not quite there yet, and the share of these cars on the road is almost
negligible, local authorities have little incentive to develop the charging network. This ends up in a classic Catch
22 situation with no apparent way out. A probable way out of this deadlock is for private investors to step in and
take upon themselves the daunting task of giving impetus to progress; unsurprisingly, few are willing to do so
because returns on this investment might take decades to manifest themselves.</p>
<p>Back to the century-old technology of internal combustion and things seem to look much more familiar. The
servicing shops, fuel stations and spare parts are ubiquitous. Car mechanics are plenty and knowledgeable.
Moreover, the vehicles themselves are well-documented, making it possible to work on them yourself. Over the
past two decades, the performance, as well as higher efficiency of fossil-fuel engines have increased dramatically,
partially thanks to hybrid systems. Sadly, the less savoury side of the petrol vehicle is known to all of us - the
extent of harm they do to nature. Exhaust fumes and oil spills are the biggest offenders here. Another major point
against fossil fuels is that oil will not last forever.</p>
<p>The prospects of a cleaner, more sustainable alternative to the conventional engine are very lucrative. However,
there is some well-founded scepticism regarding the source of electricity that charges the new engine. At the end of
the day, it is still produced by power plants that pollute the atmosphere. The truth is slightly different, thanks to
how the scale of energy production works. In short, an industrial-scale energy complex is way better at generating
power per unit of emissions created when compared to your average petrol car engine. This means that through
centralization, the gross environmental impact is notably lower. Instead of tens of millions of cars burning fuel,
there are going to be twenty modern power stations, supervised by qualified specialists and complying with the
most stringent ecological standards. Thanks to that, the eco-friendly future, maybe for the first time in human
history, becomes possible.</p>
<p>The bottom line is that the future is almost definitely going to be electric. The big question here is how it will come
about. It could happen organically, through increased demand and heightened consumer interest in this technology.
Alternatively, the state might force it on the drivers through various smog laws and taxes, leaving them no choice
but to give up on their trusted gasoline engines. There is probably only one way to find out - to wait and see.</p>
        `,
        questions: [
			{
				type: 'table-completion',
            instructions: '<strong>Questions 29-35</strong></br></br>Complete the table below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            // IMPORTANT: Define all individual question IDs here in the 'items' array.
            // The order here will determine their global question numbering.
            items: [
                { id: 'tc29' },   // This refers to the gap for Q29
                { id: 'tc30' },     // This refers to the gap for Q30
                { id: 'tc31' },     // This refers to the gap for Q31
                { id: 'tc32' },   // This refers to the gap for Q32
                { id: 'tc33' },  // This refers to the gap for Q33
                { id: 'tc34' },   // This refers to the gap for Q34
				{ id: 'tc35' }   // This refers to the gap for Q35
            ],
            table: {
                headers: ['Engine type', 'Advantages', 'Disadvantages', 'Comments'],
                rows: [
                    // Each row is an array representing cells.
                    // Cell content can be:
                    //   1. A plain string (static text).
                    //   2. An object like { gapId: 'YOUR_ITEM_ID' } for a single input gap.
                    //   3. An array of mixed content (strings and { gapId: ... } objects) for complex cells.
                    ['Electric', 
						['• fewer ', { gapId: 'tc29' }, ' parts</br>• lower', { gapId: 'tc30' }, ' pollution</br>• decreased environmental impact'],
						['• underdeveloped, scarce ', { gapId: 'tc31' }, ' </br>• lack of qualified mechanics</br>• questionable', { gapId: 'tc32' }, ' longevity'],
						'• actively promoted by the government</br>• developing rapidly '
					],
                    ['Petrol', 
						['• parts and ', { gapId: 'tc33' }, ' are available everywhere</br>• simple enough to be fixed yourself'],
						['• limited ', { gapId: 'tc34' }, ' reserves</br>• high levels of pollution'],
						['• can work in conjunction with ', { gapId: 'tc35' }]
					],
                ]
            },
            // The 'answers' object still maps the 'id' from the 'items' array to the correct answer.
            answers: {
                'tc29': 'moving', // Example answer for Q30 (assuming Environmental Impact)
                'tc30': 'noise',    // Example answer for Q31 (assuming Primary Use)
                'tc31': 'infrastructure', // Example answer for Q32 (assuming Primary Use)
                'tc32': 'battery', // Example answer for Q33 (assuming Availability)
                'tc33': 'fuel', // Example answer for Q34 (first gap in complex cell)
				'tc34': 'oil', // Example answer for Q34 (first gap in complex cell)
                'tc35': ['electric motors','electric motor'] // Example answer for Q35 (second gap in complex cell)
            }
			},
            {
                type: 'multiple-choice',
                instructions: '<strong>Questions 36-40</strong></br></br>Choose the appropriate letters A-D and write them in boxes 21-23',
                items: [
                    {
                        id: 'mc36',
                        question: 'Why is government reluctant to expand the electric engine charging grid?',
                        options: {
                            A: 'it is too expensive',
                            B: 'not many people would benefit from it',
                            C: 'people can charge their cars at home',
							D: 'private businesses are more likely to fill this niche'
                        }
                    },
                    {
                        id: 'mc37',
                        question: 'According to the text, electric engines',
                        options: {
                            A: 'get more media attention today.',
                            B: 'enjoyed prolonged period of popularity in the past.',
                            C: 'just like petrol engines, rely on finite resources.',
							D: 'are mostly driven by well-off individuals.'
                        }
                    },
					{
                        id: 'mc38',
                        question: 'How do electric cars manage to have lower environmental impact?',
                        options: {
                            A: 'Because of the stricter ecological standards',
                            B: 'Thanks to more modern technology',
                            C: 'They get energy from a more efficient source',
							D: 'Their engines are easier to recycle'
                        }
                    },
					{
                        id: 'mc39',
                        question: 'When compared to petrol engines, electric ones',
                        options: {
                            A: 'are easier to maintain and service.',
                            B: 'require more specialist knowledge to work on.',
                            C: 'entail additional taxing.',
							D: 'make a more distinct noise when running.'
                        }
                    },
					{
                        id: 'mc40',
                        question: 'What is said about the future of the electric engine?',
                        options: {
                            A: 'It will probably win, one way or another',
                            B: 'Petrol engines are likely to remain more popular',
                            C: 'It depends on infrastructure development',
							D: 'Its future is uncertain'
                        }
                    },
					],
                answers: {
                    'mc36': 'B',
					'mc37': 'C',
					'mc38': 'C',
					'mc39': 'B',
					'mc40': 'A'
				}
            },
        ]
    }
];