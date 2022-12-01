import React from 'react';
import userIcon from "../../images/user.png";
import './NotificationSideBar.css'
import {useTranslation} from "react-i18next";

const NotificationSideBar = () => {
    const {t} = useTranslation()

    return (
        <div className={'notification-part'}>
            <div className={'notification-section'}>
                {t('Notifications')}
            </div>
            <div className={'section-of-notifications'}>
                <div className={'single-notification'}>
                    <img src={userIcon} alt="User"/>
                    <span style={{fontWeight:'bold'}}>{t('UserName')}</span>
                    <span>{t("started following you")}</span>
                    <button className={'notify-button-following'}>{t('Following')}</button>
                </div>
                <div className={'single-notification'}>
                    <img src={userIcon} alt="User"/>
                    <span style={{fontWeight:'bold'}}>{t('UserName')}</span>
                    <span>{t("started following you")}</span>
                    <button className={'notify-button-following'}>{t('Following')}</button>
                </div>
                <div className={'single-notification'}>
                    <img src={userIcon} alt="User"/>
                    <span style={{fontWeight:'bold'}}>{t('UserName')}</span>
                    <span>{t("liked your post")}</span>
                    <button className={'notify-button-toFollow'}>{t("Follow")}</button>
                </div>
            </div>
        </div>
    );
}

export default NotificationSideBar;