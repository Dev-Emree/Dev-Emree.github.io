## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2024-05-15 - Dynamic Content and ARIA Attributes
**Learning:** Hardcoding `aria-label`s on wrapper elements (like project cards) that contain dynamically localized content (using `data-i18n`) is an anti-pattern. The hardcoded label overrides the inner HTML for screen readers, breaking the client-side translation and preventing the localized text from being read.
**Action:** When adding `aria-label`s to provide context (e.g., "opens in a new tab"), only apply them to static links (like social icons). For dynamically translated content, the context should either be handled differently or the localized text must explicitly include the context.
