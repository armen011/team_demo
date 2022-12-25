import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";
import "./TextInput.css";
import { useTranslation } from "react-i18next";

export type TextInputProps = {
  placeholder?: string | null;
  value: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  name: string;
  show?: string;
  toggle?: () => void;
  inputError?: {
    email: boolean,
    fullName: boolean,
    userName: boolean,
    password: boolean
  }
};

const TextInput: FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
  type = "text",
  name,
  show,
  toggle,
  inputError,
}) => {
  const { t } = useTranslation();
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    onChange(value);
  };
  let errorCondition = false;
  if (inputError){
    errorCondition = inputError[name as keyof typeof inputError]
  }


  return (
      <>
    <div className="base_input_group">
      <input
          id={name}
          onChange={handleInputChange}
          value={value}
          type={type}
          className={value.length > 0 ? "base_input_filled" : ""}
      />
      <label htmlFor={name}>{placeholder}</label>
      <span onClick={toggle}>{show && t(show)}</span>
    </div>
        {errorCondition && <div className='input_error_message'>{`${name} is wrong`}</div>}
      </>
  );
};

export default TextInput;
