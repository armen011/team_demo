import "./RegistrationWrapper.css";
import GetTheApp from "components/GetTheApp";

const RegistrationWrapper = () => {
  return (
    <div className={"signUpDiv"}>
      <div className={"body_div"}>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
          alt=""
        />

        <div className="signUpRecommendation">
          <p className="signUpRecommendationText">
            Sign up to see photos and videos
          </p>
          <p className="signUpRecommendationText">from your friends.</p>
        </div>
        <div className="line"></div>
      </div>
      <div className={"middle_div"}>
        <div className={"middle_div_container"}>
          <span>Have an account? </span>
          <span className={"route_log_in"}>Log in</span>
        </div>
      </div>
      <div className={"middle_div_tex"}>Get the app.</div>
      <GetTheApp />
    </div>
  );
};

export default RegistrationWrapper;
