import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

type TProps = {
    text: string;
    imgSrc: string;
    imgSrcBold: string
    isActive: boolean;
    isItRoutable:boolean;
    onClick: (route: string) => void;
    pathRoute:string;
    id: number;
    handleActiveClick: (id: number) => void
}

const Category: FC<TProps> = ({text,imgSrc,isItRoutable,pathRoute, onClick, isActive, id,handleActiveClick, imgSrcBold}) => {

    const {t} = useTranslation()


     return (
        <div className={'single-category'} onClick={() => {
            handleActiveClick(id)

            isItRoutable ? onClick(pathRoute):console.log('barev')
        }}>
            <div className={'category-icon'}><img src={!isActive ? imgSrc : imgSrcBold} className={'category-image'} alt="Menu Bar icon"/></div>
            <div>{t(text)}</div>
        </div>
    );
}

export default Category;