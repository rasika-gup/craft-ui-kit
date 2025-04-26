
import React from 'react';
import { cn } from '@/lib/utils';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'display-1' | 'display-2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 
            'body-lg' | 'body' | 'body-sm' | 'caption' | 'label' | 'helper';
  as?: React.ElementType;
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'destructive';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  htmlFor?: string; // Added htmlFor prop to support label elements
}

/**
 * Typography component for consistent text styling across the application.
 * 
 * @example
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="body">Regular body text</Typography>
 * <Typography variant="caption" color="muted">A small caption</Typography>
 */
export const Typography = ({
  children,
  variant = 'body',
  as,
  color = 'default',
  align = 'left',
  truncate = false,
  htmlFor,
  className,
  ...props
}: TypographyProps) => {
  // Define the mapping between variants and HTML elements
  const variantElementMap: Record<string, React.ElementType> = {
    'display-1': 'h1',
    'display-2': 'h1',
    'h1': 'h1',
    'h2': 'h2',
    'h3': 'h3',
    'h4': 'h4',
    'h5': 'h5',
    'h6': 'h6',
    'body-lg': 'p',
    'body': 'p',
    'body-sm': 'p',
    'caption': 'span',
    'label': 'label',
    'helper': 'span',
  };

  // Define color classes
  const colorClasses = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    primary: 'text-primary',
    success: 'text-success',
    warning: 'text-warning',
    destructive: 'text-destructive',
  };

  // Define alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Define variant-specific styles
  const variantClasses = {
    'display-1': 'text-5xl md:text-6xl font-bold tracking-tight',
    'display-2': 'text-4xl md:text-5xl font-bold tracking-tight',
    'h1': 'text-3xl md:text-4xl font-bold',
    'h2': 'text-2xl md:text-3xl font-semibold',
    'h3': 'text-xl md:text-2xl font-semibold',
    'h4': 'text-lg md:text-xl font-semibold',
    'h5': 'text-base md:text-lg font-medium',
    'h6': 'text-sm md:text-base font-medium',
    'body-lg': 'text-lg leading-7',
    'body': 'text-base leading-6',
    'body-sm': 'text-sm leading-5',
    'caption': 'text-sm',
    'label': 'text-sm font-medium',
    'helper': 'text-xs',
  };

  // Determine the component to render
  const Component = as || variantElementMap[variant] || 'span';

  return (
    <Component
      className={cn(
        variantClasses[variant],
        colorClasses[color],
        alignClasses[align],
        truncate && 'truncate',
        className
      )}
      {...(htmlFor ? { htmlFor } : {})}
      {...props}
    >
      {children}
    </Component>
  );
};

// Heading components
export const Display1 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="display-1" {...props} />;

export const Display2 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="display-2" {...props} />;

export const Heading1 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h1" {...props} />;

export const Heading2 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h2" {...props} />;

export const Heading3 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h3" {...props} />;

export const Heading4 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h4" {...props} />;

export const Heading5 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h5" {...props} />;

export const Heading6 = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="h6" {...props} />;

// Text components
export const BodyLarge = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="body-lg" {...props} />;

export const Body = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="body" {...props} />;

export const BodySmall = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="body-sm" {...props} />;

export const Caption = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="caption" {...props} />;

export const Label = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="label" {...props} />;

export const HelperText = (props: Omit<TypographyProps, 'variant'>) => 
  <Typography variant="helper" {...props} />;
