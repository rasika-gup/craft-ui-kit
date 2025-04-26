
import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from "lucide-react";
import { Body, Typography } from "../typography/Typography";

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertBannerProps {
  title?: string;
  children: React.ReactNode;
  variant?: AlertVariant;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const AlertBanner = React.forwardRef<HTMLDivElement, AlertBannerProps>(
  (
    {
      title,
      children,
      variant = "info",
      icon,
      dismissible = false,
      onDismiss,
      action,
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const [dismissed, setDismissed] = React.useState(false);

    // Variant icons
    const VariantIcon = React.useMemo(() => {
      if (icon) return null;
      return {
        info: Info,
        success: CheckCircle,
        warning: AlertTriangle,
        error: AlertCircle,
      }[variant];
    }, [icon, variant]);

    // Variant specific classes
    const variantClasses = {
      info: "bg-info/10 text-info border-info",
      success: "bg-success/10 text-success border-success",
      warning: "bg-warning/10 text-warning border-warning",
      error: "bg-destructive/10 text-destructive border-destructive",
    };

    // Handle dismiss
    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    if (dismissed) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "rounded-md border-l-4 p-4 animate-fade-in",
          variantClasses[variant],
          fullWidth ? "w-full" : "max-w-xl",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          {/* Icon */}
          {(icon || VariantIcon) && (
            <div className="flex-shrink-0 mt-0.5">
              {icon || (VariantIcon && <VariantIcon className="h-5 w-5" />)}
            </div>
          )}

          {/* Content */}
          <div className="flex-1">
            {title && (
              <Typography variant="label" className="font-semibold mb-1">
                {title}
              </Typography>
            )}
            <div className={title ? "mt-1" : ""}>
              {typeof children === "string" ? <Body>{children}</Body> : children}
            </div>
            {action && <div className="mt-3">{action}</div>}
          </div>

          {/* Dismiss button */}
          {dismissible && (
            <button
              type="button"
              aria-label="Dismiss"
              onClick={handleDismiss}
              className="flex-shrink-0 ml-3 -mr-1 -mt-1 p-1 rounded-md hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

AlertBanner.displayName = "AlertBanner";
