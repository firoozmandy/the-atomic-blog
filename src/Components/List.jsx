import { usePost } from "../Context/ContextBlog";
import Test from "../Test";

function List() {
  const { posts } = usePost();

  return (
    <>
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
    <Test />
    </>
  );
}

export { List };
