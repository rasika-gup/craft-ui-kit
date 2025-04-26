import type { Meta, StoryObj } from '@storybook/react';
import { AlertBanner } from '../components/design-system/alert/AlertBanner';
import { Bell, LifeBuoy, ShieldCheck } from 'lucide-react';

/**
 * `AlertBanner` provides contextual feedback messages for typical user actions.
 * 
 * ## Features
 * 
 * - Multiple variants for different contexts (info, success, warning, error)
 * - Optional title and custom icon support
 * - Dismissible option
 * - Action support for additional interactive elements
 * - Accessible by default with proper ARIA attributes
 * 
 * ## Usage Guidelines
 * 
 * - Use alerts to provide important feedback to the user
 * - Choose the appropriate variant based on the context and severity
 * - Keep alert messages concise and actionable
 * - For temporary notifications, consider using Toast instead
 * 
 * ## Accessibility
 * 
 * - Uses `role="alert"` for screen reader announcement
 * - Dismissible alerts have proper labeling
 * - Focus management for interactive elements
 * - Color combinations meet WCAG 2.1 AA contrast requirements
 */
const meta = {
  title: 'Design System/Feedback/AlertBanner',
  component: AlertBanner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile alert component for providing contextual feedback messages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Optional title for the alert',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'The main content of the alert',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style of the alert',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    icon: {
      control: { type: null },
      description: 'Custom icon override',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback when the alert is dismissed',
      table: {
        type: { summary: 'function' },
      },
    },
    action: {
      control: { type: null },
      description: 'Optional action element such as a button',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the alert should take up the full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
} satisfies Meta<typeof AlertBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default alert example with the info variant.
 */
export const Default: Story = {
  args: {
    title: 'Information',
    children: 'This is an informational alert with important details for the user.',
    variant: 'info',
  },
};

/**
 * Examples of all alert variants.
 */
export const Variants = () => (
  <div className="space-y-4">
    <AlertBanner variant="info" title="Information">
      This is an informational message for the user.
    </AlertBanner>
    
    <AlertBanner variant="success" title="Success">
      Your changes have been saved successfully.
    </AlertBanner>
    
    <AlertBanner variant="warning" title="Warning">
      Please review your information before continuing.
    </AlertBanner>
    
    <AlertBanner variant="error" title="Error">
      There was an error processing your request. Please try again.
    </AlertBanner>
  </div>
);

/**
 * Alert with no title, showing a simpler presentation.
 */
export const WithoutTitle = () => (
  <div className="space-y-4">
    <AlertBanner variant="info">
      This is a simple alert message without a title.
    </AlertBanner>
    
    <AlertBanner variant="success">
      Your changes have been saved successfully.
    </AlertBanner>
  </div>
);

/**
 * Alert with custom icons instead of the default ones.
 */
export const CustomIcons = () => (
  <div className="space-y-4">
    <AlertBanner 
      variant="info" 
      title="Notification" 
      icon={<Bell className="h-5 w-5" />}
    >
      You have new notifications to review.
    </AlertBanner>
    
    <AlertBanner 
      variant="success" 
      title="Security" 
      icon={<ShieldCheck className="h-5 w-5" />}
    >
      Your account is protected with two-factor authentication.
    </AlertBanner>
    
    <AlertBanner 
      variant="warning" 
      title="Support" 
      icon={<LifeBuoy className="h-5 w-5" />}
    >
      Your support ticket has been created successfully.
    </AlertBanner>
  </div>
);

/**
 * Dismissible alerts that can be closed by the user.
 */
export const Dismissible = () => (
  <div className="space-y-4">
    <AlertBanner
      variant="info"
      title="Notification"
      dismissible
      onDismiss={() => console.log('Info alert dismissed')}
    >
      This alert can be dismissed. Click the X to close it.
    </AlertBanner>
    
    <AlertBanner
      variant="success"
      dismissible
      onDismiss={() => console.log('Success alert dismissed')}
    >
      This success alert can also be dismissed.
    </AlertBanner>
  </div>
);

/**
 * Alert with custom action buttons.
 */
export const WithActions = () => (
  <div className="space-y-4">
    <AlertBanner
      variant="info"
      title="Update Available"
      action={
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
            Update Now
          </button>
          <button className="px-3 py-1 text-sm font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Later
          </button>
        </div>
      }
    >
      A new version of the application is available.
    </AlertBanner>
    
    <AlertBanner
      variant="warning"
      title="Session Expiring"
      action={
        <button className="px-3 py-1 text-sm font-medium rounded-md bg-warning text-warning-foreground hover:bg-warning/90">
          Extend Session
        </button>
      }
    >
      Your session will expire in 5 minutes. Would you like to stay logged in?
    </AlertBanner>
  </div>
);

/**
 * Alert with full width, useful for page-level notifications.
 */
export const FullWidth = () => (
  <AlertBanner
    variant="error"
    title="System Maintenance"
    fullWidth
  >
    The system will be undergoing maintenance on June 1st from 2:00 AM to 4:00 AM UTC. 
    Please save your work before this time to prevent data loss.
  </AlertBanner>
);

/**
 * Usage guidelines showing the best practices for alerts.
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
          <AlertBanner variant="success" title="Good Example">
            Your data has been successfully saved.
          </AlertBanner>
          <p className="text-sm text-muted-foreground mt-2">
            Keep alert messages clear, concise, and actionable
          </p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-destructive mb-2">Don't ✗</h4>
        <div className="space-y-4">
          <AlertBanner variant="error" title="Error">
            Error code XJ422: Invalid request parameters were submitted causing a system validation error
            to occur. Please review your submission and try again with valid parameters according to the API documentation.
          </AlertBanner>
          <p className="text-sm text-muted-foreground mt-2">
            Avoid technical jargon and overly long messages
          </p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-success mb-2">Do ✓</h4>
        <div className="space-y-4">
          <AlertBanner 
            variant="warning" 
            title="Session Expiring"
            action={
              <button className="px-3 py-1 text-sm font-medium rounded-md bg-warning text-warning-foreground hover:bg-warning/90">
                Extend Session
              </button>
            }
          >
            Your session will expire in 5 minutes.
          </AlertBanner>
          <p className="text-sm text-muted-foreground mt-2">
            Include action buttons for alerts that require user response
          </p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-destructive mb-2">Don't ✗</h4>
        <div className="space-y-4">
          <div className="space-y-2">
            <AlertBanner variant="info">This is an info message.</AlertBanner>
            <AlertBanner variant="info">This is another info message.</AlertBanner>
            <AlertBanner variant="info">Yet another info message.</AlertBanner>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Avoid showing too many alerts at once, which can overwhelm users
          </p>
        </div>
      </div>
    </div>
  </div>
); 