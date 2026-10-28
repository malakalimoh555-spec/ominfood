# Omnifood – Tailwind version

Files
- `index.html`          → all styling is now Tailwind classes
- `tailwind.config.js`  → colors (primary, cream, brown, grey-*), Rubik font, em breakpoints
- `src/input.css`       → Tailwind entry + the global focus ring (only plain CSS left)
- `css/output.css`      → generated file, linked from index.html
- `js/script.js`        → only change: body class `sticky` → `is-sticky` (`sticky` is a Tailwind class name)

Build (Tailwind v3.4)
    npm i -D tailwindcss@3.4
    npx tailwindcss -c tailwind.config.js -i src/input.css -o css/output.css --watch

Deleted: css/general.css, css/style.css, css/queries.css
