export const API_ROUTES = {
  blogPosts: ({ slug, page, limit, featured, tags }: { slug?: string, page?: number, limit?: number, featured?: boolean, tags?: string[] }) => {
    const params = new URLSearchParams({
      ...(slug && { slug }),
      ...(page && { page: page.toString() }),
      ...(limit && { limit: limit.toString() }),
      ...(featured && { featured: featured.toString() }),
      ...(tags && { tags: tags.join(',') }),
    })
    return `/blogPosts?${params}`
  },
}