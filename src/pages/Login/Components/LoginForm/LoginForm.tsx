import TextInput from "components/TextInput";
import { useState } from "react";
import "./LoginForm.css";

import { loginValidation } from "utils/loginValidation";

import logoString from "assets/images/logo.png";

function LoginForm() {
  const [loginValues, setLoginValues] = useState({
    login: "",
    password: "",
  });

  let errorInLogin = true;

  const handleInputChange =
    (type: keyof typeof loginValues) => (value: string) => {
      setLoginValues((prev) => ({ ...prev, [type]: value }));
    };

  const handleLoginUser = () => {
    errorInLogin = loginValidation(loginValues);
    console.log("errorInLogin", errorInLogin);
  };

  return (
    <div className="login_form_wrapper">
      <div>
        <img src={logoString} className="login_logo_img" />
      </div>
      <div className="login_text_input_wrapper">
        <TextInput
          value={loginValues.login}
          onChange={handleInputChange("login")}
          placeholder="Phone number, username, or email"
        />
        <TextInput
          value={loginValues.password}
          onChange={handleInputChange("password")}
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <button onClick={handleLoginUser}>Log in</button>
      </div>
      <div>
        {!errorInLogin && (
          <p className="isValidError">
            Sorry, your password was incorrect. Please double-check your
            password.
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
