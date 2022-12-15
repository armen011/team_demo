import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import "./UserPopup.css" 

type TPopup = {
    style:string
    handleClosePopup:()=>void
}

const UserPopup:FC<TPopup> =({style , handleClosePopup})=>{

    const {t} = useTranslation()
    return (

    <div onClick={(e:React.MouseEvent<HTMLDivElement>)=>{
        

    }} className={`popup_container ${style}`}>
        <div className="red_text popup_button"><button>{t("Unfollow")}</button></div>
        <div className="popup_button"><button>{t("Add to favorites")}</button></div>
        <div className="popup_button"><button>{t("Go to post")}</button></div>
        <div className="popup_button"><button>{t("Share to...")}</button></div>
        <div className="popup_button"><button>{t("Copy link")}</button></div>
        <div className="popup_button bottom"><button onClick={handleClosePopup}>{t("Cancel")}</button></div>

    </div>
    )
}


export default UserPopup