import { useState } from "react";
import "./LoginForm.css";

import { loginValidation } from "utils/loginValidation";

import logoString from "assets/images/logo.png";
import appStore from "assets/images/appStoreImg.png";
import googlePlay from "assets/images/googlePlayImg.png";

import TextInput from "components/TextInput";
import SubmitButton from "components/SubmitButton";

import { login } from "features/user";

import { useAppDispatch, useAppSelector } from "app/store";

import { useTranslation } from "react-i18next";

function LoginForm() {
  const [loginValues, setLoginValues] = useState({
    login: "",
    password: "",
  });
  const [isValidButton, setIsValidButton] = useState(false);

  const dispatch = useAppDispatch();

  const selector = useAppSelector((state) => state.user);

  const { t } = useTranslation();

  const handleInputChange =
    (type: keyof typeof loginValues) => (value: string) => {
      setLoginValues((prev) => ({ ...prev, [type]: value }));
      setIsValidButton(loginValidation(loginValues));
    };

  const handleLoginUser = () => {
    dispatch(
      login({ login: loginValues.login, password: loginValues.password })
    );
  };

  return (
    <div className="login_form_wrapper">
      <div className="login_form_container">
        <div>
          <img src={logoString} className="login_logo_img" />
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
            onChange={handleInputChange("password")}
            type="password"
            placeholder={t("Password")}
          />
        </div>
        <div className="button_wrapper">
          <SubmitButton
            isValid={isValidButton}
            onClick={handleLoginUser}
            text={t("Log_in")}
          />
        </div>
        <div className="error_wrapper">
          {selector.errorMessage && <h4>{selector.errorMessage}</h4>}
        </div>
      </div>
      <div className="sign_up_wrapper">
        <p>
          {t("Don't_have_an_account?")}{" "}
          <a href="/registration">{t("Sign_up")}</a>
        </p>
      </div>
      <div className="get_the_app_wrapper">
        <p>{t("Get_the_app")}</p>
        <div>
          <img src={appStore} />
          <img src={googlePlay} />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
