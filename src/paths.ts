export const paths = {
  home: '/',
  mission: '/mission',
  contact: '/contact',
  blog: {
    index: '/blog',
    list: ({ page = 1, tags = [""] }: { page?: number, tags?: string[] } = {}) => `/blog/list/${page}/${tags.join("/")}`,
    post: (slug: string, anchor?: string) => `/blog/${slug}${anchor ? `#${anchor}` : ""}`,
    404: (slug: string) => `/blog/${slug}/404`,
  }
}