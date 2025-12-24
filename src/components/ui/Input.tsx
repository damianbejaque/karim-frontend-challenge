import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium leading-5 text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm font-normal leading-5 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent ${
            error ? 'border-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
