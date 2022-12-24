import React, {FC} from "react"
import {useTranslation} from "react-i18next"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./UserPopup.css"
import {useLocation, useNavigate} from "react-router-dom";

type TPopup = {
    style: string
    handleClosePopup: () => void,
    userId: string;
    deletePost: () => void;
    ownId?: string
}

const UserPopup: FC<TPopup> = ({style, handleClosePopup, userId, deletePost, ownId}) => {

    const {t} = useTranslation()

    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div onClick={(e: React.MouseEvent<HTMLDivElement>) => {


        }} className={`popup_container ${style}`}>
            <div className="red_text popup_button">
                <button>{t("Unfollow")}</button>
            </div>
            <div className="popup_button">
                <button>{t("Add to favorites")}</button>
            </div>
            <div className="popup_button">
                <button onClick={() => {
                    navigate(`/user/${userId}`)
                }}>{t("Go to post")}</button>
            </div>
            {ownId === userId && <div className="popup_button red_text">
                <button onClick={deletePost}>{t("Delete post")}</button>
            </div>
            }
            <CopyToClipboard text={`${location.pathname}user/${userId}`}>
                <div className="popup_button">
                    <button>{t("Copy link")}</button>
                </div>

            </CopyToClipboard>
            <div className="popup_button bottom">
                <button onClick={handleClosePopup}>{t("Cancel")}</button>
            </div>

        </div>
    )
}


export default UserPopup