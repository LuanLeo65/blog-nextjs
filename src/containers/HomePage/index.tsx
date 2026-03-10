import { PostData } from "@/domain/posts/post";
import { Container, Category } from "./styles";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { PostCard } from "@/components/PostCard";
import { Footer } from "@/components/Footer";


export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}

