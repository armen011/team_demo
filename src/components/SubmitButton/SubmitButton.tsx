import { FC } from "react";
import "./SubmitButton.css";

export type SubmitButtonProps = {
  onClick: () => void;
  isValid: boolean;
  text: string | null | undefined;
  class1?:string;
  class2?:string;
};


const SubmitButton: FC<SubmitButtonProps> = ({
  onClick,
  isValid,
  text = "",
  class1="submit_button_enable",
  class2="submit_button_disable"
  

}) => {
  
  const handleClick = () => {
    if (isValid) {
      onClick();
    }
  };
  return (
    <button className={isValid ? class1: class2 } onClick={handleClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
