'use client';

import React from 'react';
import { ButtonProps } from '@/types/portfolio';

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
      bg-gradient-to-r from-purple-500 to-purple-600
      text-white
      shadow-lg hover:shadow-xl
      hover:from-purple-600 hover:to-purple-700
    `,
    secondary: `
      bg-white dark:bg-black
      text-purple-600 dark:text-purple-400
      border-2 border-purple-200 dark:border-purple-800
      hover:border-purple-300 dark:hover:border-purple-700
      hover:bg-purple-50 dark:hover:bg-purple-950
    `,
    gradient: `
      gradient-bg
      text-white
      shadow-lg hover:shadow-xl
      hover:opacity-90
    `,
    outline: `
      bg-transparent
      text-purple-600 dark:text-purple-400
      border-2 border-purple-500
      hover:bg-purple-500 hover:text-white
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