import React, {FC} from 'react';
import logo from "assets/images/logo.png";
import Category from "../Category";
import menuIconBold from "assets/images/menuBold.png";
import menuIcon from "assets/images/menu.png";
import './AppBar.css';
import {useNavigate} from "react-router";

type TCategoryPart = {
    img: string,
    imgBold: string,
    text: string,
    id: number,
    isActive: boolean,
    path: string,
    isRoutable: boolean,
}

type TAppBar = {
    handleActiveClick: (id: number, text: string) => void,
    handleRouteClick: (route: string, text: string) => void,
    category: TCategoryPart[]
}

const AppBar:FC<TAppBar> = ({handleActiveClick, handleRouteClick, category}) =>{

    const navigate = useNavigate()


    return (
        <div className={'app_bar'}>
            <div className={'logo-part'}>
                <img style={{cursor: "pointer"}} src={logo} alt="" onClick={() => navigate('/')}/>
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
            <Category
                text={'More'} id={7} imgSrcBold={menuIconBold} pathRoute={'/'}
                imgSrc={menuIcon}
                isItRoutable={false} isActive={false}/>
            <div>
            </div>
        </div>
    );
}

export default AppBar;