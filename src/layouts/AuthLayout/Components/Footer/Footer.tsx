import "./footer.css";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const Footer = () => {
  const [language,setLanguage] = useState<boolean>(false);

  const {t,i18n} = useTranslation();
  return (
    <footer>
      <div className="footer_div">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Top Accounts</span>
        <span>Hashtags</span>
        <span>Locations</span>
        <span>Instagram Lite</span>
        <span>Contact Uploading & Non-Users</span>
        <div className="footer_bottom_div">
          <span onClick={() => {
            i18n.changeLanguage(!language ? "hy" : "en");
            setLanguage(!language);
          }}>{ !language ? "Հայերեն" : "English"}</span>
          <span>© 2022 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
