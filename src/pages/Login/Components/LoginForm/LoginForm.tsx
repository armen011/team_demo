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

  let errorInLogin = true   

  const handleloginValue = (value: string) => {
    setLoginValues((prev) => ({ ...prev, login: value }));
  };

  const handlePaswordValue = (value: string) => {
    setLoginValues((prev) => ({ ...prev, password: value }));
  };

  const handleLoginUser = () => {
    errorInLogin = loginValidation(loginValues)
    console.log('errorInLogin', errorInLogin)
  };

  return (
    <div className="login_form_wrapper">
      <div>
        <img src={logoString} className="logo_img_login" />
      </div>
      <div className="text_input_wrapper_in_login">
        <TextInput
          value={loginValues.login}
          onChange={handleloginValue}
          placeholder="Phone number, username, or email"
        />
      </div>

      <div className="text_input_wrapper_in_login">
        <TextInput
          value={loginValues.password}
          onChange={handlePaswordValue}
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <button onClick={handleLoginUser}>Log in</button>
      </div>

      <div className="line_container">
        <div className="line"></div>
        <div>OR</div>
        <div className="line"></div>
      </div>
      <div>
      {!errorInLogin && <p className="isValidError">Sorry, your password was incorrect. Please double-check your password.</p>}

      </div>
    </div>
  );
}

export default LoginForm;
