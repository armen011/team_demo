import { FC, ReactElement } from "react";
import Footer from "./Components/Footer";
import "./AuthLayout.css";

export type AuthLayoutProps = {
  children: ReactElement;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth_page_wrapper">
      <div className="auth_content_wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
