# Setting Up and Deploying Storybook

This guide covers how to set up, run, and deploy Storybook for the Enterprise Design System.

## Local Setup

### Installation

The project is already set up with Storybook. After cloning the repository, install dependencies and start Storybook:

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

This will start the Storybook development server on http://localhost:6006.

### Creating Stories

Stories are located in the `src/stories` directory. Each component should have its own story file following this naming convention:

```
ComponentName.stories.tsx
```

A basic story structure looks like this:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from '../components/design-system/component-folder/Component';

const meta = {
  title: 'Design System/Category/Component',
  component: Component,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define prop controls
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};

// Additional stories...
```

### Documenting Components

Each component should include:

1. Comprehensive documentation on usage and props
2. Multiple stories showing different variants and states
3. Guidelines for accessibility and best practices
4. Code examples

## Deploying Storybook

### Building Storybook

To build Storybook for deployment:

```bash
npm run build-storybook
```

This generates a static Storybook in the `storybook-static` directory.

### Deploying to Chromatic

[Chromatic](https://www.chromatic.com/) is a recommended service for deploying Storybook.

1. Install Chromatic:
   ```bash
   npm install --save-dev chromatic
   ```

2. Deploy to Chromatic:
   ```bash
   npx chromatic --project-token=<your-project-token>
   ```

3. After deployment, Chromatic will provide a URL to your published Storybook.

### Deploying to Vercel

[Vercel](https://vercel.com/) is another great option for Storybook deployment:

1. Create a Vercel account and install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy Storybook:
   ```bash
   vercel --prod
   ```

4. Configure the build settings to use the following:
   - Build Command: `npm run build-storybook`
   - Output Directory: `storybook-static`

## Adding Storybook Add-ons

The project is already set up with essential add-ons like:

- @storybook/addon-essentials
- @storybook/addon-interactions
- @storybook/addon-links
- @storybook/addon-a11y

To add more add-ons:

1. Install the add-on:
   ```bash
   npm install --save-dev @storybook/addon-name
   ```

2. Register the add-on in `.storybook/main.js`:
   ```js
   module.exports = {
     addons: [
       // existing addons
       '@storybook/addon-name'
     ],
   };
   ```

## Best Practices

1. **Consistent Story Structure**: Follow the same story structure across components
2. **Document All Props**: Include descriptions, default values, and control types
3. **Show Variations**: Include stories for all states, variants, and edge cases
4. **Accessibility Testing**: Use the a11y add-on to test accessibility in each story
5. **Do's and Don'ts**: Include usage guidelines showing good and bad examples
6. **Real-world Examples**: Show how components work together in practical examples

## Troubleshooting

- **Build Issues**: If you encounter build issues, try clearing the Storybook cache:
  ```bash
  npx storybook@latest cache:clear
  ```

- **Component Rendering Problems**: Check for missing dependencies or incorrectly defined props

- **Layout Issues**: Use the `layout` parameter in your stories to control how components are displayed 