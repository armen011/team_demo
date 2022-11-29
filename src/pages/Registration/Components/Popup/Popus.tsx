import React, { FC , MouseEventHandler, useEffect } from "react";
import "./Popup.css";
import remove from "./icons/remove.png"
import { t } from "i18next";

type ThandleClosePopup = {
  handleClosePopup:(e:React.MouseEvent<HTMLDivElement>)=>void;
}

const Popup:FC<ThandleClosePopup>=({handleClosePopup})=>{

  



  return (
      <>
        <div className="wrapper">
        <div className="birthday_text_container">
          <span>{t("Birthdays")}</span>
          <div onClick={handleClosePopup} className="remove_container">
            <img className="remove_icon" src={remove} alt="" />
          </div>
        </div>
        <div className="info_container">
          <div className="logo"></div>
          <div className="birthday_div">{t("Birthdays on Instagram")}</div>
          <div className="info_text">
            {t("Providing your date of birth improves the features and ads that you see and helps us keep the Instagram community safe. You can find your date of birth in your personal information account settings.")}
          </div>
        </div>
        <div className="link_container">
          <a href="https://help.instagram.com/155833707900388" target="blank">
            {t("Learn more")}
          </a>
        </div>
        
      </div>
      
      </>
    
  );
}

export default Popup;
