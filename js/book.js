const params = new URLSearchParams(window.location.search);
const bookId = params.get("id") || BCS_BOOKS[0].id;
const book = BCS_BOOKS.find((item) => item.id === bookId) || BCS_BOOKS[0];

document.title = `${book.title} | BCS Study Hub`;

document.querySelector("#bookTitle").textContent = book.title;
document.querySelector("#bookAuthor").textContent = book.author;
document.querySelector("#bookDescription").textContent = book.description;
document.querySelector("#bookCover").src = `../${book.cover}`;
document.querySelector("#bookCover").alt = `${book.title} cover`;
document.querySelector("#bookSubject").textContent = book.subject;
document.querySelector("#bookLevel").textContent = book.level;
document.querySelector("#bookPrice").textContent = book.price;
document.querySelector("#purchaseTitle").textContent = book.title;
document.querySelector("#purchaseBtn").textContent = `Purchase Full Book - ${book.price}`;

const topicList = document.querySelector("#topicList");
topicList.innerHTML = book.topics.map((topic) => `<li>${topic}</li>`).join("");

const pagePreview = document.querySelector("#pagePreview");
pagePreview.innerHTML = book.previewPages.map((page, index) => `
  <article class="preview-page">
    <span>${String(index + 1).padStart(2, "0")}</span>
    <h3>${page.title}</h3>
    <p>${page.body}</p>
  </article>
`).join("");

document.querySelector("#startExam").addEventListener("click", () => {
  window.location.href = "exam.html";
});

document.querySelector("#purchaseBtn").addEventListener("click", (event) => {
  event.preventDefault();
  alert(`Purchase flow demo: ${book.title} (${book.price}) is ready to connect with payment later.`);
});
