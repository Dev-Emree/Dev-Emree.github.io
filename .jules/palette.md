## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2025-03-16 - Accessible Keyboard Focus States for Interactive Components
**Learning:** Pure CSS focus management with `:focus-within` is a highly effective way to style parent container elements (like project cards) when screen readers or keyboard navigation focus on deeply nested interactive children (like anchor tags). Without it, keyboard users cannot visually tell when they are interacting with the nested link inside a complex component.
**Action:** Always map interactive parent visual states (like `transform: scale()`, `opacity` toggles, or `box-shadow`) using the `:focus-within` pseudo-class alongside `:hover` for complex cards, instead of relying purely on `.btn` or generic `:focus-visible` styles which only target the child element.
