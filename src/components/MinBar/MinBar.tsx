import React, {FC} from 'react';
import instagramIcon from "../../assets/images/instagram.png";
import CategoryMin from "../CategoryMin";
import menuIcon from "../../assets/images/menu.png";
import messageIconBold from "../../assets/images/messengerBold.png";
import './MinBar.css'
import {useNavigate} from "react-router";



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

    const navigate = useNavigate()
    return (
        <div className={'min-bar'}>
            <div className={'min-logo-part'}>
                <img src={instagramIcon} alt="Logo" style={{cursor: "pointer"}} onClick={() => navigate('/')}/>
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
                <CategoryMin
                    text={'More'}
                    imgSrc={menuIcon} isItRoutable={false}  pathRoute='/'
                    imgSrcBold={messageIconBold} id={71}
                    isActive={false} />
            </div>
        </div>
    );
}

export default MinBar;