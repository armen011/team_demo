import "./CheckBirthdayDate.css"
import React, { FC } from "react"

import { t } from "i18next"
import SubmitButton from "components/SubmitButton"
import { useAppDispatch, useAppSelector } from "app"
import { handleGoBack } from "features/registration"
import {sendResponse} from "features/registration"
import UTILS from "utils"
import { stat } from "fs"
import { useNavigate } from "react-router-dom"

const {date:{fullDate , months}} = UTILS


type Tdata = {
    date:{
        day:number|string,
        year:number|string,
        month:string
    }
}

const CheckBirthdayDate:FC<Tdata> = ({date:{day,year,month}})=> {
    const dispatch = useAppDispatch()
    const state = useAppSelector((s)=>s.registration)

    const isValid=new Date().getFullYear() - (+year) >15
    const disabled = "next disabled";
    const navigate = useNavigate();
    const nav = ():void=>{
        navigate('/login');
    }

    const submitFetch = () => {
        
        dispatch(sendResponse({
            email: state.email,
            username: state.username,
            fullName:state.fullName,
            password:state.password,
            dateOfBirth:fullDate(day,year,months.findIndex((it)=>it===month)+1),
            nav:nav
        }));
    }
        

   
    return (
    <div className="ckeck_birthday_container">
        {!isValid && <div className="birthday_text">{t("You need to enter the date you were born on")}</div>}
        <div className="birthday_text text">{t("Use your own date of birth, even if this account is for a business, pet or something else")}</div>
        <div className="button_container">
            <SubmitButton isValid={isValid} class1="next" class2={disabled} onClick={submitFetch} text={t("Next")}/>
        </div>
        <div onClick={()=>{
            dispatch(handleGoBack())
        }} className="previus_button">{t("Go back")}</div>
    </div>  
    )
}


export default CheckBirthdayDate