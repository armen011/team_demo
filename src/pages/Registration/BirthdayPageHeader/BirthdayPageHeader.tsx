import { t } from "i18next";
import React from "react";
import "./BirthdayPageHeader.css";

function BirthdayPageHeader() {
  return (
    <div className="header_container">
      <div className="birthday_logo"></div>
      <div className="header_birthday_text" >{t('Add your date of birth')}</div>
      <div className="header_birthday_info">{t('Add your date of birth')}</div>
    </div>
  );
}

export default BirthdayPageHeader;
