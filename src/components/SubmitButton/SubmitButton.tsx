import { FC } from "react";
import "./SubmitButton.css";

export type SubmitButtonProps = {
  onClick: () => void;
  isValid: boolean;
  text: string | null | undefined;
};

const SubmitButton: FC<SubmitButtonProps> = ({
  onClick,
  isValid,
  text = "",
}) => {
  const handleClick = () => {
    if (isValid) {
      onClick();
    }
  };
  return (
    <button className="submit_button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
