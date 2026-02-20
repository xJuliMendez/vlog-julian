export type Category = 'Reflexiones' | 'Opiniones' | 'Ideas' | 'Programación' | 'Tecnología' | 'Viajes' | 'IA' | 'Música' | 'Libros' | 'Películas' | 'Series de TV' | 'Videojuegos' | 'Otros'

export const CategoryGradient: Record<Category, string> = {
  'Reflexiones': 'from-blue-500 to-purple-500',
  'Opiniones': 'from-purple-500 to-pink-500',
  'Ideas': 'from-pink-500 to-orange-500',
  'Programación': 'from-orange-500 to-red-500',
  'Tecnología': 'from-red-500 to-blue-500',
  'Viajes': 'from-blue-500 to-purple-500',
  'Otros': 'from-purple-500 to-pink-500',
  'IA': 'from-pink-500 to-orange-500',
  'Música': 'from-orange-500 to-red-500',
  'Libros': 'from-red-500 to-blue-500',
  'Películas': 'from-blue-500 to-purple-500',
  'Series de TV': 'from-pink-500 to-orange-500',
  'Videojuegos': 'from-orange-500 to-red-500',
} as const
