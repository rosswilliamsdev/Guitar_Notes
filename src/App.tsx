import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NewNotes from "./NewNotes";
import Library from "./Library";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewNotes" element={<NewNotes />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
