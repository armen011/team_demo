import React, {FC, useState} from 'react';
import logo from "../../images/logo.png";
import Category from "../Category";
import menuIconBold from "../../images/menuBold.png";
import menuIcon from "../../images/menu.png";
import './AppBar.css';
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

type TAppBar = {
    handleActiveClick: (id: number, text: string) => void,
    handleRouteClick: (route: string, text: string) => void,
    category: TCategoryPart[]
}

const AppBar:FC<TAppBar> = ({handleActiveClick, handleRouteClick, category}) =>{

    const [language, setLanguage] = useState(false)
    const {i18n} = useTranslation()


    return (
        <div className={'app_bar'}>
            <div className={'logo-part'}>
                <img src={logo} alt=""/>
            </div>
            <div className={'category-part'}>
                {category.map(elem=> {
                    if (elem.text === 'Notification'){
                        return <Category key={elem.id} text={elem.text} imgSrc={elem.img} imgSrcBold={elem.imgBold} isActive={elem.isActive}
                                         isItRoutable={elem.isRoutable} onClick={handleRouteClick} pathRoute={elem.path}
                                         id={elem.id} handleActiveClick={handleActiveClick}/>
                    }
                    if (elem.text === 'Search'){
                        return <Category key={elem.id} text={elem.text} imgSrc={elem.img} imgSrcBold={elem.imgBold} isActive={elem.isActive}
                                         isItRoutable={elem.isRoutable} onClick={handleRouteClick} pathRoute={elem.path}
                                         id={elem.id} handleActiveClick={handleActiveClick}/>
                    }
                    return <Category
                        key={elem.id} imgSrcBold={elem.imgBold} pathRoute={elem.path}
                        handleActiveClick={handleActiveClick} id={elem.id}
                        text={elem.text} imgSrc={elem.img} isActive={elem.isActive}
                        isItRoutable={elem.isRoutable} onClick={handleRouteClick}/>
                })}
            </div>
            <button onClick={() => {
                setLanguage(!language)
                return i18n.changeLanguage(language ? 'en' : 'hy')
            }}>{!language ? 'Change Language Test' : 'Փոխել լեզւն'}</button>
            <Category
                text={'More'} id={7} imgSrcBold={menuIconBold} pathRoute={'/'}
                handleActiveClick={() => {}} imgSrc={menuIcon}
                isItRoutable={false} isActive={false} onClick={() => {}}/>
            <div>
            </div>
        </div>
    );
}

export default AppBar;