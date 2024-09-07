import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white rounded-xl drop-shadow-2xl">
        <div className="mb-4">
          <h1 className="text-4xl font-header font-bold mb-4">Welcome</h1>
          <p>Your most recent lesson notes are from: (lesson date)</p>
        </div>
        <section className="mb-4">
          <h3 className="text-xl font-header font-bold mb-4">
            Looking for inspiration?
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://digitaldreamdoor.com/pages/best_guitarsolo.html"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Greatest Rock Guitar Solos
              </a>
            </li>
            <li>
              <a
                href="https://digitaldreamdoor.com/pages/best_guitarriff.html"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Greatest Rock Riffs
              </a>
            </li>
            <li>
              <a
                href="https://digitaldreamdoor.com/pages/best_guit-solo.html"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Top Solos from The Greatest Guitarists
              </a>
            </li>
            <li>
              <a
                href="https://digitaldreamdoor.com/pages/best_basslines.html"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Greatest Rock Basslines
              </a>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
