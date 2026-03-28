## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-02-19 - Keyboard Parity for CSS Micro-Animations
**Learning:** This app heavily relies on interactive CSS micro-animations via `:hover` (such as card scaling, button transforms, and underline effects). However, these hover effects were entirely absent for keyboard users relying on standard `Tab` navigation, making the app feel static and broken for accessibility tools.
**Action:** Always map interactive `:hover` states to `:focus-visible` (for standalone links/buttons) or `:focus-within` (for parent containers like cards) to ensure complete visual parity for keyboard users.
