import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //Get All Note
  let getNote = async () => {

    const response = await fetch(`${import.meta.env.VITE_ALLNOTES}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setNotes(json)
  };

  //Add Note
  let addNote = async (title, description, tag) => {
    //Api call 
    const response = await fetch(`${import.meta.env.VITE_ADDNOTES}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Delete Note
  let deleteNote = async (id) => {
    //Api Call 
    const response = await fetch(`${import.meta.env.VITE_DELETENOTES}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },

    });
    const json = await response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  };

  //Edit a Note
  let editNote = async (id, title, description, tag) => {
    //Api Call
    const response = await fetch(`${import.meta.env.VITE_UPDATENOTES}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();


    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit to client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
export default NoteState;
