// Static sample data. Later this can be replaced with API responses.
const BCS_BOOKS = [
  {
    id: "bangla-foundation",
    title: "BCS Bangla Foundation",
    author: "Dr. Mahfuz Rahman",
    subject: "Bangla",
    level: "Preliminary",
    cover: "assets/covers/bangla.svg",
    price: "৳450",
    shortDescription: "Grammar, literature, authors, and high-frequency Bangla questions for BCS preparation.",
    description: "A structured Bangla guide for BCS candidates covering grammar rules, literary periods, important authors, and question-solving patterns with concise explanations.",
    topics: ["Bangla grammar", "Ancient and medieval literature", "Modern prose and poetry", "Important authors", "Previous question patterns", "Revision checklist"],
    previewPages: [
      { title: "Page 1: Syllabus Focus", body: "Start with grammar rules, literary periods, authors, and previous BCS question patterns. Keep one notebook for high-frequency facts and confusing rules." },
      { title: "Page 2: Grammar Method", body: "Read one rule, study two examples, then solve five questions. Mark every mistake with the rule name so revision stays simple." },
      { title: "Page 3: Literature Timeline", body: "Group Bangla literature into ancient, medieval, and modern periods. Memorize major authors through period-based lists instead of isolated names." },
      { title: "Page 4: Previous Questions", body: "Previous BCS questions reveal repeated topics. Review them after each chapter to understand how facts are tested." },
      { title: "Page 5: Revision Plan", body: "Revise short notes every week. Use wrong answers from practice exams as your next reading checklist." }
    ]
  },
  {
    id: "english-mastery",
    title: "English Grammar Mastery",
    author: "Nadia Islam",
    subject: "English",
    level: "Preliminary",
    cover: "assets/covers/english.svg",
    price: "৳520",
    shortDescription: "Grammar, vocabulary, correction, idioms, and comprehension practice in one place.",
    description: "A practical English preparation book focused on common BCS grammar traps, sentence correction, vocabulary building, and fast comprehension techniques.",
    topics: ["Parts of speech", "Tense and voice", "Narration", "Synonyms and antonyms", "Idioms and phrases", "Reading comprehension"],
    previewPages: [
      { title: "Page 1: Grammar Targets", body: "Focus on parts of speech, tense, voice, narration, and correction. These areas create fast marks when practiced daily." },
      { title: "Page 2: Vocabulary Routine", body: "Learn words in pairs: synonym, antonym, and one sentence. Repetition matters more than long lists." },
      { title: "Page 3: Correction Strategy", body: "Read the whole sentence first, then check agreement, tense, modifier placement, and preposition use." },
      { title: "Page 4: Idioms", body: "Prepare idioms by theme and usage. Avoid memorizing meanings without examples." },
      { title: "Page 5: Comprehension", body: "Skim the passage, read the questions, then return to the exact line for evidence." }
    ]
  },
  {
    id: "bangladesh-affairs",
    title: "Bangladesh Affairs Complete",
    author: "Professor Rafiq Hasan",
    subject: "Bangladesh",
    level: "Preliminary + Written",
    cover: "assets/covers/bangladesh.svg",
    price: "৳650",
    shortDescription: "Constitution, liberation war, geography, economy, and governance topics.",
    description: "A complete Bangladesh Affairs reference for BCS candidates, designed to connect core facts with exam-focused explanations and revision prompts.",
    topics: ["Constitution", "Liberation War", "Geography of Bangladesh", "Economy", "Government system", "Development plans"],
    previewPages: [
      { title: "Page 1: Core Areas", body: "Bangladesh Affairs should be studied through constitution, liberation war, geography, economy, governance, and development planning." },
      { title: "Page 2: Constitution", body: "Make a short article list for state language, fundamental principles, rights, and government structure." },
      { title: "Page 3: Liberation War", body: "Build a date-based timeline from language movement to independence. Connect events with key leaders and documents." },
      { title: "Page 4: Economy", body: "Track GDP, export sectors, remittance, development plans, and budget terms through compact tables." },
      { title: "Page 5: Written Practice", body: "For written answers, combine facts with causes, impacts, and recent examples." }
    ]
  },
  {
    id: "international-affairs",
    title: "International Affairs Review",
    author: "Shaila Karim",
    subject: "International",
    level: "Preliminary",
    cover: "assets/covers/international.svg",
    price: "৳480",
    shortDescription: "Global organizations, diplomacy, world history, and current affairs essentials.",
    description: "A concise guide to international affairs that helps students connect organizations, treaties, regions, and global events with BCS-style questions.",
    topics: ["United Nations", "Global organizations", "World history", "Diplomacy", "Regional politics", "Current affairs"],
    previewPages: [
      { title: "Page 1: Study Map", body: "Separate international affairs into organizations, treaties, regions, conflicts, and current events." },
      { title: "Page 2: United Nations", body: "Prepare the UN by organs, agencies, headquarters, and major functions." },
      { title: "Page 3: Treaties", body: "Memorize treaties with purpose, year, and participating region. Small tables make this easier." },
      { title: "Page 4: Regional Politics", body: "Study South Asia, Middle East, Europe, and Indo-Pacific as separate clusters." },
      { title: "Page 5: Current Affairs", body: "Update facts monthly and connect news with static background topics." }
    ]
  },
  {
    id: "math-ability",
    title: "Math & Mental Ability",
    author: "Tanvir Ahmed",
    subject: "Mathematics",
    level: "Preliminary",
    cover: "assets/covers/math.svg",
    price: "৳560",
    shortDescription: "Arithmetic, algebra, geometry, logic, series, and fast-solving techniques.",
    description: "A speed-focused math and mental ability guide for candidates who want to improve accuracy under time pressure.",
    topics: ["Arithmetic", "Algebra", "Geometry", "Data interpretation", "Number series", "Analytical reasoning"],
    previewPages: [
      { title: "Page 1: Speed Basics", body: "Learn percentage, ratio, average, and profit-loss first. These topics support many other math questions." },
      { title: "Page 2: Formula Sheet", body: "Keep formulas short and practiced. Every formula should have one solved example beside it." },
      { title: "Page 3: Geometry", body: "Draw clean figures, write given values, then select the matching formula before calculating." },
      { title: "Page 4: Mental Ability", body: "Practice number series and logic daily in short timed sets." },
      { title: "Page 5: Exam Timing", body: "Skip long calculations on the first pass. Return after securing easier marks." }
    ]
  },
  {
    id: "science-ict",
    title: "General Science & ICT",
    author: "Mst. Farhana Akter",
    subject: "Science",
    level: "Preliminary",
    cover: "assets/covers/science.svg",
    price: "৳500",
    shortDescription: "Basic science, technology, computer fundamentals, internet, and digital Bangladesh.",
    description: "An accessible science and ICT guide that turns broad syllabus points into short lessons, diagrams, and practice-ready facts.",
    topics: ["Physics basics", "Chemistry basics", "Biology basics", "Computer fundamentals", "Internet", "Emerging technology"],
    previewPages: [
      { title: "Page 1: Science Scope", body: "Cover physics, chemistry, biology, ICT, environment, and daily-life science through short factual lessons." },
      { title: "Page 2: Physics", body: "Prepare units, motion, light, electricity, and common instruments with example-based notes." },
      { title: "Page 3: Biology", body: "Focus on cells, nutrition, disease, plant systems, and human body basics." },
      { title: "Page 4: ICT", body: "Learn hardware, software, networking, internet, security, and digital services." },
      { title: "Page 5: Quick Review", body: "Use diagrams and keyword lists for faster science revision." }
    ]
  },
  {
    id: "geography-environment",
    title: "Geography & Environment",
    author: "Arif Chowdhury",
    subject: "Geography",
    level: "Preliminary",
    cover: "assets/covers/geography.svg",
    price: "৳470",
    shortDescription: "Physical geography, Bangladesh geography, climate, environment, and disasters.",
    description: "A visual geography and environment guide for mastering maps, climate concepts, natural resources, and disaster management basics.",
    topics: ["Physical geography", "Maps", "Climate", "Natural resources", "Environment", "Disaster management"],
    previewPages: [
      { title: "Page 1: Map Habit", body: "Use maps for rivers, districts, borders, resources, climate zones, and disaster-prone regions." },
      { title: "Page 2: Physical Geography", body: "Prepare landforms, atmosphere, weather, climate, and earth movement with simple diagrams." },
      { title: "Page 3: Bangladesh Geography", body: "Learn rivers, islands, hills, ports, forests, and administrative divisions together." },
      { title: "Page 4: Environment", body: "Connect pollution, biodiversity, climate change, and conservation with practical examples." },
      { title: "Page 5: Disaster Management", body: "Study cyclone, flood, drought, and earthquake preparation through causes and responses." }
    ]
  },
  {
    id: "ethics-governance",
    title: "Ethics, Values & Governance",
    author: "Sabbir Hossain",
    subject: "Ethics",
    level: "Written + Viva",
    cover: "assets/covers/ethics.svg",
    price: "৳430",
    shortDescription: "Ethics, values, accountability, public service, and good governance concepts.",
    description: "A thoughtful guide for ethics and governance topics with sample frameworks for written answers and viva preparation.",
    topics: ["Ethics", "Values", "Good governance", "Accountability", "Public service", "Decision making"],
    previewPages: [
      { title: "Page 1: Ethics Foundation", body: "Start with values, morality, integrity, accountability, and public interest." },
      { title: "Page 2: Governance", body: "Good governance depends on transparency, rule of law, participation, responsiveness, and efficiency." },
      { title: "Page 3: Public Service", body: "Frame answers around citizen service, fairness, responsibility, and lawful decision making." },
      { title: "Page 4: Case Answers", body: "For ethical cases, identify stakeholders, conflict, options, and justified decision." },
      { title: "Page 5: Viva Prep", body: "Prepare short, honest answers that connect personal values with public duty." }
    ]
  }
];

const EXTRA_BCS_BOOKS = BCS_BOOKS.flatMap((book) => [
  {
    ...book,
    id: `${book.id}-revision`,
    title: `${book.subject} Quick Revision`,
    level: "Revision",
    price: book.price,
    shortDescription: `Fast revision notes, high-frequency facts, and compact practice for ${book.subject}.`,
    description: `A quick revision companion for ${book.subject}, built for final-week preparation and repeated BCS question patterns.`
  },
  {
    ...book,
    id: `${book.id}-practice`,
    title: `${book.subject} Practice Questions`,
    level: "Practice",
    price: book.price,
    shortDescription: `Topic-wise practice questions and explanations for ${book.subject} preparation.`,
    description: `A focused practice book for ${book.subject} with topic-wise MCQs, answer explanations, and revision prompts.`
  }
]);

BCS_BOOKS.push(...EXTRA_BCS_BOOKS);

const BCS_COURSES = [
  {
    id: "preliminary-crash",
    title: "BCS Preliminary Crash Course",
    category: "BCS Preliminary",
    type: "Recorded",
    instructor: "Dr. Mahfuz Rahman",
    price: 1499,
    oldPrice: 3000,
    duration: "18h 30m",
    lessons: 64,
    cover: "assets/covers/bangladesh.svg",
    description: "Full preliminary syllabus coverage with short lessons, model tests, and revision plans."
  },
  {
    id: "written-masterclass",
    title: "BCS Written Answer Masterclass",
    category: "BCS Written",
    type: "Live Batch",
    instructor: "Professor Rafiq Hasan",
    price: 2499,
    oldPrice: 4500,
    duration: "22h 00m",
    lessons: 38,
    cover: "assets/covers/ethics.svg",
    description: "Answer structure, data use, introductions, conclusions, and weekly script review."
  },
  {
    id: "english-grammar",
    title: "English Grammar and Vocabulary",
    category: "English",
    type: "Recorded",
    instructor: "Nadia Islam",
    price: 999,
    oldPrice: 1800,
    duration: "9h 45m",
    lessons: 42,
    cover: "assets/covers/english.svg",
    description: "Sentence correction, voice, narration, vocabulary, idioms, and comprehension practice."
  },
  {
    id: "math-speed",
    title: "Math and Mental Ability Speed Course",
    category: "Mathematics",
    type: "Workshop",
    instructor: "Tanvir Ahmed",
    price: 1299,
    oldPrice: 2200,
    duration: "11h 20m",
    lessons: 34,
    cover: "assets/covers/math.svg",
    description: "Arithmetic shortcuts, geometry, series, logic, and timed problem solving."
  },
  {
    id: "bangladesh-affairs-live",
    title: "Bangladesh Affairs Live Revision",
    category: "Bangladesh",
    type: "Live Batch",
    instructor: "Shaila Karim",
    price: 1799,
    oldPrice: 2800,
    duration: "14h 10m",
    lessons: 28,
    cover: "assets/covers/bangla.svg",
    description: "Constitution, liberation war, economy, geography, and current Bangladesh topics."
  },
  {
    id: "science-ict",
    title: "General Science and ICT Course",
    category: "Science",
    type: "Recorded",
    instructor: "Mst. Farhana Akter",
    price: 1199,
    oldPrice: 2000,
    duration: "10h 15m",
    lessons: 31,
    cover: "assets/covers/science.svg",
    description: "Physics, chemistry, biology, computer fundamentals, internet, and digital services."
  }
];

// Static 20-question exam set used by the frontend-only practice exam.
const BCS_QUESTIONS = [
  { question: "Which document is regarded as the supreme law of Bangladesh?", options: ["The Constitution", "The Penal Code", "The Election Manual", "The Civil Service Rules"], answer: 0 },
  { question: "Who was the first President of Bangladesh?", options: ["Tajuddin Ahmad", "Sheikh Mujibur Rahman", "Ziaur Rahman", "Justice Abu Sayeed Chowdhury"], answer: 1 },
  { question: "What is the synonym of 'Abundant'?", options: ["Scarce", "Plentiful", "Empty", "Weak"], answer: 1 },
  { question: "If 20% of a number is 80, what is the number?", options: ["300", "350", "400", "450"], answer: 2 },
  { question: "CPU is commonly known as the what of a computer?", options: ["Brain", "Memory", "Screen", "Keyboard"], answer: 0 },
  { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 2 },
  { question: "The Liberation War of Bangladesh took place in which year?", options: ["1952", "1966", "1969", "1971"], answer: 3 },
  { question: "Which organization is known by the abbreviation WHO?", options: ["World Health Organization", "World Heritage Office", "World Human Order", "World Housing Organization"], answer: 0 },
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
  { question: "Choose the correct spelling.", options: ["Definately", "Definitely", "Definetly", "Definitly"], answer: 1 },
  { question: "The currency of Japan is called what?", options: ["Won", "Yuan", "Yen", "Ringgit"], answer: 2 },
  { question: "Which river is called the Padma after entering Bangladesh?", options: ["Ganges", "Brahmaputra", "Teesta", "Meghna"], answer: 0 },
  { question: "What is 15 squared?", options: ["125", "215", "225", "235"], answer: 2 },
  { question: "Which one is an input device?", options: ["Printer", "Monitor", "Speaker", "Keyboard"], answer: 3 },
  { question: "Photosynthesis mainly occurs in which part of a plant?", options: ["Root", "Leaf", "Stem", "Flower"], answer: 1 },
  { question: "What is the antonym of 'Brave'?", options: ["Courageous", "Bold", "Cowardly", "Fearless"], answer: 2 },
  { question: "SAARC was established in which year?", options: ["1985", "1990", "1975", "2001"], answer: 0 },
  { question: "Which article of the Bangladesh Constitution declares Bangla as the state language?", options: ["Article 2", "Article 3", "Article 7", "Article 11"], answer: 1 },
  { question: "A triangle with all sides equal is called what?", options: ["Scalene", "Isosceles", "Equilateral", "Right"], answer: 2 },
  { question: "Which value is central to public service ethics?", options: ["Favoritism", "Accountability", "Secrecy in all matters", "Personal gain"], answer: 1 }
];
