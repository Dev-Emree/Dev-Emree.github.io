## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-02-12 - Keyboard Accessibility Parity for Micro-animations
**Learning:** In CSS-heavy projects, micro-animations (like scaling cards or color-shifting buttons) are often exclusively bound to the `:hover` pseudo-class. This visually excludes keyboard-only users who navigate via <kbd>Tab</kbd>, leading to a subpar, "second-class" experience where they miss out on important visual feedback and interaction cues.
**Action:** When adding or modifying interactive `:hover` states in CSS, explicitly pair them with `:focus-visible` (for standard interactive elements like buttons/links) or `:focus-within` (for wrapper elements like project cards containing focusable children) to ensure 100% visual parity between mouse and keyboard navigation.
