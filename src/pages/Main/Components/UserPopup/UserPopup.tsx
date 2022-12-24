import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./UserPopup.css" 
import { useLocation  , useNavigate } from "react-router-dom";
import {log} from "util";
import {useAppSelector} from "../../../../app";

type TPopup = {
    style:string
    handleClosePopup:()=>void,
    userId:string
}

const UserPopup:FC<TPopup> =({style , handleClosePopup , userId})=>{

    const {t} = useTranslation()
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;
    const creatorId = useAppSelector(s=>s.user._id);


    const handleUnfollow = ():void=>{
        fetch(`${baseUrl}api/users/${creatorId}/unfollow`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId
            })
        }).then(res=> res.json()).then(res=>{
            handleClosePopup();
            return res
        }).catch(error=> console.log(error))
    }

    const navigate = useNavigate()
    const location  = useLocation ()
    return (
    <div onClick={(e:React.MouseEvent<HTMLDivElement>)=>{
    }} className={`popup_container ${style}`}>
        <div className="red_text popup_button"><button onClick={handleUnfollow}>{t("Unfollow")}</button></div>
        <div className="popup_button"><button>{t("Add to favorites")}</button></div>
        <div className="popup_button"><button onClick={()=>{
            navigate(`/users/${userId}`)
        }} >{t("Go to post")}</button></div>
        <div className="popup_button"><button>{t("Share to...")}</button></div>
        <CopyToClipboard text={`${location.pathname}user/${userId}`}>
        <div className="popup_button"><button>{t("Copy link")}</button></div>

        </CopyToClipboard>
        <div className="popup_button bottom"><button onClick={handleClosePopup}>{t("Cancel")}</button></div>

    </div>
    )
}


export default UserPopup