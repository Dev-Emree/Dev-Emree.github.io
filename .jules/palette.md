## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-02-12 - Keyboard Parity for Micro-Animations
**Learning:** Interactive micro-animations (like button transforms or project card scaling) driven solely by `:hover` pseudo-classes leave keyboard users without vital visual feedback or state indication, creating an unequal experience.
**Action:** Always explicitly pair interactive `:hover` states with `:focus-visible` or `:focus-within` (for complex children elements) to ensure keyboard navigation receives parity with mouse interaction.
