import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

type TProps = {
    pathRoute: string;
    isItRoutable:boolean;
    imgSrc: string;
    imgSrcBold: string
    isActive: boolean;
    onClick: (route: string) => void;
    id: number;
    handleActiveClick: (id: number) => void
}


const CategoryMin: FC<TProps> = ({imgSrc, onClick, isActive, isItRoutable, pathRoute, id,handleActiveClick, imgSrcBold}) => {
    const {t} = useTranslation()
    return (
        <div className={'min-single-category'} onClick={() => {
            handleActiveClick(id)
            // if (text === 'Messages'){
            //     onClick(text)
            // }else if(text === 'Profile') {
            //     onClick(text)
            // }
            isItRoutable ? onClick(pathRoute):console.log('barev')
        }}>
            <img src={!isActive ? imgSrc : imgSrcBold} className={'min-icon'} alt="Menu Bar icon"/>
        </div>
    );
}

export default CategoryMin;