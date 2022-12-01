import React, {FC, useState} from 'react';
import instagramIcon from "../../images/instagram.png";
import CategoryMin from "../CategoryMin";
import menuIcon from "../../images/menu.png";
import messageIconBold from "../../images/messengerBold.png";
import './MinBar.css'
import {useTranslation} from "react-i18next";



type TCategoryPart = {
    img: string,
    imgBold: string,
    text: string,
    id: number,
    isActive: boolean,
    path: string,
    isRoutable: boolean
}

type TMinBar = {
    handleActiveClick: (id: number, text: string) => void,
    handleRouteClick: (route: string, text: string) => void,
    category: TCategoryPart[]
}

const MinBar:FC<TMinBar> = ({handleActiveClick, handleRouteClick, category}) =>{

    const [language, setLanguage] = useState(false)
    const {i18n} = useTranslation()

    return (
        <div className={'min-bar'}>
            <div className={'min-logo-part'}>
                <img src={instagramIcon} alt="Logo"/>
            </div>

            <div className={'min-category-part'}>
                {category.map(elem=> {
                    if (elem.text !== 'Notification'){
                        return <CategoryMin
                            text={elem.text}
                            key={elem.id} id={elem.id} isItRoutable={elem.isRoutable}  pathRoute={elem.path}
                            handleActiveClick={handleActiveClick} imgSrcBold={elem.imgBold}
                            imgSrc={elem.img} isActive={elem.isActive} onClick={handleRouteClick}/>
                    }
                    return <CategoryMin
                        text={elem.text}
                        key={elem.id} id={elem.id} isItRoutable={elem.isRoutable}  pathRoute={elem.path}
                        handleActiveClick={handleActiveClick} imgSrcBold={elem.imgBold}
                        imgSrc={elem.img} isActive={elem.isActive} onClick={handleRouteClick}/>
                })}
            </div>
            <div className={'min-menu-part'}>
                <button onClick={() => {
                    setLanguage(!language)
                    return i18n.changeLanguage(language ? 'en' : 'hy')
                }}>{!language ? 'Change Language Test' : 'Փոխել լեզւն'}</button>
                <CategoryMin
                    text={'More'}
                    imgSrc={menuIcon} isItRoutable={false}  pathRoute='/'
                    imgSrcBold={messageIconBold} id={71}
                    handleActiveClick={() => {}} isActive={false} onClick={() => {}}/>
            </div>
        </div>
    );
}

export default MinBar;