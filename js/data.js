// Static sample data. Later this can be replaced with API responses.
const BCS_BOOKS = [
  {
    id: "bangla-foundation",
    title: "BCS Bangla Foundation",
    author: "Dr. Mahfuz Rahman",
    subject: "Bangla",
    level: "Preliminary",
    cover: "assets/covers/bangla.svg",
    shortDescription: "Grammar, literature, authors, and high-frequency Bangla questions for BCS preparation.",
    description: "A structured Bangla guide for BCS candidates covering grammar rules, literary periods, important authors, and question-solving patterns with concise explanations.",
    topics: ["Bangla grammar", "Ancient and medieval literature", "Modern prose and poetry", "Important authors", "Previous question patterns", "Revision checklist"]
  },
  {
    id: "english-mastery",
    title: "English Grammar Mastery",
    author: "Nadia Islam",
    subject: "English",
    level: "Preliminary",
    cover: "assets/covers/english.svg",
    shortDescription: "Grammar, vocabulary, correction, idioms, and comprehension practice in one place.",
    description: "A practical English preparation book focused on common BCS grammar traps, sentence correction, vocabulary building, and fast comprehension techniques.",
    topics: ["Parts of speech", "Tense and voice", "Narration", "Synonyms and antonyms", "Idioms and phrases", "Reading comprehension"]
  },
  {
    id: "bangladesh-affairs",
    title: "Bangladesh Affairs Complete",
    author: "Professor Rafiq Hasan",
    subject: "Bangladesh",
    level: "Preliminary + Written",
    cover: "assets/covers/bangladesh.svg",
    shortDescription: "Constitution, liberation war, geography, economy, and governance topics.",
    description: "A complete Bangladesh Affairs reference for BCS candidates, designed to connect core facts with exam-focused explanations and revision prompts.",
    topics: ["Constitution", "Liberation War", "Geography of Bangladesh", "Economy", "Government system", "Development plans"]
  },
  {
    id: "international-affairs",
    title: "International Affairs Review",
    author: "Shaila Karim",
    subject: "International",
    level: "Preliminary",
    cover: "assets/covers/international.svg",
    shortDescription: "Global organizations, diplomacy, world history, and current affairs essentials.",
    description: "A concise guide to international affairs that helps students connect organizations, treaties, regions, and global events with BCS-style questions.",
    topics: ["United Nations", "Global organizations", "World history", "Diplomacy", "Regional politics", "Current affairs"]
  },
  {
    id: "math-ability",
    title: "Math & Mental Ability",
    author: "Tanvir Ahmed",
    subject: "Mathematics",
    level: "Preliminary",
    cover: "assets/covers/math.svg",
    shortDescription: "Arithmetic, algebra, geometry, logic, series, and fast-solving techniques.",
    description: "A speed-focused math and mental ability guide for candidates who want to improve accuracy under time pressure.",
    topics: ["Arithmetic", "Algebra", "Geometry", "Data interpretation", "Number series", "Analytical reasoning"]
  },
  {
    id: "science-ict",
    title: "General Science & ICT",
    author: "Mst. Farhana Akter",
    subject: "Science",
    level: "Preliminary",
    cover: "assets/covers/science.svg",
    shortDescription: "Basic science, technology, computer fundamentals, internet, and digital Bangladesh.",
    description: "An accessible science and ICT guide that turns broad syllabus points into short lessons, diagrams, and practice-ready facts.",
    topics: ["Physics basics", "Chemistry basics", "Biology basics", "Computer fundamentals", "Internet", "Emerging technology"]
  },
  {
    id: "geography-environment",
    title: "Geography & Environment",
    author: "Arif Chowdhury",
    subject: "Geography",
    level: "Preliminary",
    cover: "assets/covers/geography.svg",
    shortDescription: "Physical geography, Bangladesh geography, climate, environment, and disasters.",
    description: "A visual geography and environment guide for mastering maps, climate concepts, natural resources, and disaster management basics.",
    topics: ["Physical geography", "Maps", "Climate", "Natural resources", "Environment", "Disaster management"]
  },
  {
    id: "ethics-governance",
    title: "Ethics, Values & Governance",
    author: "Sabbir Hossain",
    subject: "Ethics",
    level: "Written + Viva",
    cover: "assets/covers/ethics.svg",
    shortDescription: "Ethics, values, accountability, public service, and good governance concepts.",
    description: "A thoughtful guide for ethics and governance topics with sample frameworks for written answers and viva preparation.",
    topics: ["Ethics", "Values", "Good governance", "Accountability", "Public service", "Decision making"]
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
