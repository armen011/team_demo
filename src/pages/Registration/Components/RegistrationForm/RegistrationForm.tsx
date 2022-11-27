import TextInput from "components/TextInput";
import {HTMLInputTypeAttribute, useState} from "react";
import "./RegistrationForm.css";
import UTILS from "utils";
import {useTranslation} from "react-i18next";
import SubmitButton from "components/SubmitButton";
import {useAppDispatch} from "../../../../app";
import {yardages} from "../../../../features/user";

type RegistrationInitialStateKeys = keyof typeof initialState;

const initialState = {
    email: "",
    fullName: "",
    userName: "",
    password: "",
};


const {emailValidation, passwordValidation, userNameValidation, fullnameValidation} =
    UTILS.Validations;


const inputes: {
    key: RegistrationInitialStateKeys;
    placholderKey: string;
    type?: HTMLInputTypeAttribute;
}[] = [
    {
        key: "email",
        placholderKey: "Mobile Number or Email",
    },
    {
        key: "fullName",
        placholderKey: "Full Name",
    },
    {
        key: "userName",
        placholderKey: "Username",
    },
    {
        key: "password",
        placholderKey: "Password",
        type: "password",
    },
];

const validate = (data: typeof initialState): boolean => {
    return emailValidation(data.email)
        && passwordValidation(data.password)
        && fullnameValidation(data.fullName)
        && userNameValidation(data.userName);
};


const RegistrationForm = () => {

    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const [formData, setFormData] = useState({...initialState, isValid: false});
    const [togglePassword, setToggle] = useState(true);


    const handleInputChange =
        (type: RegistrationInitialStateKeys) => (value: string) => {
            setFormData((prev) => {
                const clonedState = {...prev, [type]: value};
                return {...clonedState, isValid: validate(clonedState)};
            });
        };
    const handleSubmit = () => {
        dispatch(yardages());
    };

    const togglePasswordClick = () => {
        setToggle(!togglePassword);
    }

    return (
        <div className="registration_form_wrapper">
            {inputes.map(({key, type, placholderKey}) => (
                <TextInput
                    key={key}
                    name={key}
                    value={formData[key]}
                    placeholder={t(placholderKey)}
                    onChange={handleInputChange(key)}
                    toggle={togglePasswordClick}
                    type={(type === "password") && togglePassword ? "password" : "text"}
                    show={type === "password" && formData.password.length ? (togglePassword ? "Show" : "Hide") : undefined}
                />
            ))}

            <p className="middle-body-text">
                People who use our service may have uploaded your contact information to
                Instagram. Learn More
            </p>
            <p className="middle-body-text">
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
