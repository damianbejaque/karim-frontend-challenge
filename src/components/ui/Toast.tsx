import React, { useEffect } from 'react';
import { XIcon, AlertTriangleIcon } from '@/components/icons';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
  isVisible: boolean;
}

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path
      d="M14.6673 7.38674V8.00007C14.6665 9.43769 14.2009 10.8365 13.3395 11.988C12.4781 13.1394 11.2686 13.9817 9.89046 14.3893C8.51229 14.7969 7.03846 14.748 5.68946 14.2497C4.34046 13.7513 3.18967 12.8307 2.40723 11.6247C1.62479 10.4187 1.25381 8.99212 1.3509 7.55761C1.44798 6.12309 1.99766 4.75762 2.92304 3.66479C3.84842 2.57195 5.10101 1.81033 6.49271 1.4935C7.88441 1.17668 9.34197 1.32163 10.6473 1.90674M14.6673 2.66674L8.00065 9.34007L6.00065 7.34007"
      stroke="currentColor"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Toast({ 
  message, 
  type = 'info', 
  duration = 5000, 
  onClose, 
  isVisible 
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      IconComponent: CheckCircleIcon
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-600',
      IconComponent: AlertTriangleIcon
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: 'text-yellow-600',
      IconComponent: AlertTriangleIcon
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      IconComponent: CheckCircleIcon
    }
  };

  const style = typeStyles[type];
  const IconComponent = style.IconComponent;

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-50 animate-slide-in">
      <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border ${style.bg} ${style.border} shadow-lg sm:min-w-[360px] max-w-md`}>
        <div className={`shrink-0 mt-0.5 ${style.icon}`}>
          <IconComponent className={style.icon} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-normal leading-5 text-gray-700">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Cerrar"
        >
          <XIcon className="text-gray-500" size={16} />
        </button>
      </div>
    </div>
  );
}
