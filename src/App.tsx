import { useState } from "react";
import Note from "./componets/note";
import NoteForm from "./componets/noteForm";
import { Note as NoteType } from "./types";

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [selectedNoteId, setSelectedNoteId] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [resetStates, setResetStates] = useState<any>(null);

  const handleAddNoteForm = (event: React.FormEvent) => {
    event.preventDefault();

    const noteObj: NoteType = {
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
    if (resetStates) {
      resetStates();
    }
  };

  const handleEdit = (id: string) => {
    setIsEditing(true);
    // Get the note which is editing
    // Input field text changed to the edited note
    for (let index = 0; index < notes.length; index++) {
      const note = notes[index];
      if (note.id === id) {
        setInputText(note.text);
        setSelectedNoteId(note.id);
        break;
      }
    }
    // button text updated from add to update
    // Instead of adding new note it should update the note
  };

  const handleDelete = (id: string) => {
    const updatedArr = notes.filter((note) => note.id !== id);
    setNotes(updatedArr);
  };

  const handleUpdateNote: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const updatedArr = notes.map((note) => {
      if (note.id === selectedNoteId) {
        note.text = inputText;
      }
      return note;
    });

    setNotes(updatedArr);

    if (resetStates) {
      resetStates();
    }
  };

  return (
    <div>
      <NoteForm
        onSubmitHandler={isEditing ? handleUpdateNote : handleAddNoteForm}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setSelectedNoteId={setSelectedNoteId}
        inputText={inputText}
        setInputText={setInputText}
        setResetStates={setResetStates}
      />
      {notes.map((note, i) => (
        <Note note={note} handleEdit={handleEdit} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
