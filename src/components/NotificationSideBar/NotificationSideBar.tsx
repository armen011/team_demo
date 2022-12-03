import React, {useState} from 'react';
import userIcon from "../../assets/images/user.png";
import './NotificationSideBar.css'
import {useTranslation} from "react-i18next";

const NotificationSideBar = () => {
    const {t} = useTranslation()
    const usersArr = [
        {
            userName: 'Arman',
            status: 'Following',
            info: 'started following you',
            image: userIcon,
            id: 1
        },
        {
            userName: 'Armen',
            status: 'Following',
            info: 'started following you',
            image: userIcon,
            id:2
        },
        {
            userName: 'Artur',
            status: 'Follow',
            info: 'liked your post',
            image: userIcon,
            id: 3
        },
        {
            userName: 'Albert',
            status: 'Follow',
            info: 'liked your post',
            image: userIcon,
            id: 4
        },
        {
            userName: 'Aram',
            status: 'Follow',
            info: 'liked your post',
            image: userIcon,
            id: 5
        },
        {
            userName: 'Albert',
            status: 'Following',
            info: 'started following you',
            image: userIcon,
            id: 6
        }
    ]
    const [users] = useState(usersArr)


    return (
        <div className={'notification-part'}>
            <div className={'notification-section'}>
                {t('Notifications')}
            </div>
            <div className={'section-of-notifications'}>
                {users.map(u => <div key={u.id} className='single-notification'>
                    <img src={u.image} alt="User"/>
                        <span style={{fontWeight:'bold'}}>{t(u.userName)}</span>
                        <span>{t(u.info)}</span>
                        <button className={u.status === 'Follow' ? 'notify-button-toFollow' : 'notify-button-following'}>{t(u.status)}</button>
                </div>)}
            </div>
        </div>
    );
}

export default NotificationSideBar;