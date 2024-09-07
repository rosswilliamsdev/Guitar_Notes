import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const NewNotes: React.FC = () => {
  const [date] = useState<string>(new Date().toLocaleDateString());
  const [studentName] = useState<string>("John Doe"); // Placeholder
  // const [studentId] = useState(1) //placeholder
  const [noteContent, setNoteContent] = useState<string>("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAttachments(Array.from(event.target.files));
    }
  };

  const handleYoutubeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("date", date);
    formData.append("studentName", studentName);
    formData.append("noteContent", noteContent);
    if (youtubeUrl) formData.append("youtubeUrl", youtubeUrl); // Only append if it exists

    attachments.forEach((file, index) => {
      formData.append(`attachments[${index}]`, file);
    });

    try {
      const response = await axios.post(
        "http://localhost:5058/api/LessonNotes",
        formData
      );
      console.log("Note saved:", response.data);
      alert("Notes saved successfully!");
    } catch (error) {
      console.error("Error saving note:", error);
      alert("Failed to save note.");
    }
  };



  const handleReset = () => {
    setNoteContent("");
    setAttachments([]);
    setYoutubeUrl("");
  };

  const renderYoutubeEmbed = () => {
    if (youtubeUrl) {
      const videoId = youtubeUrl.split("v=")[1]?.split("&")[0];
      return (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
    return null;
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-white rounded-xl">
        <div className="mb-4 flex items-center justify-between">
          <input
            type="text"
            value={date}
            readOnly
            className="border border-gray-300 p-2 rounded text-center w-32"
          />
          <h1 className="text-6xl font-bold text-center flex-grow mr-24">
            Notes
          </h1>
          <span className="text-xl text-gray-700">{studentName}</span>
        </div>

        <div className="mb-4">
          <ReactQuill
            value={noteContent}
            onChange={setNoteContent}
            className="h-64"
          />
        </div>
        <div className="mb-4 mt-12 w-2/4">
          <label className="block text-gray-700">Attachments</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
          <div>
            {attachments.length > 0 && (
              <ul>
                {attachments.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="mb-4 w-1/2">
          <label className="block text-gray-700">YouTube Link</label>
          <input
            type="text"
            value={youtubeUrl}
            onChange={handleYoutubeChange}
            placeholder="https://www.youtube.com/watch?v=XXXXXX"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <div className="mt-4">{renderYoutubeEmbed()}</div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-300 text-gray-700 py-2 px-8 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewNotes;
