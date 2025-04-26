import React from 'react';
import { siGithub } from 'simple-icons';

export interface GitHubIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon (width and height)
   * @default 24
   */
  size?: number;
  /**
   * Optional title for accessibility
   * @default 'GitHub'
   */
  title?: string;
}

export const GitHubIcon = React.forwardRef<SVGSVGElement, GitHubIconProps>(
  ({ size = 24, className = '', title = 'GitHub', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        role="img"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-labelledby={title ? 'github-icon-title' : undefined}
        {...props}
      >
        {title && <title id="github-icon-title">{title}</title>}
        <path d={siGithub.path} />
      </svg>
    );
  }
);

GitHubIcon.displayName = 'GitHubIcon';

export default GitHubIcon; 