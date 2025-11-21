import React, { useContext, useEffect, useRef, useState } from "react";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const { notes, getNotes, editNote } = useContext(noteContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const ref = useRef();
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    edueDate: "",
  });

  const updateNote = (current) => {
    setNote({
      id: current._id,
      etitle: current.title,
      edescription: current.description,
      edueDate: current.dueDate,
    });

    ref.current.classList.remove("hidden");
  };

  const handleUpdate = () => {
    editNote(note.id, note.etitle, note.edescription, note.edueDate);
    ref.current.classList.add("hidden");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <AddNote />

      <h2 className="text-2xl mt-8 font-bold text-center">Your Notes</h2>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-6">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note._id} // FIXED
              note={note}
              updateNote={updateNote}
            />
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>

      {/* MODAL */}
      <div ref={ref} className="fixed inset-0 bg-black/40 hidden flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">Edit Note</h3>

          <input
            type="text"
            name="etitle"
            value={note.etitle}
            onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />

          <textarea
            name="edescription"
            value={note.edescription}
            onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />

          <input
            type="text"
            name="edueDate"
            value={note.edueDate}
            onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={() => ref.current.classList.add("hidden")}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Close
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-indigo-500 text-white rounded"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
