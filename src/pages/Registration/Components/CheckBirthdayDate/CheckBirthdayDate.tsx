import "./CheckBirthdayDate.css"
import React, { FC } from "react" 
import { t } from "i18next"
import SubmitButton from "components/SubmitButton"

type Tdata = {
    date:number|string
}

const CheckBirthdayDate:FC<Tdata> = ({date})=> {
    const isValid=new Date().getFullYear() - (+date) <15
    
    return (
    <div className="ckeck_birthday_container">
        {isValid && <div className="birthday_text">{t("You need to enter the date you were born on")}</div>}
        <div className="birthday_text text">{t("Use your own date of birth, even if this account is for a business, pet or something else")}</div>
        <div className="button_container">
            <SubmitButton isValid={isValid} onClick={()=>{}} text={t("Next")}/>
        </div>
        <div className="previus_button">{t("Go back")}</div>
    </div>  
    )
}


export default CheckBirthdayDate