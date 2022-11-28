import "./CheckBirthdayDate.css"
import React, { FC } from "react" 
import { t } from "i18next"

type Tdata = {
    date:number|string
}

const CheckBirthdayDate:FC<Tdata> = ({date})=> {
    return (

    <div className="ckeck_birthday_container">
        {(new Date().getFullYear() - (+date) <15) && <div className="birthday_text">{t("You need to enter the date you were born on")}</div>}
        <div className="birthday_text text">{t("Use your own date of birth, even if this account is for a business, pet or something else")}</div>
        <div className="button_container"><button className={`next ${(new Date().getFullYear() - (+date) <15 ?"disabled" :"")}`} disabled={(new Date().getFullYear() - (+date) <15)?true :false}>{t("Next")}</button></div>
        <div className="previus_button">{t("Go back")}</div>
    </div>  
    )
}


export default CheckBirthdayDate