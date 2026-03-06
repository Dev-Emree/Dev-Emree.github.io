## 2024-05-14 - Custom Dropdown ARIA States
**Learning:** Custom UI components in this app (like the language selector dropdown) often rely solely on CSS classes (e.g., `.active`) for state management, omitting crucial accessibility attributes (`aria-expanded`, `role="menu"`, etc.). This makes them invisible or confusing to screen reader users.
**Action:** When working on or reviewing custom interactive components, always check for missing ARIA attributes and ensure JS state toggles also update their corresponding ARIA states (like `aria-expanded`).

## 2026-03-06 - Interactive Micro-Animations Visual Parity
**Learning:** In this application, numerous micro-animations (such as card scaling `.project-card:hover .card-image`, button translateY `.btn.primary:hover`, link underlines `.nav-links a:hover::after`) were styled exclusively for the `:hover` pseudo-class. This led to a lack of visual feedback for users navigating with keyboards, creating an inconsistent and less accessible experience.
**Action:** When adding or updating interactive micro-animations in CSS for `:hover`, always explicitly pair them with `:focus-visible` (for individual elements) or `:focus-within` (for complex container elements like `.project-card`) to ensure accessibility and visual parity for keyboard users.
