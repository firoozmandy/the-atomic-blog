import { faker } from "@faker-js/faker";
import { createContext, useContext, useMemo, useState } from "react";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const Context = createContext();

function ContextBlog({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      searchQuery,
      setSearchQuery,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
    };
  }, [searchQuery, searchedPosts]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function usePost() {
  const context = useContext(Context);
  if (context === undefined) throw new Error("cheked the context gogoly");
  return context;
}

export { ContextBlog, usePost };
