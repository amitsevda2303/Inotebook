import React, { useContext, useState } from "react";
import NoteContext from "../Context/Notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const MAX_TITLE_LENGTH = 50;
  const MAX_DESCRIPTION_LENGTH = 250;
  const MAX_TAG_LENGTH = 20;

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        background: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        marginTop: "100px",
      }}
    >
      <div className="container my-5" style={{ width: "90%" }}>
        <h2>Add A Note</h2>
        <form className="my-8">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Title"
              value={note.title}
              onChange={onchange}
              maxLength={MAX_TITLE_LENGTH}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Description"
              value={note.description}
              onChange={onchange}
              maxLength={MAX_DESCRIPTION_LENGTH}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Tag"
              value={note.tag}
              onChange={onchange}
              maxLength={MAX_TAG_LENGTH}
              required
            />
          </div>
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn"
            style={{ border: "1px solid #2b226c", color: "white" }}
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
