import { useEffect } from "react";
import { XIcon } from "@/components/icons";

export type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  message: string;
  subMessage?: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
  isVisible: boolean;
}

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path
      d="M7.41667 4.75V7.41667M7.41667 10.0833H7.42333M14.0833 7.41667C14.0833 11.0986 11.0986 14.0833 7.41667 14.0833C3.73477 14.0833 0.75 11.0986 0.75 7.41667C0.75 3.73477 3.73477 0.75 7.41667 0.75C11.0986 0.75 14.0833 3.73477 14.0833 7.41667Z"
      stroke="#79AA7A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function Toast({
  message,
  subMessage,
  type = "info",
  duration = 5000000,
  onClose,
  isVisible,
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
      bg: "bg-white",
      border: "border-gray-200",
      icon: "text-green-600",
      IconComponent: CheckCircleIcon,
    },
    error: {
      bg: "bg-white",
      border: "border-gray-200",
      icon: "text-error-500",
      IconComponent: CheckCircleIcon,
    },
    warning: {
      bg: "bg-white",
      border: "border-gray-200",
      icon: "text-warning-500",
      IconComponent: CheckCircleIcon,
    },
    info: {
      bg: "bg-white",
      border: "border-gray-200",
      icon: "text-brand-900",
      IconComponent: CheckCircleIcon,
    },
  };

  const style = typeStyles[type];
  const IconComponent = style.IconComponent;

  return (
    <div className="animate-slide-in fixed right-4 bottom-4 left-4 z-50 sm:right-6 sm:bottom-6 sm:left-auto">
      <div
        className={`flex items-start gap-3 rounded-lg border p-3 sm:gap-4 sm:p-4 ${style.bg} ${style.border} max-w-md shadow-lg sm:min-w-[360px]`}
      >
        <div
          className={`bg-success-100 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full`}
        >
          <IconComponent className={style.icon} />
        </div>
        <div className="flex-1">
          <p className="text-sm-medium text-brand-900">{message}</p>
          {subMessage && (
            <p className="text-xs-medium font-weight-regular mt-1 text-gray-600">{subMessage}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 rounded-full p-1 transition-colors hover:bg-gray-100"
          aria-label="Cerrar"
        >
          <XIcon className="text-gray-500" size={16} />
        </button>
      </div>
    </div>
  );
}
