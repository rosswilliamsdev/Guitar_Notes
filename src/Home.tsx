import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Guitar Strategies</h1>
      <Link to="/">Home</Link>
      <Link to="/NewNotes">Create New Notes</Link>
      <Link to="/Login">Login Page</Link>
    </div>
  );
}

export default Home;
