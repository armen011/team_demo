import AuthLayout from "layouts/AuthLayout";
import RegistrationWrapper from "./Components/RegistrationWrapper";

const Registration = () => {
  return (
    <AuthLayout>
      <div className={"registration_app"}>
        <div className={"wrapper"}>
          <RegistrationWrapper />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Registration;
