import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      const titles = data.map((post) => post.title);
      const newPosts = titles.map((title, index) => <li> {title} <button><Link to={"/post/" + (index+1).toString()}>Go to post!{index+1}</Link> </button> </li>);
      setPosts(newPosts);
    }

    fetchPosts();
  }, []);

  return (
    <>
    <Link to="/Random">Let's try something new!</Link>
    <h1>Posts</h1>
    <ol>
      {posts}
    </ol>
    </>
  );
}

export default App;
