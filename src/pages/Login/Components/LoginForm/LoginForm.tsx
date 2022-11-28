import TextInput from "components/TextInput";
import { useState } from "react";
import "./LoginForm.css";

import { loginValidation } from "utils/loginValidation";

import logoString from "assets/images/logo.png";
import SubmitButton from "components/SubmitButton";
import { login } from "features/user";
import { useAppDispatch } from "../../../../app/store";

let isValidButton = false;


function LoginForm() {
  const [loginValues, setLoginValues] = useState({
    login: "",
    password: "",
  });
  const dispatch = useAppDispatch();



  const handleInputChange =
    (type: keyof typeof loginValues) => (value: string) => {
      setLoginValues((prev) => ({ ...prev, [type]: value }));
      isValidButton = loginValidation(loginValues);
      console.log("isValidButton", isValidButton);
    };

  const handleLoginUser = () => {
    console.log("isValidButton login user", isValidButton);
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
            placeholder="Phone number, username, or email"
          />
          <TextInput
            name="password"
            value={loginValues.password}
            onChange={handleInputChange("password")}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="button_wrapper">
          <SubmitButton
            isValid={isValidButton}
            onClick={handleLoginUser}
            text="Log in"
          />
        </div>
      </div>
      <div className="sign_up_wrapper">
        <p>
          Don't have an account? <a>Sign up</a>
        </p>
      </div>
      <div className="get_the_app_wrapper"></div>
    </div>
  );
}

export default LoginForm;
