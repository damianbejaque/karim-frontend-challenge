/**
 * Format a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'COP')
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: string = 'COP'): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format a date
 * @param date - The date to format
 * @param format - The format style ('short' | 'medium' | 'long')
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  format: 'short' | 'medium' | 'long' = 'medium'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = format === 'short'
    ? { month: 'short', day: 'numeric', year: 'numeric' }
    : format === 'long'
    ? { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
    : { month: 'long', day: 'numeric', year: 'numeric' };

  return new Intl.DateTimeFormat('es-CO', options).format(dateObj);
}

/**
 * Truncate text with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Generate initials from a name
 * @param name - The full name
 * @returns Initials (max 2 characters)
 */
export function getInitials(name: string): string {
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

