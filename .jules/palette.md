## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2024-05-15 - Focus Parity for CSS Micro-Animations
**Learning:** Interactive micro-animations (like scaling cards or translating buttons) defined only for `:hover` states create a disparate experience for keyboard users.
**Action:** When adding or reviewing `:hover` animations in CSS, always explicitly pair them with `:focus-visible` (for individual interactive elements) or `:focus-within` (for containers) to ensure visual parity and feedback for keyboard navigation.
