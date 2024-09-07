import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NewNotes from "./NewNotes";
import Library from "./Library";
import Lessons from "./Lessons";
import Policy from "./Policy";
import StudentForm from "./StudentForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewNotes" element={<NewNotes />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/StudentForm" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
