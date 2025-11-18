'use client';

import React from 'react';
import type { ButtonProps } from '@/types/portfolio';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  target,
  rel,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-full
    transition-all duration-300
    focus-ring
    disabled:opacity-50 disabled:cursor-not-allowed
    ${disabled ? 'pointer-events-none' : 'hover:scale-105 active:scale-95'}
  `;

  const variantClasses = {
    primary: `
      bg-accent hover:bg-accent-dark
      text-white
      shadow-md hover:shadow-lg
      transition-all duration-200
    `,
    secondary: `
      bg-white dark:bg-black
      text-accent dark:text-accent-light
      border border-neutral-200 dark:border-neutral-800
      hover:border-accent dark:hover:border-accent-light
      hover:bg-accent/5 dark:hover:bg-accent-light/5
    `,
    gradient: `
      gradient-bg
      text-white
      shadow-md hover:shadow-lg
      transition-all duration-200
    `,
    outline: `
      bg-transparent
      text-accent dark:text-accent-light
      border border-accent dark:border-accent-light
      hover:bg-accent dark:hover:bg-accent-light
      hover:text-white dark:hover:text-black
    `,
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-5 text-xl',
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;