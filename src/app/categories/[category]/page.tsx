import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "@/domain/posts/post";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function Category({ params }: Props) {
  const { category } = await params;
  const urlQuery = `sort=id:desc&pagination[start]=0&pagination[limit]=30&filters[category][name][$eqi]=${category}`;
  const posts: PostData[] = await getAllPosts(urlQuery);

  return <HomePage posts={posts} category={category} />;
}
