## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2024-05-15 - Micro-animations & Focus Visibility Parity
**Learning:** Interactive micro-animations (like scaling cards or transforming buttons on hover) are inaccessible to keyboard users unless explicitly paired with `:focus-visible` or `:focus-within`. Relying only on a generic focus ring outline leaves keyboard users without the rich visual feedback mouse users receive.
**Action:** Always append `:focus-visible` to interactive elements and `:focus-within` to complex containers alongside their existing `:hover` states in CSS to ensure full visual parity across interaction modalities.
