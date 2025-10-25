// components/ui/FormComponents.tsx
import React from "react";

// Input Component
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    {...props}
    className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ${className}`}
  />
));

// Textarea Component
export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    {...props}
    className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ${className}`}
  />
));

// Select Component
// Updated Select Component
export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { placeholder?: string }
>(({ className, children, placeholder, ...props }, ref) => (
  <select
    ref={ref}
    {...props}
    className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ${className}`}
    defaultValue=""
  >
    {placeholder && (
      <option value="" disabled hidden>
        {placeholder}
      </option>
    )}
    {children}
  </select>
));


// Button Component
export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => (
  <button
    {...props}
    className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-transform duration-200 hover:scale-105 ${className}`}
  >
    {children}
  </button>
);
