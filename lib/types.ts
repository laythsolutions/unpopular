// Article Types

export type ArticleCategory = 'moment' | 'mirror' | 'current' | 'stand'

export interface Article {
  id: string | number
  title: string
  excerpt: string
  content: string
  poem: Poem
  category: ArticleCategory
  date: string
  readTime: string
  tags: string[]
}

export interface Poem {
  title?: string
  lines: string[]
  author?: string
}

// Subscription Types

export type SubscriptionPlan = 'digital' | 'print' | 'founding'

export interface SubscriptionTier {
  id: SubscriptionPlan
  name: string
  price: {
    monthly?: number
    yearly: number
  }
  description: string
  features: string[]
  popular?: boolean
  limited?: boolean
}

// Issue Types

export interface Issue {
  id: string | number
  title: string
  subtitle: string
  season: string
  year: string
  description: string
  articles: number
  pages: number
  price: number
  coverColor?: string
  upcoming?: boolean
}

// Product Types

export type ProductCategory = 'magazines' | 'apparel' | 'accessories' | 'prints'

export interface Product {
  id: string | number
  name: string
  price: number
  description: string
  type?: string
  images: string[]
  category: ProductCategory
  inStock: boolean
}

// Contact Types

export type ContactSubject = 'general' | 'subscription' | 'order' | 'feedback' | 'press' | 'other'

export interface ContactForm {
  name: string
  email: string
  subject: ContactSubject
  message: string
}
