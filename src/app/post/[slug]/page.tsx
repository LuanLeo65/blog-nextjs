import { getAllPosts } from "@/data/posts/get-all-posts";
import { getPost } from "@/data/posts/get-post";
import { getTotalPosts } from "@/data/posts/get-total-post";
import { Props } from "@/domain/posts/post";
import { notFound } from "next/navigation";

export default async function DynamicPost({ params }: Props) {
  const { slug } = await params;
  const post = await getOnePost(slug);

  return (
    <>
      <p>{post.title}</p>
      <p dangerouslySetInnerHTML={{__html: post.content}} />
    </>
  );
}

export async function generateStaticParams() {
  const countData = await getTotalPosts("pagination[pageSize]=1");

  const total = countData.pagination.total;
  const posts = await getAllPosts(
    `fields[0]=slug&pagination[pageSize]=${total}`,
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const getOnePost = async (slug: string) => {
  const posts = await getPost(slug);

  const post = posts[0];

  if (!post) {
    notFound();
  }

  return post;
};
