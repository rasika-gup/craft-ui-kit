import '../src/index.css';
import { themes } from '@storybook/theming';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.normal },
      current: 'light',
      stylePreview: true,
    },
    docs: {
      toc: true,
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            reviewOnFail: true,
          },
        ],
      },
    },
  },
};

export default preview; 