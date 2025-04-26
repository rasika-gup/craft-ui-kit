import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Typography,
  Heading2,
  Heading3,
  Heading4,
  Body,
  BodySmall,
  HelperText,
  Label,
  Caption
} from "@/components/design-system/typography/Typography";
import { TextInput } from "@/components/design-system/input/TextInput";
import { AlertBanner } from "@/components/design-system/alert/AlertBanner";
import { useToast } from "@/components/design-system/toast/Toast";
import { AtSign, Eye, EyeOff, Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export const DesignSystemDemo = () => {
  const { success, error, info, warning } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleShowToast = (type: 'success' | 'error' | 'info' | 'warning') => {
    const options = {
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      description: `This is a ${type} toast notification example.`
    };
    
    switch (type) {
      case 'success':
        success(options);
        break;
      case 'error':
        error(options);
        break;
      case 'info':
        info(options);
        break;
      case 'warning':
        warning(options);
        break;
    }
  };

  return (
    <Tabs defaultValue="typography">
      <TabsList className="mb-6">
        <TabsTrigger value="typography">Typography</TabsTrigger>
        <TabsTrigger value="inputs">Data Entry</TabsTrigger>
        <TabsTrigger value="feedback">Feedback</TabsTrigger>
      </TabsList>
      
      {/* Typography Demo */}
      <TabsContent value="typography" className="space-y-8">
        <div>
          <Heading3 className="mb-4">Heading Variants</Heading3>
          <div className="space-y-4 border rounded-lg p-4 bg-card">
            <Heading2>Heading Level 2</Heading2>
            <Heading3>Heading Level 3</Heading3>
            <Heading4>Heading Level 4</Heading4>
          </div>
        </div>
        
        <div>
          <Heading3 className="mb-4">Body Text Variants</Heading3>
          <div className="space-y-4 border rounded-lg p-4 bg-card">
            <Body>
              Standard body text used for paragraphs and general content.
              The quick brown fox jumps over the lazy dog.
            </Body>
            <BodySmall>
              Smaller body text for secondary information.
              The quick brown fox jumps over the lazy dog.
            </BodySmall>
          </div>
        </div>
        
        <div>
          <Heading3 className="mb-4">Utility Text</Heading3>
          <div className="space-y-4 border rounded-lg p-4 bg-card">
            <div>
              <Label htmlFor="demo-field">Form Label</Label>
              <div className="h-8 w-full border rounded-md mt-1"></div>
            </div>
            <div>
              <Caption>Caption text for images or supplementary information</Caption>
            </div>
            <div>
              <HelperText>Helper text provides additional context for form fields</HelperText>
            </div>
          </div>
        </div>
        
        <div>
          <Heading3 className="mb-4">Color Variants</Heading3>
          <div className="space-y-2 border rounded-lg p-4 bg-card">
            <Typography color="default">Default text color</Typography>
            <Typography color="muted">Muted text color for secondary content</Typography>
            <Typography color="primary">Primary brand color for emphasis</Typography>
            <Typography color="success">Success color for positive messages</Typography>
            <Typography color="warning">Warning color for cautionary messages</Typography>
            <Typography color="destructive">Destructive color for errors</Typography>
          </div>
        </div>
      </TabsContent>
      
      {/* Input Demo */}
      <TabsContent value="inputs" className="space-y-8">
        <div>
          <Heading3 className="mb-4">Text Inputs</Heading3>
          <div className="space-y-6 border rounded-lg p-4 bg-card">
            <TextInput
              id="email"
              label="Email Address"
              placeholder="you@example.com"
              type="email"
              helperText="We'll never share your email"
              startIcon={<AtSign className="h-4 w-4 text-muted-foreground" />}
            />
            
            <TextInput
              id="password"
              label="Password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              required
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
          </div>
        </div>
        
        <div>
          <Heading3 className="mb-4">Input States</Heading3>
          <div className="space-y-6 border rounded-lg p-4 bg-card">
            <TextInput
              id="default"
              label="Default State"
              placeholder="Enter text"
            />
            
            <TextInput
              id="disabled"
              label="Disabled State"
              placeholder="This field is disabled"
              disabled
              helperText="This input is disabled"
            />
            
            <TextInput
              id="error"
              label="Error State"
              placeholder="Enter email"
              value="invalid-email"
              error="Please enter a valid email address"
            />
            
            <TextInput
              id="success"
              label="Success State"
              placeholder="Enter username"
              value="validuser123"
              success
              helperText="Username is available"
            />
          </div>
        </div>
        
        <div>
          <Heading3 className="mb-4">Input Sizes</Heading3>
          <div className="space-y-6 border rounded-lg p-4 bg-card">
            <TextInput
              id="small"
              label="Small Input"
              placeholder="Small size"
              size="sm"
            />
            
            <TextInput
              id="medium"
              label="Medium Input (Default)"
              placeholder="Medium size"
              size="md"
            />
            
            <TextInput
              id="large"
              label="Large Input"
              placeholder="Large size"
              size="lg"
            />
          </div>
        </div>
      </TabsContent>
      
      {/* Feedback Demo */}
      <TabsContent value="feedback" className="space-y-8">
        <div>
          <Heading3 className="mb-4">Alert Banners</Heading3>
          <div className="space-y-4 border rounded-lg p-4 bg-card">
            <AlertBanner
              variant="info"
              title="Information"
              icon={<Info className="h-5 w-5" />}
            >
              This is an informational alert with important details.
            </AlertBanner>
            
            <AlertBanner
              variant="success"
              title="Success"
              icon={<CheckCircle className="h-5 w-5" />}
            >
              Your changes have been saved successfully.
            </AlertBanner>
            
            <AlertBanner
              variant="warning"
              title="Warning"
              icon={<AlertTriangle className="h-5 w-5" />}
            >
              Please review your information before proceeding.
            </AlertBanner>
            
            <AlertBanner
              variant="error"
              title="Error"
              icon={<AlertCircle className="h-5 w-5" />}
            >
              There was an error processing your request.
            </AlertBanner>
          </div>
        </div>
        
        <div>
          <Heading3 className="mb-4">Dismissible Alerts</Heading3>
          <div className="space-y-4 border rounded-lg p-4 bg-card">
            <AlertBanner
              variant="info"
              title="Dismissible Alert"
              dismissible
              onDismiss={() => console.log('Alert dismissed')}
            >
              This alert can be dismissed by clicking the close button.
            </AlertBanner>
          </div>
        </div>
        
        <div>
          <Heading3 className="mb-4">Toast Notifications</Heading3>
          <div className="grid grid-cols-2 gap-4 border rounded-lg p-4 bg-card">
            <button
              className="p-2 border rounded-md hover:bg-primary/10 transition-colors"
              onClick={() => handleShowToast('success')}
            >
              Show Success Toast
            </button>
            
            <button
              className="p-2 border rounded-md hover:bg-destructive/10 transition-colors"
              onClick={() => handleShowToast('error')}
            >
              Show Error Toast
            </button>
            
            <button
              className="p-2 border rounded-md hover:bg-primary/10 transition-colors"
              onClick={() => handleShowToast('info')}
            >
              Show Info Toast
            </button>
            
            <button
              className="p-2 border rounded-md hover:bg-warning/10 transition-colors"
              onClick={() => handleShowToast('warning')}
            >
              Show Warning Toast
            </button>
          </div>
        </div>
        
        <div>
          <Heading3 className="mb-4">Alert with Action</Heading3>
          <div className="border rounded-lg p-4 bg-card">
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
        </div>
      </TabsContent>
    </Tabs>
  );
};
