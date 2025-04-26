
import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from "lucide-react";
import { createPortal } from "react-dom";
import { BodySmall, Typography } from "../typography/Typography";

export type ToastVariant = "info" | "success" | "warning" | "error";

interface ToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  onClose: (id: string) => void;
  action?: React.ReactNode;
  position?: ToastPosition;
}

export type ToastPosition = 
  | "top-right"
  | "top-center" 
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: React.ReactNode;
  position?: ToastPosition;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ id, title, description, variant = "info", duration = 5000, onClose, action, position }, ref) => {
    // Auto dismiss
    React.useEffect(() => {
      if (duration !== Infinity) {
        const timer = setTimeout(() => {
          onClose(id);
        }, duration);
        return () => clearTimeout(timer);
      }
      return undefined;
    }, [duration, id, onClose]);

    // Variant icons
    const VariantIcon = {
      info: Info,
      success: CheckCircle,
      warning: AlertTriangle,
      error: AlertCircle,
    }[variant];

    // Variant specific classes
    const variantClasses = {
      info: "bg-info/10 text-info border-info/20",
      success: "bg-success/10 text-success border-success/20",
      warning: "bg-warning/10 text-warning border-warning/20",
      error: "bg-destructive/10 text-destructive border-destructive/20",
    };

    // Handle keyboard events
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        onClose(id);
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        aria-live={variant === "error" ? "assertive" : "polite"}
        className={cn(
          "flex w-full max-w-sm animate-scale-in rounded-lg border p-4 shadow-lg",
          "relative overflow-hidden backdrop-blur-sm",
          variantClasses[variant]
        )}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Progress bar for auto-dismiss */}
        {duration !== Infinity && (
          <div
            className={cn(
              "absolute bottom-0 left-0 h-1 bg-current opacity-20",
              {
                info: "bg-info",
                success: "bg-success",
                warning: "bg-warning",
                error: "bg-destructive",
              }[variant]
            )}
            style={{
              width: "100%",
              animation: `shrink ${duration}ms linear forwards`,
            }}
          />
        )}

        {/* Toast content */}
        <div className="flex items-start gap-3 w-full">
          <VariantIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <Typography variant="label" className="font-semibold">{title}</Typography>
            {description && (
              <BodySmall color="muted" className="mt-1">
                {description}
              </BodySmall>
            )}
            {action && (
              <div className="mt-3">{action}</div>
            )}
          </div>
          <button 
            type="button"
            onClick={() => onClose(id)}
            className="ml-auto -mx-1.5 -my-1.5 rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }
);
Toast.displayName = "Toast";

interface ToastContainerProps {
  position?: ToastPosition;
}

const ToastContainer = ({ position = "bottom-right" }: ToastContainerProps) => {
  const [toasts, setToasts] = React.useState<(ToastProps & { id: string })[]>([]);
  const positionClasses = {
    "top-right": "top-0 right-0 flex-col",
    "top-center": "top-0 left-1/2 -translate-x-1/2 flex-col",
    "top-left": "top-0 left-0 flex-col",
    "bottom-right": "bottom-0 right-0 flex-col-reverse",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 flex-col-reverse",
    "bottom-left": "bottom-0 left-0 flex-col-reverse",
  };

  // Create toast function
  const toast = React.useCallback((options: ToastOptions) => {
    const id = `toast-${Date.now()}`;
    const newToast = {
      ...options,
      id,
      position: options.position || position,
      onClose: (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      },
    };
    
    setToasts((prev) => [...prev, newToast]);
    return id;
  }, [position]);

  // Create a function to update a toast
  const updateToast = React.useCallback((id: string, options: Partial<ToastOptions>) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, ...options } : toast
      )
    );
  }, []);

  // Create a function to dismiss a toast
  const dismissToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // Create variant-specific toast functions
  const info = React.useCallback((options: Omit<ToastOptions, "variant">) => {
    return toast({ ...options, variant: "info" });
  }, [toast]);

  const success = React.useCallback((options: Omit<ToastOptions, "variant">) => {
    return toast({ ...options, variant: "success" });
  }, [toast]);

  const warning = React.useCallback((options: Omit<ToastOptions, "variant">) => {
    return toast({ ...options, variant: "warning" });
  }, [toast]);

  const error = React.useCallback((options: Omit<ToastOptions, "variant">) => {
    return toast({ ...options, variant: "error" });
  }, [toast]);

  // Export functions to use outside of component
  React.useEffect(() => {
    // @ts-ignore - we're adding to the window object
    window.toast = { toast, info, success, warning, error, update: updateToast, dismiss: dismissToast };
    return () => {
      // @ts-ignore
      delete window.toast;
    };
  }, [toast, info, success, warning, error, updateToast, dismissToast]);

  // Create portal for toast container
  return createPortal(
    <div
      className={cn(
        "fixed z-50 flex gap-3 p-4 max-h-screen overflow-hidden pointer-events-none",
        positionClasses[position]
      )}
    >
      {toasts.map((props) => (
        <div key={props.id} className="pointer-events-auto w-full max-w-sm">
          <Toast {...props} />
        </div>
      ))}
    </div>,
    document.body
  );
};

// Define custom hook to use toast
export const useToast = () => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  if (!mounted) {
    // Return mock functions when not mounted
    return {
      toast: () => "",
      info: () => "",
      success: () => "",
      warning: () => "",
      error: () => "",
      update: () => {},
      dismiss: () => {},
    };
  }
  
  return {
    toast: (options: ToastOptions) => (window as any).toast.toast(options),
    info: (options: Omit<ToastOptions, "variant">) => (window as any).toast.info(options),
    success: (options: Omit<ToastOptions, "variant">) => (window as any).toast.success(options),
    warning: (options: Omit<ToastOptions, "variant">) => (window as any).toast.warning(options),
    error: (options: Omit<ToastOptions, "variant">) => (window as any).toast.error(options),
    update: (id: string, options: Partial<ToastOptions>) => (window as any).toast.update(id, options),
    dismiss: (id: string) => (window as any).toast.dismiss(id),
  };
};

export { Toast, ToastContainer };

// Add keyframes for animation
const style = document.createElement('style');
style.textContent = `
@keyframes shrink {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
`;
document.head.appendChild(style);
