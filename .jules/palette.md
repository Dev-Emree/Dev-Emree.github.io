## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-02-13 - Focus Parity for Micro-Animations
**Learning:** Interactive micro-animations in CSS (like card scaling or button transformations on `:hover`) must be explicitly paired with `:focus-visible` or `:focus-within`. Otherwise, there is a mismatch where mouse users receive rich visual feedback but keyboard users do not.
**Action:** When adding hover-based transform or scale animations, always replicate those states for `:focus-visible` (for simple interactive elements) or `:focus-within` (for container elements like cards) to ensure visual parity for keyboard users.
