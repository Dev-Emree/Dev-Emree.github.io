## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-03-08 - Visual Parity for Keyboard Focus
**Learning:** Interactive micro-animations in CSS (like card scaling, nav underline reveals, or button transformations on `:hover`) were previously restricted to pointer users. Screen reader and keyboard users miss this visual feedback during navigation.
**Action:** When adding or maintaining interactive micro-animations tied to `:hover`, always explicitly pair them with `:focus-visible` or `:focus-within` to provide visual parity for keyboard users.
