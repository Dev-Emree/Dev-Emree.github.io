## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-03-11 - External Links Require Comprehensive A11y Treatment
**Learning:** Adding `target="_blank"` alone to external links (like portfolio or LinkedIn buttons) is insufficient and poses both usability and security risks. Screen reader users need explicit auditory warning when a link breaks navigation flow by opening a new tab, and external sites shouldn't gain access to the `window.opener` object. I attempted to add a visual icon but violated a strict project constraint ("no custom CSS").
**Action:** When creating or auditing external links that open in a new tab, use `rel="noopener noreferrer"` for security, and add an `aria-label="Link Name (opens in a new tab)"` attribute to provide context to screen readers, especially when custom CSS/visual modifications are prohibited.
