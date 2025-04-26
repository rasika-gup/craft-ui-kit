
import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../typography/Typography";
import { HelperText } from "../typography/Typography";
import { CheckCircle, AlertCircle, Info } from "lucide-react";

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  required?: boolean;
  id: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      success,
      startIcon,
      endIcon,
      size = "md",
      fullWidth = false,
      required = false,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    // Size variants
    const sizeClasses = {
      sm: "h-8 px-2 text-sm",
      md: "h-10 px-3 text-base",
      lg: "h-12 px-4 text-lg",
    };

    // Custom padding when icons are present
    const paddingWithIcons = {
      start: startIcon ? (size === "sm" ? "pl-7" : size === "md" ? "pl-9" : "pl-11") : "",
      end: endIcon || error || success ? (size === "sm" ? "pr-7" : size === "md" ? "pr-9" : "pr-11") : "",
    };

    // Icon size based on input size
    const iconSize = size === "sm" ? 16 : size === "md" ? 18 : 20;

    // Status icon to show (error takes precedence over success)
    const statusIcon = error ? (
      <AlertCircle size={iconSize} className="text-destructive" />
    ) : success ? (
      <CheckCircle size={iconSize} className="text-success" />
    ) : null;

    return (
      <div className={cn("space-y-1.5", fullWidth && "w-full")}>
        {label && (
          <div className="flex items-center justify-between">
            <Label htmlFor={id}>
              {label}
              {required && <span className="ml-1 text-destructive">*</span>}
            </Label>
          </div>
        )}
        <div className={cn("relative", fullWidth && "w-full")}>
          {startIcon && (
            <div className="absolute left-0 inset-y-0 flex items-center pl-2.5">
              {startIcon}
            </div>
          )}
          <input
            id={id}
            className={cn(
              "flex rounded-md border border-input bg-background ring-offset-background",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "transition-colors duration-200",
              sizeClasses[size],
              paddingWithIcons.start,
              paddingWithIcons.end,
              error && "border-destructive focus-visible:ring-destructive",
              success && "border-success focus-visible:ring-success",
              fullWidth && "w-full",
              className
            )}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={`${id}-description`}
            ref={ref}
            required={required}
            {...props}
          />
          {(endIcon || statusIcon) && (
            <div className="absolute right-0 inset-y-0 flex items-center pr-2.5">
              {statusIcon || endIcon}
            </div>
          )}
        </div>
        {(helperText || error) && (
          <div id={`${id}-description`}>
            <HelperText color={error ? "destructive" : "muted"}>
              {error || helperText}
            </HelperText>
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
