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
    const [users, setUsers] = useState(usersArr)
    const toggleFollow = (id: number) => {
        setUsers(prevState => prevState.map(elem=> {
            if (elem.id === id) {
               if (elem.status === 'Follow'){
                   elem.status = 'Following'
               }else {
                   elem.status = 'Follow'
               }
            }
            return elem
        }))
    }


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
                        <button onClick={() => toggleFollow(u.id)} className={u.status === 'Follow' ? 'notification_to_follow' : 'notification_following'}>{t(u.status)}</button>
                </div>)}
            </div>
        </div>
    );
}

export default NotificationSideBar;