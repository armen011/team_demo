import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import UTILS from "utils";
import BirthdayPageFooter from "../Components/BirthdayPageFooter";
import BirthdayPageHeader from "../Components/BirthdayPageHeader";
import CheckBirthdayDate from "../Components/CheckBirthdayDate";
import Popup from "../Components/Popup";
import SelectDate from "../Components/SelectDate";

const {date: { months,arrayInDays, years }} = UTILS;

const DateForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [date, setDate] = useState({
    month: months[new Date().getMonth()],
    year: new Date().getFullYear() - 1,
    day: new Date().getDate(),
  });
  const {t}=useTranslation()

  

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
  )
}

export default DateForm
