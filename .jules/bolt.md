
## 2026-02-28 - [Eliminate Layout Thrashing in Three.js Render Loop]
**Learning:** Found a major performance bottleneck where querying `document.body.getBoundingClientRect().top` and `document.body.scrollHeight` inside `requestAnimationFrame` forces the browser to synchronously recalculate layouts 60 times a second (layout thrashing).
**Action:** When working with scroll-linked animations in WebGL/Three.js render loops, ALWAYS cache layout properties like `scrollY`, `innerWidth`, `innerHeight` and `scrollHeight`, and update them via asynchronous `scroll` and `resize` event listeners instead of querying the DOM directly in the hot path.

## 2025-03-05 - [Cache DOM Queries Outside High-Frequency Event Listeners]
**Learning:** Querying the DOM (e.g., `document.getElementById`) inside a high-frequency event listener like `scroll` or `resize` causes unnecessary performance overhead by executing the search on every event fire.
**Action:** Always cache DOM element references outside of the event listener callback so they are only queried once when the script loads, especially for global UI components like headers.
