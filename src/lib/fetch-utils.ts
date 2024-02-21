export const fetchWithHeaders = async <T>(route: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(`${process.env.CONTENT_API_BASE_URL}${route}`, {
    headers: {
      Authorization: `Token ${process.env.API_KEY}`,
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  const data = await res.json()
  return data
}