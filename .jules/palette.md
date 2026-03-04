## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2024-06-03 - Keyboard Navigation Visual Parity
**Learning:** While focus states were visually indicated with an outline, interactive micro-animations (like scaling cards or transforming buttons) were strictly tied to `:hover` states, leaving keyboard users with a static and less engaging experience. This app relies heavily on these micro-interactions for its modern feel.
**Action:** Always ensure `:focus-visible` (and `:focus-within` for container elements like cards) are paired alongside `:hover` selectors in the CSS to guarantee keyboard users receive the same delightful visual feedback as mouse users.