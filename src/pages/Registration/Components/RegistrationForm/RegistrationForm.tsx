import TextInput from "components/TextInput";
import { HTMLInputTypeAttribute, useCallback, useState } from "react";
import "./RegistrationForm.css";
import UTILS from "utils";
import { useTranslation } from "react-i18next";
import SubmitButton from "components/SubmitButton";

const initialState = {
  email: "",
  fullName: "",
  userName: "",
  password: "",
};

type RegistrationInitialStateKeys = keyof typeof initialState;

const validate = (data: typeof initialState) => {
  return true;
};

const inputes: {
  key: RegistrationInitialStateKeys;
  placholderKey: string;
  type?: HTMLInputTypeAttribute;
}[] = [
  {
    key: "email",
    placholderKey: "email",
  },
  {
    key: "fullName",
    placholderKey: "",
  },
  {
    key: "userName",
    placholderKey: "",
  },
  {
    key: "password",
    placholderKey: "",
    type: "password",
  },
];
const { emailValidation, passwordValidation, userNameValidation } =
  UTILS.Validations;

const RegistrationForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ ...initialState, isValid: true });

  const handleInputChange =
    (type: RegistrationInitialStateKeys) => (value: string) => {
      setFormData((prev) => {
        const clonedState = { ...prev, [type]: value };

        return { ...clonedState, isValid: validate(clonedState) };
      });
    };
  const handleSubmit = () => {
    console.log("formData", formData);
  };

  return (
    <div className="registration_form_wrapper">
      {inputes.map(({ key, type, placholderKey }) => (
        <TextInput
          placeholder={t(placholderKey)}
          onChange={handleInputChange(key)}
          type={type}
          value={formData[key]}
          name={key}
        />
      ))}

      <p className="middleBodyText">
        People who use our service may have uploaded your contact information to
        Instagram. Learn More
      </p>
      <p className="middleBodyText">
        By signing up, you agree to our Terms , Privacy Policy and Cookies
        Policy.
      </p>

      <SubmitButton
        text={t("sign_up")}
        onClick={handleSubmit}
        isValid={formData.isValid}
      />
    </div>
  );
};

export default RegistrationForm;
