import { FC, MouseEventHandler } from "react";

interface CustomeButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

const CustomeButton: FC<CustomeButtonProps> = ({
  text,
  clickHandler,
  type,
}) => {
  return (
    <button type={type} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default CustomeButton;
