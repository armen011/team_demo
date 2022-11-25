import LoginForm from "../LoginForm";
import LoginImage from "../LoginImage";

import './LoginWrapper.css'


function LoginWraper() {
  return (
    <div className="login_wrapper">
      <LoginImage />
      <LoginForm />
    </div>
  );
}

export default LoginWraper;
