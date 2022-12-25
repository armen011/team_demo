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
                    <div className='single_notification_container'>
                        <img src={u.image} alt="User"/>
                        <div className='single_notification_text'>
                            <span style={{fontWeight: 'bold'}}>{t(u.userName)}</span>
                            <span>{t(u.info)}</span>
                        </div>
                    </div>

                    <div onClick={() => toggleFollow(u.id)}
                         className={u.status === 'Follow' ? 'notification_to_follow' : 'notification_following'}>
                        {t(u.status)}</div>

                    {/*<div className='notification_user_info'>*/}
                    {/*    <img src={u.image} alt="User"/>*/}
                    {/*    <span className='single_notification_name'>{t(u.userName)}</span>*/}
                    {/*    <span style={{marginLeft:'10px'}}>{t(u.info)}</span>*/}
                    {/*</div>*/}


                </div>)}
            </div>
        </div>
    );
}

export default NotificationSideBar;