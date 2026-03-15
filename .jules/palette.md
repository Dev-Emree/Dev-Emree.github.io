## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-05-14 - Accessible External Links in Single-Page Apps
**Learning:** Screen readers and keyboard users often lose context when external links (`target="_blank"`) open a new tab without warning, and omitting `rel="noopener noreferrer"` introduces security risks. In minimal codebases relying heavily on external CDNs or external portfolio links, this omission is common.
**Action:** When adding or reviewing `target="_blank"` links, always ensure `rel="noopener noreferrer"` is present for security, and pair it with an `aria-label` (e.g., `aria-label="Link Name (opens in a new tab)"`) to explicitly notify screen reader users of the context switch, without needing custom CSS.
