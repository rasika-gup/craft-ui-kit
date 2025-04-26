import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../components/design-system/input/TextInput';
import { AtSign, Calendar, EyeOff, Eye, Search, User, Lock } from 'lucide-react';
import { useState } from 'react';

/**
 * `TextInput` is a foundational form component for collecting user input.
 * 
 * ## Features
 * 
 * - Multiple size variants (sm, md, lg)
 * - Optional label and helper text
 * - Error and success states
 * - Start and end icon support
 * - Full width option
 * - Accessible by default
 * 
 * ## Usage Guidelines
 * 
 * - Always use a clear, concise label
 * - Provide helper text for additional context when needed
 * - Use appropriate input types (email, password, tel, etc.)
 * - Display validation errors clearly
 * - Consider the appropriate size for your form layout
 * 
 * ## Accessibility
 * 
 * - Proper label associations with `for` attribute
 * - ARIA attributes for validation states
 * - Focus management with visual indicators
 * - Clear error messaging
 */
const meta = {
  title: 'Design System/Data Entry/TextInput',
  component: TextInput,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile input component for collecting user data with support for various states and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the input field',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Additional information displayed below the input',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the input field',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the input is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string' },
      },
    },
    success: {
      control: 'boolean',
      description: 'Whether the input is in a successful state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    startIcon: {
      control: { type: null },
      description: 'Icon displayed at the start of the input',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    endIcon: {
      control: { type: null },
      description: 'Icon displayed at the end of the input',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take up the full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default text input example with label and helper text.
 */
export const Default: Story = {
  args: {
    id: 'default-input',
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This will be your public display name',
  },
};

/**
 * Examples of all available sizes.
 */
export const Sizes = () => (
  <div className="space-y-4">
    <TextInput
      id="small-input"
      label="Small Input"
      placeholder="Small size"
      size="sm"
    />
    
    <TextInput
      id="medium-input"
      label="Medium Input"
      placeholder="Medium size (default)"
      size="md"
    />
    
    <TextInput
      id="large-input"
      label="Large Input"
      placeholder="Large size"
      size="lg"
    />
  </div>
);

/**
 * Input with various validation states.
 */
export const ValidationStates = () => (
  <div className="space-y-4">
    <TextInput
      id="default-state"
      label="Default State"
      placeholder="Enter information"
      helperText="This is the default input state"
    />
    
    <TextInput
      id="error-state"
      label="Error State"
      placeholder="Enter information"
      value="invalid.email"
      error="Please enter a valid email address"
    />
    
    <TextInput
      id="success-state"
      label="Success State"
      placeholder="Enter information"
      value="valid-input"
      success
      helperText="Input is valid"
    />
    
    <TextInput
      id="disabled-state"
      label="Disabled State"
      placeholder="You cannot edit this field"
      disabled
      helperText="This field is disabled"
    />
  </div>
);

/**
 * Input with icons to enhance usability and provide context.
 */
export const WithIcons = () => (
  <div className="space-y-4">
    <TextInput
      id="email-input"
      label="Email Address"
      placeholder="you@example.com"
      type="email"
      startIcon={<AtSign className="h-4 w-4 text-muted-foreground" />}
    />
    
    <TextInput
      id="search-input"
      placeholder="Search..."
      type="search"
      startIcon={<Search className="h-4 w-4 text-muted-foreground" />}
    />
    
    <TextInput
      id="date-input"
      label="Date"
      placeholder="Select a date"
      type="text"
      endIcon={<Calendar className="h-4 w-4 text-muted-foreground" />}
    />
    
    <TextInput
      id="user-input"
      label="Username"
      placeholder="Enter username"
      startIcon={<User className="h-4 w-4 text-muted-foreground" />}
      error="Username already taken"
    />
  </div>
);

/**
 * Password input with show/hide functionality.
 */
export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <TextInput
      id="password-input"
      label="Password"
      placeholder="Enter your password"
      type={showPassword ? "text" : "password"}
      helperText="Password must be at least 8 characters"
      startIcon={<Lock className="h-4 w-4 text-muted-foreground" />}
      endIcon={
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Eye className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      }
    />
  );
};

/**
 * Input with a required field, displaying visual indication.
 */
export const RequiredInput = () => (
  <div className="space-y-4">
    <TextInput
      id="required-input"
      label="Full Name"
      placeholder="Enter your full name"
      required
    />
    
    <TextInput
      id="optional-input"
      label="Phone Number"
      placeholder="Enter your phone number (optional)"
      helperText="We'll only use this to contact you about your order"
    />
  </div>
);

/**
 * Full width input that takes up the entire container width.
 */
export const FullWidth = () => (
  <div className="border-2 border-dashed border-gray-200 p-4">
    <TextInput
      id="full-width-input"
      label="Company Name"
      placeholder="Enter your company name"
      fullWidth
    />
  </div>
);

/**
 * Usage guidelines showing the best practices for text inputs.
 */
export const UsageGuidelines = () => (
  <div className="space-y-8">
    <div className="border-l-4 border-primary px-4 py-2 bg-primary/5">
      <h3 className="text-lg font-semibold mb-2">Do's and Don'ts</h3>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-sm font-medium text-success mb-2">Do ✓</h4>
        <div className="space-y-4">
          <TextInput
            id="good-example-1"
            label="Email Address"
            placeholder="you@example.com"
            helperText="We'll never share your email with others"
            startIcon={<AtSign className="h-4 w-4 text-muted-foreground" />}
          />
          <p className="text-sm text-muted-foreground mt-2">
            Use clear labels and helpful placeholder text
          </p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-destructive mb-2">Don't ✗</h4>
        <div className="space-y-4">
          <TextInput
            id="bad-example-1"
            placeholder="Type here..."
          />
          <p className="text-sm text-muted-foreground mt-2">
            Avoid inputs without labels or with vague placeholder text
          </p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-success mb-2">Do ✓</h4>
        <div className="space-y-4">
          <TextInput
            id="good-example-2"
            label="Date of Birth"
            placeholder="MM/DD/YYYY"
            error="Please enter a valid date in the format MM/DD/YYYY"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Provide specific error messages that help users correct mistakes
          </p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-destructive mb-2">Don't ✗</h4>
        <div className="space-y-4">
          <TextInput
            id="bad-example-2"
            label="Input"
            placeholder="Input"
            error="Invalid input"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Avoid vague error messages that don't help users fix issues
          </p>
        </div>
      </div>
    </div>
  </div>
); 