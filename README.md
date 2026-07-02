# BCS Study Hub

Static frontend prototype for a BCS exam preparation web application.

## Structure

- `index.html` - homepage with book cards and subject navigation
- `pages/book.html` - reusable book details page driven by a static book ID
- `pages/exam.html` - 20-question practice exam with a countdown timer
- `pages/result.html` - local result summary after exam submission
- `css/styles.css` - shared responsive styling
- `js/data.js` - static sample book and question data
- `js/main.js` - navigation, search, filtering, and homepage rendering
- `js/book.js`, `js/exam.js`, `js/result.js` - page-specific behavior
- `assets/covers/` - local SVG book cover images

No backend, database, APIs, or external assets are used.
