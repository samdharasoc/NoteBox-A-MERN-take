import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";

  const [notes, setNotes] = useState([]);

  // Get all notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        const json = await response.json();
        setNotes(json);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add note
  const addNote = async (title, description, dueDate) => {
    try {
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, dueDate }),
      });

      const newNote = await response.json();
      setNotes((prev) => [...prev, newNote]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      setNotes(notes.filter((n) => n._id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  // Edit note
  const editNote = async (id, title, description, dueDate) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, dueDate }),
      });

      const updated = await response.json();

      setNotes((prev) =>
        prev.map((n) => (n._id === id ? updated.note : n))
      );
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
