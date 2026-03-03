## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2024-05-15 - Missing Escape Key Support in Custom Dropdowns
**Learning:** Custom interactive components (like the language selector dropdown) often omit standard keyboard support, such as handling the `Escape` key to close the dropdown and returning focus to the trigger element. This breaks keyboard navigation expectations.
**Action:** Always implement standard keyboard interactions (`Escape` key to close) and ensure focus is explicitly returned to the trigger button when a custom dropdown or modal is closed via keyboard.
