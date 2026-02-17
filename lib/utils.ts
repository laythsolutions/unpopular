// Utility Functions

/**
 * Format a date string to a readable format
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Calculate read time based on word count
 */
export function calculateReadTime(wordCount: number): string {
  const wordsPerMinute = 200
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

/**
 * Truncate text to a specified length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Slugify a string for URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Get category display name
 */
export function getCategoryName(category: string): string {
  const names: Record<string, string> = {
    moment: 'The Moment',
    mirror: 'The Mirror',
    current: 'The Current',
    stand: 'The Stand',
  }
  return names[category] || category
}

/**
 * Get badge color class for category
 */
export function getCategoryBadge(category: string): string {
  const badges: Record<string, string> = {
    moment: 'badge--moment',
    mirror: 'badge--mirror',
    current: 'badge--current',
    stand: 'badge--stand',
  }
  return badges[category] || ''
}

/**
 * Format price with currency
 */
export function formatPrice(price: number, currency: string = '$'): string {
  return `${currency}${price}`
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Generate a random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Check if code is running on the server
 */
export const isServer = typeof window === 'undefined'

/**
 * Check if code is running on the client
 */
export const isClient = typeof window !== 'undefined'
