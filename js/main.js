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
const featuredBook = document.querySelector("#featuredBook");
const carouselPrev = document.querySelector("#carouselPrev");
const carouselNext = document.querySelector("#carouselNext");
const carouselDots = document.querySelector("#carouselDots");

let visibleBooks = [];

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

function getFilteredBooks() {
  const searchTerm = (bookSearch?.value || "").trim().toLowerCase();
  const selectedSubject = subjectFilter?.value || "all";

  return BCS_BOOKS.filter((book) => {
    const searchableText = [book.title, book.author, book.subject, book.shortDescription].join(" ").toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm);
    const matchesSubject = selectedSubject === "all" || book.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });
}

function renderFeaturedBook(book) {
  if (!featuredBook) return;

  if (!book) {
    featuredBook.innerHTML = '<div class="empty-state">No featured book available.</div>';
    return;
  }

  featuredBook.innerHTML = `
    <a class="featured-cover" href="${getBookUrl(book.id)}" aria-label="View ${book.title}">
      <img src="${book.cover}" alt="${book.title} cover">
    </a>
    <div class="featured-content">
      <div class="detail-tags">
        <span class="tag">${book.subject}</span>
        <span class="tag">${book.level}</span>
      </div>
      <h3>${book.title}</h3>
      <p>${book.description}</p>
      <p class="eyebrow">Author: ${book.author}</p>
    </div>
    <div class="featured-actions">
      <a class="btn btn-primary" href="${getBookUrl(book.id)}">View Details</a>
      <a class="btn btn-ghost" href="pages/exam.html">Start Exam</a>
    </div>
  `;
}

function renderCarouselDots() {
  if (!carouselDots || !bookGrid) return;

  carouselDots.innerHTML = "";
  if (visibleBooks.length <= 1) return;

  visibleBooks.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Go to book ${index + 1}`);
    button.addEventListener("click", () => {
      const card = bookGrid.children[index];
      card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    });
    carouselDots.appendChild(button);
  });

  updateCarouselState();
}

function updateCarouselState() {
  if (!bookGrid) return;

  const maxScroll = bookGrid.scrollWidth - bookGrid.clientWidth - 2;
  const currentIndex = [...bookGrid.children].findIndex((card) => {
    return card.offsetLeft + card.offsetWidth / 2 >= bookGrid.scrollLeft + bookGrid.clientWidth / 2;
  });

  carouselPrev?.toggleAttribute("disabled", bookGrid.scrollLeft <= 2);
  carouselNext?.toggleAttribute("disabled", bookGrid.scrollLeft >= maxScroll);

  if (carouselDots) {
    [...carouselDots.children].forEach((dot, index) => {
      dot.classList.toggle("active", index === Math.max(0, currentIndex));
    });
  }
}

function moveCarousel(direction) {
  if (!bookGrid) return;

  const firstCard = bookGrid.querySelector(".book-card");
  const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 320;
  bookGrid.scrollBy({ left: direction * cardWidth * 2, behavior: "smooth" });
}

function renderBooks() {
  if (!bookGrid) return;

  visibleBooks = getFilteredBooks();
  bookGrid.innerHTML = "";

  if (!visibleBooks.length) {
    bookGrid.innerHTML = '<div class="empty-state">No books found. Try a different search or subject.</div>';
    renderFeaturedBook(null);
    renderCarouselDots();
    updateCarouselState();
    return;
  }

  renderFeaturedBook(visibleBooks[0]);

  visibleBooks.forEach((book) => {
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
    article.addEventListener("mouseenter", () => renderFeaturedBook(book));
    article.addEventListener("focusin", () => renderFeaturedBook(book));
    bookGrid.appendChild(article);
  });

  bookGrid.scrollTo({ left: 0 });
  renderCarouselDots();
  updateCarouselState();
}

renderSubjectOptions();
renderBooks();

bookSearch?.addEventListener("input", renderBooks);
subjectFilter?.addEventListener("change", renderBooks);
carouselPrev?.addEventListener("click", () => moveCarousel(-1));
carouselNext?.addEventListener("click", () => moveCarousel(1));
bookGrid?.addEventListener("scroll", updateCarouselState);
