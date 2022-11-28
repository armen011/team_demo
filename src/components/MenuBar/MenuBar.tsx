import './MenuBar.css'
import logo from "../../images/logo.png"
import homeIcon from "../../images/home.png"
import homeIconBold from "../../images/homeBold.png"
import searchIcon from "../../images/search.png";
import searchIconBold from "../../images/searchBold.png";
import messageIcon from "../../images/messenger.png";
import messageIconBold from "../../images/messengerBold.png";
import notificationIcon from "../../images/heart.png";
import notificationIconBold from "../../images/heartBold.png";
import createIcon from "../../images/create.png";
import createIconBold from "../../images/createBold.png";
import userIcon from "../../images/user.png";
import userIconBold from "../../images/userBold.png";
import menuIcon from "../../images/menu.png";
import menuIconBold from "../../images/menuBold.png";
import instagramIcon from "../../images/instagram.png"
import {useTranslation} from "react-i18next";
import Category from "../Category";
import React, {useState} from "react";
import CategoryMin from "../CategoryMin";
import {useNavigate} from "react-router-dom";


const MenuBar = () =>{

    const categoryParts = [
        {
            img: homeIcon,
            imgBold: homeIconBold,
            text: "Home",
            id: 1,
            isActive: true,
            path:'/',
            isRoutable:true
        },
        {
            img: searchIcon,
            imgBold: searchIconBold,
            text: "Search",
            id: 2,
            isActive: false,
            path:'/',
            isRoutable:false
        },
        {
            img: messageIcon,
            imgBold: messageIconBold,
            text: "Messages",
            id: 3,
            isActive: false,
            path:'/messages',
            isRoutable:true
        },
        {
            img: notificationIcon,
            imgBold: notificationIconBold,
            text: "Notification",
            id: 4,
            isActive: false,
            path:'/',
            isRoutable:false
        },
        {
            img: createIcon,
            imgBold: createIconBold,
            text: "Create",
            id: 5,
            isActive: false,
            path:'/',
            isRoutable:false
        },
        {
            img: userIcon,
            imgBold: userIconBold,
            text: "Profile",
            id: 6,
            isActive: false,
            path:'/profile',
            isRoutable:true
        },
    ]

    const [category, setCategory] = useState(categoryParts)
    const [categoryMin, setCategoryMin] = useState(categoryParts)
    const [language, setLanguage] = useState(false)
    const {t,i18n} = useTranslation();
    const navigate = useNavigate()



    const handleActiveClick = (id: number) => {
        setCategory(prevState => prevState.map(elem => {
            if (elem.id === id) {
                if (!elem.isActive){
                    elem.isActive = true
                }
            }else {
                elem.isActive = false
            }
            return elem
        }))
    }

    const handleRouteClick = (route: string) => {
        navigate(route)
    }

    return(
        <>
            <div className={'app_bar'}>
                           <div className={'logo-part'}>
                               <img src={logo} alt=""/>
                           </div>
                           <div className={'category-part'}>
                               {category.map(elem=> <Category
                                                        key={elem.id} imgSrcBold={elem.imgBold} pathRoute={elem.path}
                                                        handleActiveClick={handleActiveClick} id={elem.id}
                                                        text={elem.text} imgSrc={elem.img} isActive={elem.isActive}
                                                        isItRoutable={elem.isRoutable} onClick={handleRouteClick}/>)}
                           </div>
                            <Category
                                text={'More'} id={7} imgSrcBold={menuIconBold} pathRoute={'/'}
                                handleActiveClick={() => {}} imgSrc={menuIcon}
                                isItRoutable={false} isActive={false} onClick={() => {}}/>
                            <div>
                                <button onClick={() => {
                                    setLanguage(!language)
                                    return i18n.changeLanguage(language ? 'en' : 'hy')
                                }}>{!language ? 'Change Language Test' : 'Փոխել լեզւն'}</button>
                            </div>
                       </div>




            <div className={'min-bar'}>
                <div className={'min-logo-part'}>
                    <img src={instagramIcon} alt="Logo"/>
                </div>

                <div className={'min-category-part'}>
                    {categoryMin.map(elem=> {
                        return <CategoryMin
                            key={elem.id} id={elem.id} isItRoutable={elem.isRoutable}  pathRoute={elem.path}
                            handleActiveClick={handleActiveClick} imgSrcBold={elem.imgBold}
                            imgSrc={elem.img} isActive={elem.isActive} onClick={handleRouteClick}/>
                    })}
                </div>
                <div className={'min-menu-part'}>
                    <CategoryMin
                        imgSrc={menuIcon} isItRoutable={false}  pathRoute='/'
                        imgSrcBold={messageIconBold} id={71}
                        handleActiveClick={() => {}} isActive={false} onClick={() => {}}/>
                </div>
            </div>






            {/*notification part-----------------------------------------------------------------------------------------*/}

            <div className={'notification-part'}>
                  <div className={'notification-section'}>
                      Notifications
                  </div>
                <div className={'section-of-notifications'}>
                  <div className={'single-notification'}>
                      <img src={userIcon} alt="User"/>
                      <span style={{fontWeight:'bold'}}>UserName</span>
                      <span>started following you</span>
                      <button className={'notify-button-following'}>Following</button>
                  </div>
                    <div className={'single-notification'}>
                        <img src={userIcon} alt="User"/>
                        <span style={{fontWeight:'bold'}}>UserName</span>
                        <span>started following you</span>
                        <button className={'notify-button-following'}>Following</button>
                    </div>
                    <div className={'single-notification'}>
                        <img src={userIcon} alt="User"/>
                        <span style={{fontWeight:'bold'}}>UserName</span>
                        <span>liked your post</span>
                        <button className={'notify-button-toFollow'}>Follow</button>

                    </div>
                </div>
            </div>

            {/*----------------------------------------------------------------------------------------------------*/}



            <div className={'search-part'}>
                <div className={'search-upper-part'}>
                    <div className={'search-section'}>Search</div>
                    <div className={'search-input-part'}>
                        <input type="text" placeholder={'Search'}/>
                    </div>
                </div>

                <div className={'search-main-part'}>
                    <div className={'search-instruction-part'}>
                        <span style={{fontSize:'14px'}}>Recent</span>
                        <span className={'clear-searches-button'}>Clear all</span>
                    </div>

                    <div className={'search-singleUser-part'}>
                        <div className={'single-search-user'}>
                            <div className={'single-search-icon-part'}>
                                <img src={userIcon} alt="userIcon"/>
                            </div>
                            <div className={'single-search-text-part'}>
                                <div>username</div>
                                <div>bio about username</div>
                            </div>
                            <div className={'single-search-delete-part'}>
                                <span>&#10005;</span>
                            </div>
                        </div>

                        <div className={'single-search-user'}>
                            <div className={'single-search-icon-part'}>
                                <img src={userIcon} alt="userIcon"/>
                            </div>
                            <div className={'single-search-text-part'}>
                                <div>username</div>
                                <div>bio about username</div>
                            </div>
                            <div className={'single-search-delete-part'}>
                                <span>&#10005;</span>
                            </div>
                        </div>

                        <div className={'single-search-user'}>
                            <div className={'single-search-icon-part'}>
                                <img src={userIcon} alt="userIcon"/>
                            </div>
                            <div className={'single-search-text-part'}>
                                <div>username</div>
                                <div>bio about username</div>
                            </div>
                            <div className={'single-search-delete-part'}>
                                <span>&#10005;</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default MenuBar