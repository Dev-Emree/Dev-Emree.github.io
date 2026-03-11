## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2026-03-11 - External Link ARIA and Visual Indicators
**Learning:** This app frequently relies on simple external links (using `target="_blank"`) without visually communicating to users that a new tab will open, or communicating this to screen readers. This breaks expectations for both visual and non-visual users.
**Action:** Always append visually hidden "opens in a new tab" text (e.g., using a `.sr-only` class) and a small, unobtrusive inline SVG icon (e.g., `.ext-link-icon`) to external links to improve accessibility and predictability. Additionally, always include `rel="noopener noreferrer"` for security.
