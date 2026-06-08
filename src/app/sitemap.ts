import { MetadataRoute } from 'next'
import { dialectMarkers } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mediamafias.com' // Domain must match GSC exactly

  // Core Pages
  const coreRoutes = [
    '',
    '/about',
    '/analysis',
    '/partner',
    '/create',
    '/technology'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Dialect Pages
  const dialectRoutes = dialectMarkers.map((marker) => {
    const slug = marker.name.toLowerCase().replace(/[\s\(\)]+/g, "-").replace(/-+$/, "")
    return {
      url: `${baseUrl}/radio/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9, // High priority for long-tail SEO
    }
  })

  return [...coreRoutes, ...dialectRoutes]
}
