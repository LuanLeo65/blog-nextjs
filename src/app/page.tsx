import { SITE_NAME } from "@/config/app-config";
import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { Metadata } from "next";

export default async function Home() {
  const posts = await getAllPosts('sort=id:desc&pagination[start]=0&pagination[limit]=30');

  return (
    <HomePage posts={posts}></HomePage>
  );
}

export const metadata: Metadata = {
  title:`${SITE_NAME}`,
  description: 'Site de assuntos tecnologicos'

}
