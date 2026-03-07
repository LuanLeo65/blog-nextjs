import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";

export default async function Home() {
  const posts = await getAllPosts('sort=id:desc&pagination[start]=0&pagination[limit]=30');

  return (
    <HomePage posts={posts}></HomePage>
  );
}
