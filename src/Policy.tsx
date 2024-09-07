import Footer from "./Footer";
import Navbar from "./Navbar";

function Policy() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white rounded-xl drop-shadow-2xl flex justify-center items-center h-screen">
        <iframe
          className="w-4/6 h-full border-0"
          src="https://docs.google.com/document/d/1pLgSXCPSHLQWlzdEOw5uolr7AI9Oa4FL4Oo5tg2UUb8/pub?embedded=true"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Policy;
