import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Lessons() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white rounded-xl drop-shadow-2xl">
        <div className="mb-4 items-center">
          <h1 className="text-6xl font-header font-bold mb-10">Lessons</h1>
          <ul className="flex items-center justify-between">
            <li>
              <a>Lesson date</a>
            </li>
            <li>
              <a>Lesson date</a>
            </li>
            <li>
              <a>Lesson date</a>
            </li>
            <li>
              <a>Lesson date</a>
            </li>
            <li>
              <a>Lesson date</a>
            </li>
            <li>
              <a>Lesson date</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lessons;
