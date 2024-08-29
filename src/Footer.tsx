import "./App.css";
import { useEffect, useState } from "react";

function Footer() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://zenquotes.io/api/random"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setQuote(data[0].q);
        setAuthor(data[0].a);
      })
      .catch((error) => {
        console.error("Error fetching the quote:", error);
        setQuote("Failed to load quote.");
      });
  }, []);

  return (
    <footer className="container mx-auto p-4 bg-white rounded-xl drop-shadow-2xl mt-4">
      <h1 className="text-2xl">{quote}</h1>
      <h1 className="text-lg">{author}</h1>
    </footer>
  );
}

export default Footer;
