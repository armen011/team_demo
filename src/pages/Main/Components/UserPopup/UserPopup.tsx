import React, {FC} from "react"
import {useTranslation} from "react-i18next"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./UserPopup.css" 
import "./UserPopup.css"
import {useLocation, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../../app";

type TPopup = {
    style: string
    handleClosePopup: () => void,
    userId: string;
    deletePost: () => void;
    ownId?: string
}

const UserPopup: FC<TPopup> = ({style, handleClosePopup, userId, deletePost, ownId}) => {

    const {t} = useTranslation()


    const creatorId = useAppSelector(state => state.user._id)
    const navigate = useNavigate()
    const location = useLocation()
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;

    const unfollowFromPost = () => {
        fetch(`${baseUrl}api/users/${userId}/unfollow`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: creatorId
            })
        }).then(res=> res.json()).then(()=> {
            window.location.reload()
        }).catch(error=> console.log(error))
    }


    return (
        <div className={`popup_container ${style}`}>
            <div className="red_text popup_button">
                <button onClick={unfollowFromPost}>{t("Unfollow")}</button>
            </div>
            <div className="popup_button">
                <button>{t("Add to favorites")}</button>
            </div>
            <div className="popup_button">
                <button onClick={() => {
                    if (userId !== creatorId){
                        navigate('/loading', {state: userId})
                    }else{
                        navigate('/profile')
                    }
                    document.body.classList.remove("no_scroll");
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