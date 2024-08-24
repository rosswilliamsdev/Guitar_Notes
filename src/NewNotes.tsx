import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the CSS for the editor
import "./App.css";

const NewNotes: React.FC = () => {
  const [date, setDate] = useState<string>(new Date().toLocaleDateString());
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
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Create New Lesson Notes</h1>
      <div className="mb-4">
        <h3 className="block text-lg font text-gray-700">Lesson Date</h3>
        <input
          type="text"
          value={date}
          readOnly
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <h3 className="block text-lg text-gray-700">Lesson Content</h3>
        <ReactQuill
          value={noteContent}
          onChange={setNoteContent}
          className="h-64"
        />
      </div>
      <div className="mb-4">
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
      <div className="mb-4">
        <label className="block text-gray-700">YouTube Video URL</label>
        <input
          type="text"
          value={youtubeUrl}
          onChange={handleYoutubeChange}
          placeholder="https://www.youtube.com/watch?v=XXXXXX"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <div className="mt-4">{renderYoutubeEmbed()}</div>
      </div>
    </div>
  );
};

export default NewNotes;
