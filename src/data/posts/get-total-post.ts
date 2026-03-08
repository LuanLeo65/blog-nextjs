import { POSTS_URL } from "@/config/app-config";
import { PostMeta } from "@/domain/posts/post";
import { fetchJsonMeta } from "@/utils/fetch-json";

export const getTotalPosts = async (query = ''): Promise<PostMeta> => {
  const url = `${POSTS_URL}&${query}`
  const posts = await fetchJsonMeta<PostMeta>(url)
  return posts
}
