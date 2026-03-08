
## 2026-02-28 - [Eliminate Layout Thrashing in Three.js Render Loop]
**Learning:** Found a major performance bottleneck where querying `document.body.getBoundingClientRect().top` and `document.body.scrollHeight` inside `requestAnimationFrame` forces the browser to synchronously recalculate layouts 60 times a second (layout thrashing).
**Action:** When working with scroll-linked animations in WebGL/Three.js render loops, ALWAYS cache layout properties like `scrollY`, `innerWidth`, `innerHeight` and `scrollHeight`, and update them via asynchronous `scroll` and `resize` event listeners instead of querying the DOM directly in the hot path.

## 2024-03-08 - [Cache DOM Queries Outside High-Frequency Event Listeners]
**Learning:** Querying the DOM inside high-frequency event listeners like `scroll` (e.g., `document.getElementById('header')`) causes unnecessary performance overhead, as it re-executes the query on every scroll tick.
**Action:** Always extract and cache DOM element references outside of `scroll`, `resize`, or `mousemove` event listeners to prevent redundant layout lookups and ensure smooth animations/interactions.
