import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";
import "./TextInput.css";

export type TextInputProps = {
  placeholder?: string | null;
  value: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  name: string;
};

const TextInput: FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
  type = "text",
  name,
}) => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    onChange(value);
  };

  return (
    <div className="base_input_group">
      <input
        id={name}
        onChange={handleInputChange}
        value={value}
        type={type}
        className={value.length > 0 ? "base_input_filled" : ""}
      />
      <label htmlFor={name}>{placeholder}</label>
    </div>
  );
};

export default TextInput;
