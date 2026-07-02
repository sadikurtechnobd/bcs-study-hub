const params = new URLSearchParams(window.location.search);
const bookId = params.get("id") || BCS_BOOKS[0].id;
const book = BCS_BOOKS.find((item) => item.id === bookId) || BCS_BOOKS[0];

document.title = `${book.title} | BCS Study Hub`;

document.querySelector("#bookTitle").textContent = book.title;
document.querySelector("#bookAuthor").textContent = `Author: ${book.author}`;
document.querySelector("#bookDescription").textContent = book.description;
document.querySelector("#bookCover").src = `../${book.cover}`;
document.querySelector("#bookCover").alt = `${book.title} cover`;
document.querySelector("#bookSubject").textContent = book.subject;
document.querySelector("#bookLevel").textContent = book.level;

const topicList = document.querySelector("#topicList");
topicList.innerHTML = book.topics.map((topic) => `<li>${topic}</li>`).join("");

document.querySelector("#startExam").addEventListener("click", () => {
  window.location.href = "exam.html";
});
