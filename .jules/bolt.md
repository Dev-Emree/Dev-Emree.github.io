
## 2026-02-28 - [Eliminate Layout Thrashing in Three.js Render Loop]
**Learning:** Found a major performance bottleneck where querying `document.body.getBoundingClientRect().top` and `document.body.scrollHeight` inside `requestAnimationFrame` forces the browser to synchronously recalculate layouts 60 times a second (layout thrashing).
**Action:** When working with scroll-linked animations in WebGL/Three.js render loops, ALWAYS cache layout properties like `scrollY`, `innerWidth`, `innerHeight` and `scrollHeight`, and update them via asynchronous `scroll` and `resize` event listeners instead of querying the DOM directly in the hot path.

## 2026-03-12 - [Cache DOM Queries Outside High-Frequency Event Listeners]
**Learning:** Found a performance bottleneck where querying `document.getElementById('header')` inside the `window.addEventListener('scroll')` event listener forces the browser to search the DOM on every scroll event.
**Action:** When working with scroll or resize event listeners, ALWAYS cache DOM element references outside the event listener callback to prevent unnecessary DOM queries in the hot path.
