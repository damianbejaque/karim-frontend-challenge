type BadgeVariant = "pending" | "completed" | "rejected";

interface BadgeProps {
  variant: BadgeVariant;
  label: string;
}

const variantStyles = {
  pending: {
    bg: "bg-warning-50",
    text: "text-warning-700",
    dotColor: "#F79009", // warning-500
  },
  completed: {
    bg: "bg-success-50",
    text: "text-success-700",
    dotColor: "#8AB58B", // success-500
  },
  rejected: {
    bg: "bg-error-50",
    text: "text-error-700",
    dotColor: "#F04438", // error-500
  },
};

export default function StatusBadge({ variant, label }: BadgeProps) {
  const styles = variantStyles[variant];

  return (
    <div className={`${styles.bg} inline-flex items-center gap-1.5 rounded-2xl px-2 py-0.5`}>
      <div className="relative h-2 w-2">
        <svg width="6" height="6" viewBox="0 0 6 6" className="absolute top-px left-px">
          <circle cx="3" cy="3" r="3" fill={styles.dotColor} />
        </svg>
      </div>
      <span className={`text-xs leading-4.5 font-normal ${styles.text}`}>{label}</span>
    </div>
  );
}
