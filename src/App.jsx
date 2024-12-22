import { useEffect, useState } from "react";
import { ContextBlog, usePost } from "./Context/ContextBlog";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Heder";
import { Main } from "./Components/Main";
import { Archive } from "./Components/Archive";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <ContextBlog>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </ContextBlog>
    </section>
  );
}

<Footer />;

export default App;
