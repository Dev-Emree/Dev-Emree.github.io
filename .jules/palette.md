## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2024-05-24 - External Link Accessibility and Security
**Learning:** External links that open in new tabs (`target="_blank"`) often lack necessary security attributes (`rel="noopener noreferrer"`) and accessibility labels (`aria-label`). Without these, screen reader users might be confused when navigating away from the current page, and the application is exposed to security vulnerabilities like reverse tabnabbing.
**Action:** Always include `rel="noopener noreferrer"` for external links, and explicitly add `aria-label` (e.g., "Link Name (opens in a new tab)") to provide clear context for screen reader users.
