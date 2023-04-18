import { Link, Outlet, useLoaderData } from "react-router-dom";


function App() {
  const newPosts = useLoaderData()

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Link to="/Random">Let's try something new!</Link>

        <h1>Posts</h1>
        <ol>
          {newPosts}
        </ol>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
