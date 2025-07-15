# Modern Portfolio Design System

A comprehensive design system and portfolio implementation using React with modern CSS architecture.

## Features

### Design System
- **Typography**: Inter (body) + Space Grotesk (headings) with modular scale
- **Color Palette**: Professional color scheme with primary (#2D3047), secondary (#419D78), and accent (#E09F3E) colors
- **Component Library**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with defined breakpoints
- **Animation System**: Subtle hover effects and transitions

### Components
- **Buttons**: Primary, secondary, accent, outline, and ghost variants
- **Cards**: Flexible card system with header, body, and footer sections
- **Forms**: Styled inputs, textareas, and form validation
- **Navigation**: Responsive header with mobile menu
- **Badges**: Status and category indicators

## File Structure

```
src/
├── styles/
│   ├── variables.css      # CSS custom properties
│   ├── base.css          # Base styles and typography
│   ├── components.css    # Component styles
│   ├── layout.css        # Layout and grid systems
│   └── animations.css    # Animation definitions
├── components/
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
└── App.jsx               # Main application
```

## Design Specifications

### Typography Scale
- **Font Families**: Inter (400, 600) for body, Space Grotesk (500, 700) for headings
- **Modular Scale**: 1.25 ratio from 12px to 60px
- **Line Heights**: Tight (1.25), Normal (1.5), Relaxed (1.625)

### Color System
```css
Primary: #2D3047 (deep blue-gray)
Secondary: #419D78 (forest green)  
Accent: #E09F3E (warm orange)
Background: #F5F5F5 (light gray)
Text: #2B2D42 (dark gray)
```

### Spacing System
- **Base Unit**: 8px
- **Scale**: 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px

### Responsive Breakpoints
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px  
- **Desktop**: 769px+

## Usage Examples

### Button Component
```jsx
import { Button } from './components/ui';

<Button variant="primary" size="lg">Primary Button</Button>
<Button variant="outline" size="sm">Outline Button</Button>
```

### Card Component
```jsx
import { Card } from './components/ui';

<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle>Card Subtitle</Card.Subtitle>
  </Card.Header>
  <Card.Body>
    Card content goes here
  </Card.Body>
  <Card.Footer>
    Footer actions
  </Card.Footer>
</Card>
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Reduced motion support

---

Modern design system implementation for professional portfolio websites.