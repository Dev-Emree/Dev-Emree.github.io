## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2026-03-26 - Focus State Parity for Micro-Animations
**Learning:** Interactive micro-animations in CSS (like card scaling or button transformations on `:hover`) often exclude keyboard users when missing equivalent `:focus-visible` or `:focus-within` selectors, breaking visual parity for non-mouse navigation.
**Action:** Always explicitly pair `:hover` pseudo-classes with `:focus-visible` (for direct focus) or `:focus-within` (for focusable children within wrappers) to ensure accessibility and consistent visual feedback.
