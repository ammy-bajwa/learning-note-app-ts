import { useState } from "react";
import { Note } from "./types";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleAddNoteForm = (event: React.FormEvent) => {
    event.preventDefault();

    const noteObj: Note = {
      text: inputText,
      id: Math.random() + inputText,
    };

    // const arr: number[] = [];
    // const updatedArr = arr;
    // updatedArr.push(1);

    // const updatedArrTwo = [...arr];
    // updatedArrTwo.push(2);
    // console.log(arr); // []

    // immutability
    // State of a component is immutable
    setNotes([...notes, noteObj]);
    // notes.push(noteObj);
    // setNotes(notes);
  };

  const handleNoteInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const inputText = event.target.value;
    setInputText(inputText);
  };

  const handleEdit = (id: string) => {
    console.log("handleEdit");
  };

  const handleDelete = (id: string) => {
    const updatedArr = notes.filter((note) => note.id !== id);
    setNotes(updatedArr);
  };

  return (
    <div>
      <form onSubmit={handleAddNoteForm}>
        <input type="text" required onChange={handleNoteInputChange} />
        <button type="submit">Add note</button>
      </form>
      {notes.map((note, i) => (
        <div>
          <h1>{note.text}</h1>
          <button onClick={() => handleEdit(note.id)}>Edit</button>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
