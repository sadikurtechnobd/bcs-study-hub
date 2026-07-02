// Keep exam settings in one place so they are easy to replace later.
const EXAM_DURATION_SECONDS = 20 * 60;

let currentQuestion = 0;
let remainingSeconds = EXAM_DURATION_SECONDS;
let timerId;
const answers = Array(BCS_QUESTIONS.length).fill(null);
const startedAt = Date.now();

const timerText = document.querySelector("#timerText");
const questionCounter = document.querySelector("#questionCounter");
const questionText = document.querySelector("#questionText");
const optionList = document.querySelector("#optionList");
const questionMap = document.querySelector("#questionMap");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const submitBtn = document.querySelector("#submitBtn");

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function renderQuestionMap() {
  questionMap.innerHTML = "";

  BCS_QUESTIONS.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = index + 1;
    button.classList.toggle("current", index === currentQuestion);
    button.classList.toggle("answered", answers[index] !== null);
    button.addEventListener("click", () => {
      currentQuestion = index;
      renderQuestion();
    });
    questionMap.appendChild(button);
  });
}

function renderQuestion() {
  const item = BCS_QUESTIONS[currentQuestion];
  questionCounter.textContent = `Question ${currentQuestion + 1} of ${BCS_QUESTIONS.length}`;
  questionText.textContent = item.question;
  optionList.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.classList.toggle("selected", answers[currentQuestion] === index);
    button.textContent = option;
    button.addEventListener("click", () => {
      answers[currentQuestion] = index;
      renderQuestion();
    });
    optionList.appendChild(button);
  });

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent = currentQuestion === BCS_QUESTIONS.length - 1 ? "Review" : "Next";
  renderQuestionMap();
}

function getExamResult() {
  const correct = BCS_QUESTIONS.reduce((total, question, index) => {
    return total + (answers[index] === question.answer ? 1 : 0);
  }, 0);
  const total = BCS_QUESTIONS.length;
  const wrong = total - correct;
  const percentage = Math.round((correct / total) * 100);
  const timeTakenSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

  return {
    total,
    correct,
    wrong,
    score: correct,
    percentage,
    timeTakenSeconds,
    pass: percentage >= 60
  };
}

function submitExam() {
  clearInterval(timerId);
  // Local browser storage is used only to move the static result to result.html.
  localStorage.setItem("bcsExamResult", JSON.stringify(getExamResult()));
  window.location.href = "result.html";
}

function tickTimer() {
  remainingSeconds -= 1;
  timerText.textContent = formatTime(remainingSeconds);

  if (remainingSeconds <= 0) {
    submitExam();
  }
}

prevBtn.addEventListener("click", () => {
  currentQuestion = Math.max(0, currentQuestion - 1);
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  currentQuestion = Math.min(BCS_QUESTIONS.length - 1, currentQuestion + 1);
  renderQuestion();
});

submitBtn.addEventListener("click", submitExam);

timerText.textContent = formatTime(remainingSeconds);
timerId = setInterval(tickTimer, 1000);
renderQuestion();
