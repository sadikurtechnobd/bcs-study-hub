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
const bookTabs = document.querySelector("#bookTabs");
const themeToggle = document.querySelector("#themeToggle");
const cartCount = document.querySelector("#cartCount");
const courseGrid = document.querySelector("#courseGrid");
const courseSort = document.querySelector("#courseSort");
const courseCategoryFilters = document.querySelector("#courseCategoryFilters");
const courseTypeFilters = document.querySelector("#courseTypeFilters");
const courseCount = document.querySelector("#courseCount");
const clearCourseFilters = document.querySelector("#clearCourseFilters");
const sellBookForm = document.querySelector("#sellBookForm");
const sellBookMessage = document.querySelector("#sellBookMessage");

let visibleBooks = [];
let cartItems = [];
let activeCourseCategory = "All";
let activeCourseType = "All";

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  if (themeToggle) {
    const icon = themeToggle.querySelector(".theme-icon");
    const label = themeToggle.querySelector(".theme-label");
    const nextMode = theme === "light" ? "dark" : "light";
    if (icon) icon.textContent = theme === "light" ? "☾" : "☀";
    if (label) label.textContent = theme === "light" ? "Dark" : "Light";
    themeToggle.setAttribute("aria-label", `Switch to ${theme === "light" ? "dark" : "light"} mode`);
    themeToggle.title = `Switch to ${nextMode} mode`;
  }
}

function setupThemeToggle() {
  const savedTheme = localStorage.getItem("bcsTheme") || "light";
  applyTheme(savedTheme);

  themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("bcsTheme", nextTheme);
    applyTheme(nextTheme);
  });
}

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

function renderBookTabs() {
  if (!bookTabs) return;

  const subjects = [...new Set(BCS_BOOKS.map((book) => book.subject))];
  bookTabs.innerHTML = "";

  ["all", ...subjects].forEach((subject) => {
    const button = document.createElement("button");
    const label = subject === "all" ? "All" : subject;
    button.type = "button";
    button.textContent = label;
    button.className = "book-tab";
    button.classList.toggle("active", (subjectFilter?.value || "all") === subject);
    button.addEventListener("click", () => {
      if (subjectFilter) {
        subjectFilter.value = subject;
      }
      renderBooks();
    });
    bookTabs.appendChild(button);
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
      <div class="writer-row">
        <span>Writer</span>
        <strong>${book.author}</strong>
      </div>
    </div>
    <div class="featured-actions">
      <div class="price-box compact">
        <span>Full book</span>
        <strong>${book.price}</strong>
      </div>
      <a class="btn btn-primary" href="${getBookUrl(book.id)}">Open Book</a>
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
  renderBookTabs();

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
    article.tabIndex = 0;
    article.setAttribute("role", "link");
    article.setAttribute("aria-label", `Open ${book.title}`);
    article.innerHTML = `
      <a class="book-cover-wrap" href="${getBookUrl(book.id)}" aria-label="View ${book.title}">
        <span class="book-badge">${book.level}</span>
        <img src="${book.cover}" alt="${book.title} cover">
      </a>
      <div class="book-card-body">
        <h3>${book.title}</h3>
        <p>${book.shortDescription}</p>
        <div class="writer-row small">
          <span>Writer</span>
          <strong>${book.author}</strong>
        </div>
        <div class="book-meta">
          <span>${book.subject}</span>
          <span>${book.price}</span>
        </div>
        <a class="btn btn-primary card-link" href="${getBookUrl(book.id)}">Open Book</a>
      </div>
    `;
    article.addEventListener("mouseenter", () => renderFeaturedBook(book));
    article.addEventListener("focusin", () => renderFeaturedBook(book));
    article.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      window.location.href = getBookUrl(book.id);
    });
    article.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        window.location.href = getBookUrl(book.id);
      }
    });
    bookGrid.appendChild(article);
  });

  bookGrid.scrollTo({ left: 0 });
  renderCarouselDots();
  updateCarouselState();
}

function formatTk(amount) {
  return `Tk ${amount.toLocaleString("en-US")}`;
}

function renderFilterButtons(container, items, activeValue, onSelect) {
  if (!container) return;

  container.innerHTML = "";
  ["All", ...items].forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-option";
    button.classList.toggle("active", item === activeValue);
    button.innerHTML = `<span></span>${item}`;
    button.addEventListener("click", () => onSelect(item));
    container.appendChild(button);
  });
}

function renderCourseFilters() {
  if (!courseGrid || typeof BCS_COURSES === "undefined") return;

  const categories = [...new Set(BCS_COURSES.map((course) => course.category))];
  const types = [...new Set(BCS_COURSES.map((course) => course.type))];

  renderFilterButtons(courseCategoryFilters, categories, activeCourseCategory, (category) => {
    activeCourseCategory = category;
    renderCourses();
  });

  renderFilterButtons(courseTypeFilters, types, activeCourseType, (type) => {
    activeCourseType = type;
    renderCourses();
  });
}

function getVisibleCourses() {
  if (typeof BCS_COURSES === "undefined") return [];

  const sortValue = courseSort?.value || "default";
  const filteredCourses = BCS_COURSES.filter((course) => {
    const matchesCategory = activeCourseCategory === "All" || course.category === activeCourseCategory;
    const matchesType = activeCourseType === "All" || course.type === activeCourseType;
    return matchesCategory && matchesType;
  });

  return [...filteredCourses].sort((a, b) => {
    if (sortValue === "low") return a.price - b.price;
    if (sortValue === "high") return b.price - a.price;
    if (sortValue === "lessons") return b.lessons - a.lessons;
    return 0;
  });
}

function updateCartCount() {
  if (cartCount) {
    cartCount.textContent = cartItems.length;
  }
}

function addCourseToCart(courseId) {
  if (!cartItems.includes(courseId)) {
    cartItems.push(courseId);
  }
  updateCartCount();
  renderCourses();
}

function renderCourses() {
  if (!courseGrid) return;

  const visibleCourses = getVisibleCourses();
  courseGrid.innerHTML = "";
  courseCount.textContent = `${visibleCourses.length} Courses Found`;
  renderCourseFilters();

  if (!visibleCourses.length) {
    courseGrid.innerHTML = '<div class="empty-state">No courses found. Try another category or type.</div>';
    return;
  }

  visibleCourses.forEach((course) => {
    const isInCart = cartItems.includes(course.id);
    const article = document.createElement("article");
    article.className = "course-card";
    article.innerHTML = `
      <a class="course-thumb" href="#courses" aria-label="View ${course.title}">
        <img src="${course.cover}" alt="${course.title} cover">
        <span>${course.type}</span>
      </a>
      <div class="course-body">
        <div class="course-tags">
          <span>${course.category}</span>
          <span>${course.lessons} lessons</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-meta">
          <strong>${formatTk(course.price)}</strong>
          <del>${formatTk(course.oldPrice)}</del>
          <span>${course.duration}</span>
        </div>
        <div class="course-actions">
          <button class="btn btn-light add-course" type="button">${isInCart ? "Added" : "Add to Cart"}</button>
          <button class="btn btn-primary view-course" type="button">View Details</button>
        </div>
      </div>
    `;

    article.querySelector(".add-course").addEventListener("click", () => addCourseToCart(course.id));
    article.querySelector(".view-course").addEventListener("click", () => {
      alert(`${course.title}\nInstructor: ${course.instructor}\nDuration: ${course.duration}\nPrice: ${formatTk(course.price)}`);
    });
    courseGrid.appendChild(article);
  });
}

function setupSellBookForm() {
  if (!sellBookForm) return;

  sellBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#sellBookTitle").value.trim();
    const subject = document.querySelector("#sellBookSubject").value.trim();
    const price = document.querySelector("#sellBookPrice").value.trim();
    const condition = document.querySelector("#sellBookCondition").value;

    sellBookMessage.textContent = `${title} listed for Tk ${price} in ${subject} (${condition}).`;
    sellBookForm.reset();
  });
}

renderSubjectOptions();
setupThemeToggle();
renderBooks();
renderCourses();
setupSellBookForm();

bookSearch?.addEventListener("input", renderBooks);
subjectFilter?.addEventListener("change", () => {
  renderBooks();
});
carouselPrev?.addEventListener("click", () => moveCarousel(-1));
carouselNext?.addEventListener("click", () => moveCarousel(1));
bookGrid?.addEventListener("scroll", updateCarouselState);
courseSort?.addEventListener("change", renderCourses);
clearCourseFilters?.addEventListener("click", () => {
  activeCourseCategory = "All";
  activeCourseType = "All";
  renderCourses();
});
