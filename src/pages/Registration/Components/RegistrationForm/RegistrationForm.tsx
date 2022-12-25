import TextInput from "components/TextInput";
import {HTMLInputTypeAttribute, useEffect, useState} from "react";
import "./RegistrationForm.css";
import UTILS from "utils";
import {useTranslation} from "react-i18next";
import SubmitButton from "components/SubmitButton";
import {useAppDispatch, useAppSelector} from "app";
import {getResponse} from "features/registration";

type RegistrationInitialStateKeys = keyof typeof initialState;
type TInputs = {
    key: RegistrationInitialStateKeys;
    placeholderKey: string;
    type?: HTMLInputTypeAttribute;
}

const initialState = {
    email: "",
    fullName: "",
    userName: "",
    password: "",
};


const {emailValidation, passwordValidation, userNameValidation, fullnameValidation} =
    UTILS.Validations;


const inputs: TInputs[] = [
    {
        key: "email",
        placeholderKey: "Mobile Number or Email",
    },
    {
        key: "fullName",
        placeholderKey: "Full Name",
    },
    {
        key: "userName",
        placeholderKey: "Username",
    },
    {
        key: "password",
        placeholderKey: "Password",
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
    const [inputError, setInputError] = useState({
        email: false,
        fullName: false,
        userName: false,
        password: false
    })


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

    const useValidationDeBounce = (data: typeof initialState, delay: number) => {
        useEffect(() => {
            const deBouncer = setTimeout( () => {
                if (data.email.length > 3 && !emailValidation(data.email)) {
                    setInputError(prevState => ({...prevState, email: true}))
                }else{
                    setInputError(prevState => ({...prevState, email: false}))
                }
                if (data.password.length > 3 &&  !passwordValidation(data.password)) {
                    setInputError(prevState => ({...prevState, password: true}))
                }else{
                    setInputError(prevState => ({...prevState, password: false}))
                }
                if (data.fullName.length > 3 && !fullnameValidation(data.fullName)) {
                    setInputError(prevState => ({...prevState, fullName: true}))
                }else{
                    setInputError(prevState => ({...prevState, fullName: false}))
                }
                if (data.userName.length > 3 && !userNameValidation(data.userName)) {
                    setInputError(prevState => ({...prevState, userName: true}))
                }else {
                    setInputError(prevState => ({...prevState, userName: false}))
                }
            }, delay)
            return () => {
                clearTimeout(deBouncer)
            }
        }, [data, delay])
    }

    useValidationDeBounce(formData, 1000)

    return (
        <div className="registration_form_wrapper">
            {inputs.map(({key, type, placeholderKey}) => (
                <TextInput
                    inputError={inputError}
                    key={key}
                    name={key}
                    value={formData[key]}
                    placeholder={t(placeholderKey)}
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
