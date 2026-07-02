const fallbackResult = {
  total: 20,
  correct: 0,
  wrong: 20,
  score: 0,
  percentage: 0,
  timeTakenSeconds: 0,
  pass: false
};

const result = JSON.parse(localStorage.getItem("bcsExamResult")) || fallbackResult;

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}m ${rest}s`;
}

document.querySelector("#totalQuestions").textContent = result.total;
document.querySelector("#correctAnswers").textContent = result.correct;
document.querySelector("#wrongAnswers").textContent = result.wrong;
document.querySelector("#score").textContent = `${result.score}/${result.total}`;
document.querySelector("#percentage").textContent = `${result.percentage}%`;
document.querySelector("#timeTaken").textContent = formatDuration(result.timeTakenSeconds);

const status = document.querySelector("#passStatus");
status.textContent = result.pass ? "Pass: strong work. Keep revising your weak areas." : "Fail: review the books and retake the exam.";
status.style.color = result.pass ? "#baf4d8" : "#ffd3d3";
