import { Container } from './styles';
import { PostData } from '../../domain/posts/post';
import { Header } from '../../components/Header';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <Container>
        {posts.map((post) => (
          <h2 key={post.slug}>{post.title}</h2>
        ))}
      </Container>
    </>
  );
}
