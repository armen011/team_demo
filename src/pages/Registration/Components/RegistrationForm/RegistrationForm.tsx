import TextInput from "components/TextInput";
import {HTMLInputTypeAttribute, useState} from "react";
import "./RegistrationForm.css";
import UTILS from "utils";
import {useTranslation} from "react-i18next";
import SubmitButton from "components/SubmitButton";
import {useAppDispatch, useAppSelector} from "app";
import {getResponse} from "features/registration";

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

    const state = useAppSelector(s=>s.registration);

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


    const togglePasswordClick = () => {
        setToggle(!togglePassword);
    }

    const submitFetch = () => {
        dispatch(getResponse({
            email: formData.email,
            username: formData.userName,
            fullName:formData.fullName,
            password:formData.password
        }));
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
                {t("people_who_use_our_service_may_have_uploaded_your_contact_information_to_instagram_learn_more")}
            </p>
            <p className="middle-body-text">
                {t("by_signing_up,_you_agree_to_our_Terms_,_privacy_policy_and_cookies_policy.")}
            </p>

            <SubmitButton
                text={t("sign_up")}
                onClick={submitFetch}
                isValid={formData.isValid}
            />
            <h4>{t(state.errorMessage)}</h4>
        </div>
    );
};

export default RegistrationForm;
