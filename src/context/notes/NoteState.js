import { json } from "react-router-dom";
import NoteContex from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesinitial = [  ]
  
//get all  Notes
const getNotes = async () => {
  //TO call api
  const response = await fetch(
    `${host}/api/notes/fetchallnotes`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMjgxYTc3YTJjMzM3MWVlYmQ2ZjMyIn0sImlhdCI6MTY4OTQyMjMyNX0.b8wcgeyQYaDCpeUffWJO7ptrMOuXULIKPi3VsBPmqFs",
      }
      
    }
  );
const json = await response.json();
  setNotes(json);
  
};



  //Add  Note
  const addNote = async (title, description, tag) => {
    //TO call api
  
    const response = await fetch(
      `${host}/api/notes/addnote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMjgxYTc3YTJjMzM3MWVlYmQ2ZjMyIn0sImlhdCI6MTY4OTQyMjMyNX0.b8wcgeyQYaDCpeUffWJO7ptrMOuXULIKPi3VsBPmqFs",
        },
        body: JSON.stringify({title,description,tag}),
      }
    );
     const note= await response.json();
     setNotes(notes.concat(note));
    
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    //api call

    const response = await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMjgxYTc3YTJjMzM3MWVlYmQ2ZjMyIn0sImlhdCI6MTY4OTQyMjMyNX0.b8wcgeyQYaDCpeUffWJO7ptrMOuXULIKPi3VsBPmqFs",
        },
        body: JSON.stringify({title,description,tag}),
      }
    );
    
    const json = await response.json();
 

  let newNotes = JSON.parse(JSON.stringify(notes))
    //logic  to  edit  in client
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element.id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  //Delete Note
  const deleteNote = async(id) => {
    //TO call api
    const response = await fetch(
      `${host}/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMjgxYTc3YTJjMzM3MWVlYmQ2ZjMyIn0sImlhdCI6MTY4OTQyMjMyNX0.b8wcgeyQYaDCpeUffWJO7ptrMOuXULIKPi3VsBPmqFs",
        },
      }
    );
    const json = response.json();
    console.log(json);
     


////-------///
    
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const [notes, setNotes] = useState(notesinitial);
  return (
    <NoteContex.Provider
      value={{ notes, setNotes,getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContex.Provider>
  );
};

export default NoteState;
