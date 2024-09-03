import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const StudentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5058/api/Students", {
        name,
        instrument,
      });

      alert(`Student added with ID: ${response.data}`);
      setName("");
      setInstrument("");
    } catch (error) {
      console.error("There was an error adding the student!", error);
      alert("Failed to add student.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white rounded-xl drop-shadow-2xl flex-col justify-center items-center h-screen">
        <h2 className="text-5xl font-bold text-center flex-grow m-24">
          Add New Student
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-bold text-lg">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-1/5 mb-4"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold text-lg">
              Instrument
            </label>
            <input
              type="text"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-1/5 mb-4"
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600"
            type="submit"
          >
            Add Student
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default StudentForm;
