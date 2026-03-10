## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2024-05-15 - Visual Parity for Micro-Animations
**Learning:** Interactive elements often have hover states with micro-animations (like scaling cards or translating buttons) defined only with `:hover` pseudo-classes. This lacks visual parity for keyboard users who do not trigger `:hover` via tab navigation, which makes the UI feel unresponsive and less accessible.
**Action:** Always append `, :focus-visible` (or `, :focus-within` for container elements) to `:hover` selectors for interactive elements to ensure visual parity for keyboard users.
