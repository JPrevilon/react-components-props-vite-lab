// App component
// Root component of the blog site
// Connects Header, About, and ArticleList components
// Imports blog data and passes it down as props

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blog from "../data/blog.js";

function App() {
  return (
    <div className="App">
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;
