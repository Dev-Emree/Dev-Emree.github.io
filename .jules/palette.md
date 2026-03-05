## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).
## 2026-03-05 - Keyboard Focus Visual Parity
**Learning:** Keyboard users were missing out on interactive micro-animations because CSS states like `transform: translateY(-3px)` were only bound to `:hover`. Expanding these to include `:focus-visible` (and `:focus-within` for parent containers) ensures keyboard navigation is just as polished as mouse interaction.
**Action:** When adding hover animations to buttons, links, or cards, always define an equivalent focus state to maintain accessibility and visual delight.
