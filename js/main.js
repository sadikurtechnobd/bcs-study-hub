const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const bookGrid = document.querySelector("#bookGrid");
const bookSearch = document.querySelector("#bookSearch");
const subjectFilter = document.querySelector("#subjectFilter");

function getBookUrl(bookId) {
  return `pages/book.html?id=${encodeURIComponent(bookId)}`;
}

function renderSubjectOptions() {
  if (!subjectFilter) return;

  const subjects = [...new Set(BCS_BOOKS.map((book) => book.subject))];
  subjects.forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectFilter.appendChild(option);
  });
}

function renderBooks() {
  if (!bookGrid) return;

  const searchTerm = (bookSearch?.value || "").trim().toLowerCase();
  const selectedSubject = subjectFilter?.value || "all";
  const filteredBooks = BCS_BOOKS.filter((book) => {
    const matchesSearch = [book.title, book.author, book.subject, book.shortDescription].join(" ").toLowerCase().includes(searchTerm);
    const matchesSubject = selectedSubject === "all" || book.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  bookGrid.innerHTML = "";

  if (!filteredBooks.length) {
    bookGrid.innerHTML = '<div class="empty-state">No books found. Try a different search or subject.</div>';
    return;
  }

  filteredBooks.forEach((book) => {
    const article = document.createElement("article");
    article.className = "book-card";
    article.innerHTML = `
      <a class="book-cover-wrap" href="${getBookUrl(book.id)}" aria-label="View ${book.title}">
        <span class="book-badge">${book.level}</span>
        <img src="${book.cover}" alt="${book.title} cover">
      </a>
      <div class="book-card-body">
        <h3>${book.title}</h3>
        <p>${book.shortDescription}</p>
        <div class="book-meta">
          <span>${book.subject}</span>
          <span>BCS</span>
        </div>
        <a class="btn btn-primary card-link" href="${getBookUrl(book.id)}">View Details</a>
      </div>
    `;
    bookGrid.appendChild(article);
  });
}

renderSubjectOptions();
renderBooks();

bookSearch?.addEventListener("input", renderBooks);
subjectFilter?.addEventListener("change", renderBooks);
