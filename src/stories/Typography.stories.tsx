import type { Meta, StoryObj } from '@storybook/react';
import {
  Typography,
  Display1,
  Display2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  BodyLarge,
  Body,
  BodySmall,
  Caption,
  Label,
  HelperText
} from '../components/design-system/typography/Typography';

/**
 * `Typography` provides a consistent system for displaying text content throughout the application.
 * 
 * ## Features
 * 
 * - Semantic HTML elements
 * - Consistent sizing and spacing
 * - Responsive text scaling
 * - Color variants for different contexts
 * - Alignment options
 * - Text truncation
 * 
 * ## Usage Guidelines
 * 
 * - Use heading levels (h1-h6) in a hierarchical order
 * - Maintain consistent typography to establish visual hierarchy
 * - Select the appropriate variant based on content importance and readability
 * - Use color variants purposefully (e.g., destructive for errors)
 * 
 * ## Accessibility
 * 
 * - All typography components use semantic HTML elements
 * - Text sizes follow WCAG 2.1 guidelines for readability
 * - Color contrast ratios meet WCAG 2.1 AA requirements
 * - Use proper heading hierarchy for screen readers
 */
const meta = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive typography system for consistent text styling across the application.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display-1', 'display-2', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'body-lg', 'body', 'body-sm', 'caption', 'label', 'helper'
      ],
      description: 'The typography style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body' },
      },
    },
    as: {
      control: 'text',
      description: 'Override the default HTML element',
      table: {
        type: { summary: 'ElementType' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'destructive'],
      description: 'The text color variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate text with ellipsis',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    children: {
      control: 'text',
      description: 'The text content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default typography example demonstrating the base component usage.
 */
export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
    color: 'default',
    align: 'left',
  },
};

/**
 * Displays all typography variants in their default styling.
 */
export const AllVariants = () => (
  <div className="space-y-6">
    <div>
      <Label color="muted">Display Variants</Label>
      <div className="space-y-4 mt-2">
        <Display1>Display 1</Display1>
        <Display2>Display 2</Display2>
      </div>
    </div>
    
    <div>
      <Label color="muted">Heading Variants</Label>
      <div className="space-y-4 mt-2">
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading 5</Heading5>
        <Heading6>Heading 6</Heading6>
      </div>
    </div>
    
    <div>
      <Label color="muted">Body Text Variants</Label>
      <div className="space-y-4 mt-2">
        <BodyLarge>Body Large: Slightly larger body text for emphasizing content without using a heading.</BodyLarge>
        <Body>Body: Standard body text used for paragraphs and general content throughout the interface.</Body>
        <BodySmall>Body Small: Smaller body text, useful for less important information or dense layouts.</BodySmall>
      </div>
    </div>
    
    <div>
      <Label color="muted">Utility Text Variants</Label>
      <div className="space-y-4 mt-2">
        <Label>Label: Used for form labels and section headers</Label>
        <Caption>Caption: Used for image captions, table headers, and supplementary text</Caption>
        <HelperText>Helper Text: Used for form field hints, validation messages, and other assistive text</HelperText>
      </div>
    </div>
  </div>
);

/**
 * Examples of different color variants applied to typography.
 */
export const ColorVariants = () => (
  <div className="space-y-4">
    <Body color="default">Default: Used for most text content</Body>
    <Body color="muted">Muted: Used for less important or secondary text</Body>
    <Body color="primary">Primary: Used for emphasizing content with the primary brand color</Body>
    <Body color="success">Success: Used for success messages and positive feedback</Body>
    <Body color="warning">Warning: Used for warning messages and cautionary feedback</Body>
    <Body color="destructive">Destructive: Used for error messages and destructive actions</Body>
  </div>
);

/**
 * Examples of different text alignment options.
 */
export const AlignmentVariants = () => (
  <div className="space-y-6 border-2 border-dashed border-gray-200 p-4">
    <Body align="left">Left-aligned text (default)</Body>
    <Body align="center">Center-aligned text</Body>
    <Body align="right">Right-aligned text</Body>
  </div>
);

/**
 * Example of text truncation for handling overflow.
 */
export const Truncation = () => (
  <div className="w-48 border-2 border-dashed border-gray-200 p-4">
    <Body truncate>
      This is a very long text that will be truncated with an ellipsis when it exceeds the container width.
    </Body>
    <div className="mt-4">
      <Body>
        This is a very long text that will wrap to the next line when it exceeds the container width.
      </Body>
    </div>
  </div>
);

/**
 * Guidelines for choosing the appropriate typography variant.
 */
export const UsageGuidelines = () => (
  <div className="space-y-6">
    <div className="border-l-4 border-primary px-4 py-2 bg-primary/5">
      <Heading4>Do's and Don'ts</Heading4>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label color="success">Do ✓</Label>
        <ul className="list-disc pl-5 space-y-2">
          <li><BodySmall>Use headings in hierarchical order (H1 → H6)</BodySmall></li>
          <li><BodySmall>Choose the appropriate variant based on content importance</BodySmall></li>
          <li><BodySmall>Use semantic variants (Label for form labels, HelperText for assistive text)</BodySmall></li>
          <li><BodySmall>Maintain consistent typography across similar UI elements</BodySmall></li>
        </ul>
      </div>
      
      <div className="space-y-2">
        <Label color="destructive">Don't ✗</Label>
        <ul className="list-disc pl-5 space-y-2">
          <li><BodySmall>Skip heading levels (e.g., jumping from H1 to H3)</BodySmall></li>
          <li><BodySmall>Use color variants arbitrarily without considering meaning</BodySmall></li>
          <li><BodySmall>Create your own text styles with custom CSS</BodySmall></li>
          <li><BodySmall>Use Display variants for body text or small UI elements</BodySmall></li>
        </ul>
      </div>
    </div>
  </div>
);

/**
 * Examples showing different semantic HTML elements.
 */
export const SemanticElements = () => (
  <div className="space-y-4">
    <div className="border-2 border-dashed border-gray-200 p-4">
      <Typography variant="h2">Default H2 Element</Typography>
      <Typography variant="h2" as="h3">H2 Styling with H3 Element</Typography>
      <Typography variant="body" as="div">Body Styling with Div Element</Typography>
    </div>
    <HelperText color="muted">
      Use the <code>as</code> prop to override the default HTML element when needed for semantic HTML structure.
    </HelperText>
  </div>
); 