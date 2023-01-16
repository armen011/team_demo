import { useState } from "react";
import "./LoginForm.css";

import {emailValidation, passwordValidation, userNameValidation} from "utils/validations";

import logoString from "assets/images/logo.png";
import appStore from "assets/images/appStoreImg.png";
import googlePlay from "assets/images/googlePlayImg.png";

import TextInput from "components/TextInput";
import SubmitButton from "components/SubmitButton";

import { login } from "features/user";

import { useAppDispatch, useAppSelector } from "app/store";

import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router";

const LoginForm = () => {
  const [loginValues, setLoginValues] = useState({
    login: "",
    password: "",
  });
  const [isValidButton, setIsValidButton] = useState(false);

  const dispatch = useAppDispatch();

  const selector = useAppSelector((state) => state.user);

  const [togglePassword, setToggle] = useState(true);


  const { t } = useTranslation();

  const handleInputChange =
    (type: keyof typeof loginValues) => (value: string) => {
      setLoginValues((prev) => ({ ...prev, [type]: value }));
      setIsValidButton(passwordValidation(loginValues.password) && (userNameValidation(loginValues.login) || emailValidation(loginValues.login)))
    };

  const handleLoginUser = () => {
    dispatch(
      login({ login: loginValues.login, password: loginValues.password })
    );
  };

  const togglePasswordClick = () => {
    setToggle(!togglePassword);
  }
  const navigate = useNavigate()

  return (
    <div className="login_form_wrapper">
      <div className="login_form_container">
        <div>
          <img src={logoString} className="login_logo_img" alt="login_logo"/>
        </div>
        <div className="login_text_input_wrapper">
          <TextInput
            name="username"
            value={loginValues.login}
            onChange={handleInputChange("login")}
            placeholder={t("Phone_number_username_or_email")}
          />
          <TextInput
            name="password"
            value={loginValues.password}
            toggle={togglePasswordClick}
            onChange={handleInputChange("password")}
            type={togglePassword ? "password" : "text"}
            show={loginValues.password.trim() ? (togglePassword ? "Show" : "Hide") : undefined}
            placeholder={t("Password")}
          />
        </div>
        <div className="button_wrapper">
          <SubmitButton
            isValid={isValidButton}
            onClick={handleLoginUser}
            text={t("Log in")}
          />
        </div>
        <div className="error_wrapper">
          {selector.errorMessage && <h4>{selector.errorMessage}</h4>}
        </div>
      </div>
      <div className="sign_up_wrapper">
        <p>
          {t("Don't_have_an_account?")}{" "}
          <span onClick={() => navigate('/registration')} style={{color: '#00b2f9', cursor: 'pointer'}}>{t("Sign_up")}</span>
        </p>
      </div>
      <div className="get_the_app_wrapper">
        <p>{t("Get the app")}</p>
        <div>
          <img src={appStore} alt="app_store"/>
          <img src={googlePlay} alt="google_play"/>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
