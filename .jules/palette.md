## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-02-17 - External Links Context
**Learning:** Screen reader users can be disoriented when interacting with external links that open in a new tab without explicit warning, and missing `rel="noopener noreferrer"` introduces security risks (reverse tabnabbing) on target="_blank" links.
**Action:** Always append `rel="noopener noreferrer"` and `aria-label="[Link Name] (opens in a new tab)"` to external links to provide context and ensure safety.
