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
        <span>{t('About')}</span>
        <span>{t('Blog')}</span>
        <span>{t('Jobs')}</span>
        <span>{t('Help')}</span>
        <span>API</span>
        <span>{t('Privacy')}</span>
        <span>{t('Terms')}</span>
        <span>{t('Top Accounts')}</span>
        <span>{t('Hashtags')}</span>
        <span>{t('Locations')}</span>
        <span>{t('Honey Lite')}</span>
        <span>{t('Contact Uploading & Non-Users')}</span>
          <span onClick={() => {
            setLanguage(!language);
            return i18n.changeLanguage(!language ? "hy" : "en");
          }}>{ !language ? "Հայերեն" : "English"}</span>
          <span>© 2022 Honey from Us</span>
      </div>
    </footer>
  );
};

export default Footer;
