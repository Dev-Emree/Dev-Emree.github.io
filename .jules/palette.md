## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2026-03-02 - Custom Component Keyboard Navigation
**Learning:** Custom interactive components like the language dropdown often trap focus or remain open when they shouldn't if they lack explicit keyboard event handlers. The native `<select>` element inherently closes on `Escape`, but custom DOM replacements need this explicitly added to meet accessibility standards.
**Action:** Always implement `keydown` listeners for standard interactions (like `Escape` to close) on custom interactive components, ensuring focus is returned to the triggering element to maintain a logical tab order.
