## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2026-03-09 - Skip to content link
**Learning:** For highly custom, single-page sites lacking built-in semantic navigation blocks, adding a 'skip to content' link greatly improves keyboard navigation for users relying on assistive tech. Ensuring the target section has `tabindex="-1"` is critical for focus management.
**Action:** Always include a visually hidden skip-link that becomes visible on focus at the top of the body element. Include `tabindex="-1"` on the destination element to ensure it receives focus programmatically.
