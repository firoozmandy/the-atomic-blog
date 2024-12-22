import { usePost } from "../Context/ContextBlog";

function Results() {
  const { posts } = usePost();
  return <p>🚀 {posts.length} atomic posts found</p>;
}
export { Results };
