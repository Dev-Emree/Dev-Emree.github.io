
## 2026-02-28 - [Eliminate Layout Thrashing in Three.js Render Loop]
**Learning:** Found a major performance bottleneck where querying `document.body.getBoundingClientRect().top` and `document.body.scrollHeight` inside `requestAnimationFrame` forces the browser to synchronously recalculate layouts 60 times a second (layout thrashing).
**Action:** When working with scroll-linked animations in WebGL/Three.js render loops, ALWAYS cache layout properties like `scrollY`, `innerWidth`, `innerHeight` and `scrollHeight`, and update them via asynchronous `scroll` and `resize` event listeners instead of querying the DOM directly in the hot path.

## 2025-02-17 - DOM Query Caching outside high-frequency events
**Learning:** Found a direct DOM query (`document.getElementById('header')`) inside a `scroll` event listener in `index.html`. This is a classic performance anti-pattern (layout thrashing risk) because it evaluates the query on every single scroll event tick instead of caching the reference.
**Action:** Always cache static DOM references outside of high-frequency event listeners (`scroll`, `resize`, `mousemove`) to prevent unnecessary DOM traversals.
