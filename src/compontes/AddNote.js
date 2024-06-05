import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import { useState } from "react";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    })
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add Note</h2>

      <form className="my-3">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={note.title}
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="description">Desrciption</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter Description"
            onChange={onChange}
            value={note.description}
            minLength={5}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Enter Description"
            onChange={onChange}
            value={note.tag}
            minLength={5}
            required
          />
        </div>
        <button
          disabled={note.title.length<5||note.description.length<5}
          type="submit"
          className="btn btn-primary my-2"
          onClick={handleclick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
