import AuthLayout from "layouts/AuthLayout";
import { useTranslation } from "react-i18next";
import RegistrationForm from "./Components/RegistrationForm";
import "./Registration.css";

const Registration = () => {
  const { t } = useTranslation();
  return (
    <AuthLayout>
      <div className="registration_content_wrapper">
        <div className="registration_box">
          <div className="registration_logo_wrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
              alt=""
              width={176}
            />
          </div>
          <h4 className="header_title">
            {t("sign_up_to_see_photos_and_videos_from_your_friends")}
          </h4>
          <RegistrationForm />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Registration;
