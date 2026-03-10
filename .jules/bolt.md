
## 2026-02-28 - [Eliminate Layout Thrashing in Three.js Render Loop]
**Learning:** Found a major performance bottleneck where querying `document.body.getBoundingClientRect().top` and `document.body.scrollHeight` inside `requestAnimationFrame` forces the browser to synchronously recalculate layouts 60 times a second (layout thrashing).
**Action:** When working with scroll-linked animations in WebGL/Three.js render loops, ALWAYS cache layout properties like `scrollY`, `innerWidth`, `innerHeight` and `scrollHeight`, and update them via asynchronous `scroll` and `resize` event listeners instead of querying the DOM directly in the hot path.

## 2026-03-10 - [Consolidate High-Frequency Scroll Listeners and Cache DOM Elements]
**Learning:** Found multiple separate `scroll` event listeners attached to the window, some querying the DOM (e.g., `document.getElementById`) on every scroll event. This causes unnecessary layout thrashing and function execution overhead.
**Action:** Consolidate multiple `scroll` listeners into a single unified listener and ALWAYS cache DOM elements outside the listener scope to prevent redundant queries on scroll events.
