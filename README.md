# Enterprise Design System

**Developed by Rashika Gupta**

A comprehensive, accessible, and responsive design system built with React, TypeScript, and Tailwind CSS. This design system provides enterprise-grade components with a focus on accessibility, maintainability, and exceptional developer experience.

![Design System Preview](public/preview.png)

## 🚀 Overview

This project demonstrates a scalable approach to building a design system for enterprise applications. It's built following best practices in component architecture, accessibility, and documentation.

### Key Highlights

- **Component Architecture**: Modular, composable components with clear separation of concerns
- **TypeScript Integration**: Full type safety with well-defined interfaces and types
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes and keyboard navigation
- **Responsive Design**: Mobile-first approach with consistent behavior across all devices
- **Theming Support**: Comprehensive light/dark mode with customizable design tokens
- **Developer Experience**: Intuitive APIs, consistent patterns, and thorough documentation

## 📚 Component Categories

### Typography System

A comprehensive set of typography components with responsive scaling and proper semantic HTML:

- Heading components (H1-H6)
- Paragraph variations
- Utility text components (Label, Caption, HelperText)

### Data Entry Components

Interactive form components with full validation states and accessibility support:

- TextInput with validation states
- Dropdown with keyboard navigation
- Checkbox/Radio components
- Toggle Switch

### Feedback Components

Components for providing feedback to users:

- Toast notification system
- Alert banners for status messages
- Modal dialogs for confirmations
- Popovers for contextual information

## 🎨 Design Principles

1. **Accessibility First**: Every component follows WCAG 2.1 guidelines
2. **Responsive by Default**: Mobile-first approach with consistent behavior
3. **Developer Experience**: Intuitive APIs with full TypeScript support
4. **Performance**: Lightweight and tree-shakeable components
5. **Maintainability**: Modular architecture with clear separation of concerns

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/enterprise-design-system

# Install dependencies
npm install

# Start the development server
npm run dev

# Launch Storybook
npm run storybook
```

### Component Usage Example

```tsx
import { TextInput, AlertBanner, Typography } from '@/components/design-system';

function ExampleForm() {
  return (
    <div className="space-y-4">
      <Typography.Heading2>User Registration</Typography.Heading2>
      <Typography.Body>Please fill in your details below to create an account.</Typography.Body>
      
      <TextInput 
        id="email"
        label="Email Address"
        placeholder="Enter your email"
        helperText="We'll never share your email with anyone else"
        required
      />
      
      <AlertBanner
        title="Note!"
        variant="info"
        children="You'll receive a confirmation email after registering."
      />
    </div>
  );
}
```

## 📖 Storybook Documentation

Each component is thoroughly documented in Storybook, including:

- Component description and usage guidelines
- Props API documentation with types
- Interactive examples of all variants and states
- Accessibility notes and best practices
- Theming and customization options
- Do's and Don'ts

Launch Storybook locally:

```bash
npm run storybook
```

View the deployed Storybook: [Storybook Documentation](https://your-storybook-url.com)

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Check test coverage
npm run test:coverage
```

## 🏗️ Project Structure

```
├── .storybook/            # Storybook configuration
├── public/                # Static assets
├── src/
│   ├── components/        # Component library
│   │   ├── design-system/ # Design system components
│   │   │   ├── typography/# Typography components
│   │   │   ├── input/     # Input components
│   │   │   ├── dropdown/  # Dropdown components
│   │   │   ├── alert/     # Alert components
│   │   │   └── toast/     # Toast components
│   │   └── ui/           # UI components using design system
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── theme/            # Theming configuration
│   └── stories/          # Storybook stories
└── ...
```

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - Component Primitives
- [Storybook](https://storybook.js.org/) - Component Documentation
- [Vite](https://vitejs.dev/) - Build Tool

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful component examples

