import {
  FC,
  FormEventHandler,
  Dispatch,
  useEffect,
  SetStateAction,
} from "react";
import CustomeButton from "../customeButton";

interface NoteFormProps {
  isEditing: boolean;
  onSubmitHandler: FormEventHandler<HTMLFormElement>;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  setSelectedNoteId: Dispatch<SetStateAction<string>>;
  setResetStates: any;
}

const NoteForm: FC<NoteFormProps> = ({
  onSubmitHandler,
  isEditing,
  setIsEditing,
  setSelectedNoteId,
  inputText,
  setInputText,
  setResetStates,
}) => {
  const resetStates = () => {
    setIsEditing(false);
    setInputText("");
    setSelectedNoteId("");
  };
  useEffect(() => {
    setResetStates(() => resetStates);
  }, []);

  const handleNoteInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const inputText = event.target.value;
    setInputText(inputText);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        required
        onChange={handleNoteInputChange}
        placeholder="Please add text here"
        value={inputText}
      />
      <CustomeButton
        text={isEditing ? "Update Note" : "Add note"}
        type="submit"
      />
      {isEditing && <CustomeButton text="Cancel" clickHandler={resetStates} />}
    </form>
  );
};

export default NoteForm;
