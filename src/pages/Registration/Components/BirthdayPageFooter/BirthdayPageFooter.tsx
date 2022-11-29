import { t } from "i18next";
import React from "react"
import { useNavigate , } from "react-router";
import "./BirthdayPageFooter.css"
 


const BirthdayPageFooter=()=>{

    const navigate = useNavigate()

    const handleNavigate = ()=>{
        navigate("/login")
    }
    return (

    <div className="footer"><p>{t("Have an account?")} <span onClick={handleNavigate}>{t("Log in")}</span></p></div>
    )
}


export default BirthdayPageFooter