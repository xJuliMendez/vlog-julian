export type Category = 'Thoughts' | 'Opinions' | 'Ideas' | 'Programming' | 'Tech' | 'Travel' | 'Other' | 'AI' | 'Music' | 'Books' | 'Movies' | 'TV Shows' | 'Games' | 'Other'

export const CategoryGradient: Record<Category, string> = {
  'Thoughts': 'from-blue-500 to-purple-500',
  'Opinions': 'from-purple-500 to-pink-500',
  'Ideas': 'from-pink-500 to-orange-500',
  'Programming': 'from-orange-500 to-red-500',
  'Tech': 'from-red-500 to-blue-500',
  'Travel': 'from-blue-500 to-purple-500',
  'Other': 'from-purple-500 to-pink-500',
  'AI': 'from-pink-500 to-orange-500',
  'Music': 'from-orange-500 to-red-500',
  'Books': 'from-red-500 to-blue-500',
  'Movies': 'from-blue-500 to-purple-500',
  'TV Shows': 'from-pink-500 to-orange-500',
  'Games': 'from-orange-500 to-red-500',
} as const
