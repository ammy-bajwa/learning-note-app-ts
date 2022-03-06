import { FC } from "react";
import { Note as NoteType } from "../../types";
import CustomeButton from "../customeButton";

interface NoteProps {
  note: NoteType;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

const Note: FC<NoteProps> = ({
  note: { text, id },
  handleEdit,
  handleDelete,
}) => {
  const editClickHandler = () => handleEdit(id);
  const deleteClickHandler = () => handleDelete(id);

  return (
    <div key={id}>
      <h1>{text}</h1>
      <CustomeButton text="Edit" clickHandler={editClickHandler} />
      <CustomeButton text="Delete" clickHandler={deleteClickHandler} />
    </div>
  );
};

export default Note;
