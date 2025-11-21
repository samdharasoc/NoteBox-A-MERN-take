import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const pastelBorder = (idx = 0) => {
  const pal = ['#FDE8F2','#E8FFF4','#E8F0FF','#F1E8FF','#FFF7E8'];
  return pal[idx % pal.length];
};

const NoteItem = ({ note, updateNote, index }) => {
  const { deleteNote } = useContext(noteContext);
  const borderColor = note.color || pastelBorder(index);

  return (
    <div className="w-72 bg-white rounded-2xl p-4 soft-card border" style={{ borderColor: `${borderColor}55`, borderWidth: 1 }}>
      <div className="flex justify-between items-start">
        <h5 className="text-lg font-semibold text-slate-800">{note.title}</h5>
        <div className="flex gap-2">
          <button onClick={() => deleteNote(note._id)} className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100">Delete</button>
          <button onClick={() => updateNote(note)} className="p-2 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100">Edit</button>
        </div>
      </div>

      <p className="text-sm text-slate-600 mt-3 break-words">{note.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-500">Due: {note.dueDate || '—'}</span>
        <span style={{background: borderColor}} className="inline-block w-3 h-3 rounded-full" />
      </div>
    </div>
  );
};

export default NoteItem;
