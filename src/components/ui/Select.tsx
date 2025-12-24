import React, { forwardRef } from 'react';
import { ChevronDownIcon } from '@/components/icons';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium leading-5 text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm font-normal leading-5 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-900 focus:border-transparent pr-10 ${
              error ? 'border-red-500' : ''
            } ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDownIcon className="text-gray-500" />
          </div>
        </div>
        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
