## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-02-12 - Missing Focus State Parity for Micro-animations
**Learning:** This app frequently relies on interactive CSS micro-animations (like scaling cards or transforming buttons) tied solely to the `:hover` state. These delightful visual cues are entirely invisible to keyboard and screen reader users, breaking accessibility parity.
**Action:** Always ensure any interactive CSS pseudo-class (`:hover`) is explicitly paired with a corresponding focus pseudo-class (`:focus-visible` for simple elements or `:focus-within` for wrapper elements containing focusable children) so keyboard users experience the same visual feedback.
