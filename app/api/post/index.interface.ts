import type { Category } from './index.const'

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  category: Category
  tags: Category[]
  heroImage?: string
}
