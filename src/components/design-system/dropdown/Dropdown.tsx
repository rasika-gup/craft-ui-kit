
import * as React from "react";
import { cn } from "@/lib/utils";
import { Label, HelperText } from "../typography/Typography";
import { CheckCircle, AlertCircle, ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  id: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export const Dropdown = ({
  id,
  options,
  value,
  onChange,
  label,
  placeholder = "Select an option",
  helperText,
  error,
  success,
  disabled,
  required = false,
  size = "md",
  fullWidth = false,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(value || "");
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Update selected value when value prop changes
  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case "Enter":
      case "Space":
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case "Escape":
        setIsOpen(false);
        break;
      case "ArrowDown":
        if (!isOpen) {
          setIsOpen(true);
        } else {
          focusNextOption();
        }
        event.preventDefault();
        break;
      case "ArrowUp":
        if (!isOpen) {
          setIsOpen(true);
        } else {
          focusPrevOption();
        }
        event.preventDefault();
        break;
    }
  };

  // Find next focusable option
  const focusNextOption = () => {
    const currentIndex = options.findIndex((opt) => opt.value === selectedValue);
    let nextIndex = currentIndex + 1;
    
    // Skip disabled options
    while (
      nextIndex < options.length &&
      options[nextIndex].disabled
    ) {
      nextIndex++;
    }

    if (nextIndex < options.length) {
      const nextValue = options[nextIndex].value;
      handleSelectOption(nextValue);
    }
  };

  // Find previous focusable option
  const focusPrevOption = () => {
    const currentIndex = options.findIndex((opt) => opt.value === selectedValue);
    let prevIndex = currentIndex - 1;
    
    // Skip disabled options
    while (
      prevIndex >= 0 &&
      options[prevIndex].disabled
    ) {
      prevIndex--;
    }

    if (prevIndex >= 0) {
      const prevValue = options[prevIndex].value;
      handleSelectOption(prevValue);
    }
  };

  const handleSelectOption = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  // Find selected option label
  const selectedLabel = React.useMemo(() => {
    const option = options.find((opt) => opt.value === selectedValue);
    return option ? option.label : "";
  }, [selectedValue, options]);

  // Size variants
  const sizeClasses = {
    sm: "h-8 text-sm",
    md: "h-10 text-base",
    lg: "h-12 text-lg",
  };

  const buttonPaddingClasses = {
    sm: "px-2.5 py-1",
    md: "px-3 py-2",
    lg: "px-4 py-3",
  };

  // Status icon to show (error takes precedence over success)
  const statusIcon = error ? (
    <AlertCircle size={size === "sm" ? 16 : size === "md" ? 18 : 20} className="text-destructive" />
  ) : success ? (
    <CheckCircle size={size === "sm" ? 16 : size === "md" ? 18 : 20} className="text-success" />
  ) : null;

  return (
    <div className={cn("relative space-y-1.5", fullWidth && "w-full")}>
      {label && (
        <div className="flex items-center justify-between">
          <Label htmlFor={id}>
            {label}
            {required && <span className="ml-1 text-destructive">*</span>}
          </Label>
        </div>
      )}

      <div
        ref={dropdownRef}
        className={cn(
          "relative",
          fullWidth && "w-full",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <button
          id={id}
          type="button"
          className={cn(
            "flex items-center justify-between rounded-md border border-input bg-background",
            "w-full text-left focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-ring focus-visible:ring-offset-2",
            "transition-all duration-200 ease-in-out",
            buttonPaddingClasses[size],
            sizeClasses[size],
            error && "border-destructive focus-visible:ring-destructive",
            success && "border-success focus-visible:ring-success",
            disabled && "cursor-not-allowed",
            className
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${id}-options`}
          aria-labelledby={`${id}-label`}
          aria-invalid={!!error}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
        >
          <span className={cn(!selectedValue && "text-muted-foreground")}>
            {selectedLabel || placeholder}
          </span>
          <div className="flex items-center gap-1">
            {statusIcon}
            <ChevronDown 
              size={size === "sm" ? 16 : size === "md" ? 18 : 20} 
              className={cn("transition-transform duration-200", isOpen && "transform rotate-180")} 
            />
          </div>
        </button>

        {isOpen && (
          <div
            id={`${id}-options`}
            role="listbox"
            aria-labelledby={`${id}-label`}
            className={cn(
              "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border",
              "border-input bg-popover shadow-lg animate-fade-in",
              "divide-y divide-border/30"
            )}
          >
            <ul className="py-1">
              {options.map((option) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={selectedValue === option.value}
                  aria-disabled={option.disabled}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 cursor-pointer",
                    selectedValue === option.value
                      ? "bg-primary/10 text-primary"
                      : "text-popover-foreground",
                    option.disabled && "opacity-50 cursor-not-allowed",
                    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base",
                    !option.disabled && "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => !option.disabled && handleSelectOption(option.value)}
                >
                  <span>{option.label}</span>
                  {selectedValue === option.value && <Check size={size === "sm" ? 16 : size === "md" ? 18 : 20} />}
                </li>
              ))}
              {options.length === 0 && (
                <li className="px-3 py-2 text-muted-foreground">No options available</li>
              )}
            </ul>
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
};
