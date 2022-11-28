import React, { ChangeEvent , MouseEventHandler, useState } from "react";
import "./BirthdayPage.css";
import BirthdayPageHeader from "../BirthdayPageHeader";
import BirthdayPageFooter from "../BirthdayPageFooter";
import CheckBirthdayDate from "../CheckBirthdayDate";
import SelectDate from "../SelectDate";
import Popup from "../Popup";
import UTILS from "utils";
import { t } from "i18next";


const {date: { months, daysInMonth, arrayInDays, years }} = UTILS;

function BirthdayPage() {
  const [isClicked, setIsClicked] = useState(false);

  const [date, setDate] = useState({
    month: months[new Date().getMonth()],
    year: new Date().getFullYear() - 1,
    day: new Date().getDate(),
  });

  

  const handleClosePopup = (e:React.MouseEvent<HTMLDivElement>):void=>{
    setIsClicked(false)
  }

  const handleOpenPopup = (e:React.MouseEvent<HTMLDivElement>):void=>{
    setIsClicked(true)
    
  }

  

  return (
   <>
    {isClicked&&<div className="black"></div>}
     <div className="birthday_container">
     <div className="wrapper_b">
      <div className="container">
        <BirthdayPageHeader />
        <div onClick={handleOpenPopup} className="popup_open">{t("Why do I need to provide my date of birth?")}</div>
        <div className="select_container">
          <SelectDate
            array={months}
            value={date.month}
            handleChange={(e: ChangeEvent<HTMLSelectElement>) => {                
              setDate({
                ...date,
                month: e.target.value,
              });
            }}
          />
          <SelectDate
            array={arrayInDays(
              months.findIndex((it) => it === date.month) + 1,
              date.year
            )}
            value={date.day}
            handleChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setDate({
                ...date,
                day: +e.target.value,
              });
            }}
          />
          <SelectDate
            array={years()}
            value={date.year}
            handleChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setDate({
                ...date,
                year: +e.target.value,
              });
            }}
          />
        </div>

        <CheckBirthdayDate date={date.year} />
      </div>

      <BirthdayPageFooter />
      
    </div>
     </div>
     {isClicked && <Popup handleClosePopup={handleClosePopup} />}
    
    
   </>
  );
}

export default BirthdayPage;
