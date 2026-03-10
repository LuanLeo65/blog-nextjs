import { Post } from "@/containers/Post";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { getPost } from "@/data/posts/get-post";
import { getTotalPosts } from "@/data/posts/get-total-post";
import { Props } from "@/domain/posts/post";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/config/app-config";
import { removeHtml } from "@/utils/remove-html";

export default async function DynamicPost({ params }: Props) {
  const { slug } = await params;
  const post = await getOnePost(slug);

  return <Post post={post} />;
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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const post = await getOnePost(slug);

  return {
    title: `${post.title} - ${SITE_NAME}`,
    description: removeHtml(post.content).slice(0, 150),
  };
}
