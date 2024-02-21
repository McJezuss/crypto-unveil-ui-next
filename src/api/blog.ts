import { API_ROUTES } from "@/api-routes";
import { fetchWithHeaders } from "@/lib/fetch-utils";
import { Post } from "@/types/blog";

export interface GetAllPostsResponse {
  data: Post[]
  page: number
  numberOfPages: number
  availableTags: string[]
}

export interface GetAllPostsParams {
  page?: number
  limit?: number
  featured?: boolean
  tags?: string[]
}

export const getPosts = async ({ limit, page, featured, tags }: GetAllPostsParams = { limit: 4 }): Promise<GetAllPostsResponse> => {
  const data = await fetchWithHeaders<GetAllPostsResponse>(
    API_ROUTES.blogPosts({
      limit: limit,
      page: page,
      featured: featured,
      tags: tags
    }),
    {
      cache: "reload",
    }
  )

  return data;
};

export interface GetPostResponse {
  data: Post
}

export const getPostBySlug = async (slug: string): Promise<GetPostResponse> => {
  const data = await fetchWithHeaders<GetPostResponse>(
    API_ROUTES.blogPosts({ slug }),
    {
      next: {
        // 1 day
        revalidate: 86400
      }
    }
  );

  return data;
}