import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { etudes } from "./LibraryFiles";

function Library() {
  function listEntries<T extends string | undefined>(items: {
    [key: string]: T;
  }) {
    return Object.entries(items).map(([title, path]) => (
      <li key={title}>
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {title}
        </a>
      </li>
    ));
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white rounded-xl drop-shadow-2xl">
        <div className="mb-4">
          <h1 className="text-6xl font-header font-bold mb-10">Library</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="mb-4">
              <h3 className="text-2xl font-header font-bold text-left mb-2">
                Checklists
              </h3>
              <ul className="w-full text-left">
                <li>List of pdfs clickable to view/print</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-header font-bold text-left mb-2">
                Scales
              </h3>
              <ul className="w-full text-left">
                <li>List of pdfs clickable to view/print</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-header font-bold text-left mb-2">
                Solos
              </h3>
              <ul className="w-full text-left">
                <li>List of pdfs clickable to view/print</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-header font-bold text-left mb-2">
                Exercises
              </h3>
              <ul className="w-full text-left">
                <li>List of pdfs clickable to view/print</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-header font-bold text-left mb-2">
                Etudes
              </h3>
              <ul className="w-full text-left">{listEntries(etudes)}</ul>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-header font-bold text-left mb-2">
                Chords
              </h3>
              <ul className="w-full text-left">
                <li>List of pdfs clickable to view/print</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Library;
