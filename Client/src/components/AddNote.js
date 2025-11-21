import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", dueDate: "" });

  const handleClick = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return;

    addNote(note.title, note.description, note.dueDate);
    setNote({ title: "", description: "", dueDate: "" });
  };

  const onChange = (e) =>
    setNote({ ...note, [e.target.name]: e.target.value });

  return (
    <div className="bg-white rounded-2xl p-6 soft-card mt-6 mx-auto max-w-3xl">
      <h3 className="text-lg font-semibold text-slate-800">Add a new note</h3>

      <div className="mt-4 grid gap-3">
        <input
          name="title"
          value={note.title}
          onChange={onChange}
          placeholder="Title"
          className="w-full p-3 rounded-lg border"
        />

        <textarea
          name="description"
          value={note.description}
          onChange={onChange}
          placeholder="Description"
          className="w-full p-3 rounded-lg border"
          rows="3"
        />

        <input
          name="dueDate"
          value={note.dueDate}
          onChange={onChange}
          placeholder="Due Date"
          className="w-full p-3 rounded-lg border"
        />
      </div>

      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700"
      >
        Add note
      </button>
    </div>
  );
};

export default AddNote;
