import { getPosts } from '@/api/blog'
import { paths } from '@/paths'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // Get Blog data
  const { data } = await getPosts({ limit: 1000 })

  const listCount = Math.ceil(data.length / 4);
  const lists = Array.from({ length: listCount }, (_, i) => ({
    url: `${process.env.WEBSITE_URL}${paths.blog.list({ page: i + 1 })}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  const posts = data.map((post) => ({
    url: `${process.env.WEBSITE_URL}${paths.blog.post(post.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as any,
    priority: 1,
  }))

  return [
    {
      url: `${process.env.WEBSITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.WEBSITE_URL}${paths.contact}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${process.env.WEBSITE_URL}${paths.mission}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.WEBSITE_URL}${paths.blog.index}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...lists,
    ...posts,
  ]
}