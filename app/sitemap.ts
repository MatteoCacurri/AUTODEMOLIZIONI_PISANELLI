import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rottamazione`,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ricambi`,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
