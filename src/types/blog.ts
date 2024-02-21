export interface GetPostsResponse {
  data: Post[]
}

export interface GetPostResponse {
  data: Post | undefined
}

export interface Post {
  id: string
  title: string
  slug: string
  previewContent: string
  content: string
  coverImage: string
  coverImageUrl: string
  tags: string[]
  featured?: boolean
  pinned?: boolean
  createdAt: string
  updatedAt: string
}