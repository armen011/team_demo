import React, {FC} from 'react';

type TProps = {
    text:string
    pathRoute: string;
    isItRoutable:boolean;
    imgSrc: string;
    imgSrcBold: string
    isActive: boolean;
    onClick: (route: string, text: string) => void;
    id: number;
    handleActiveClick: (id: number, text: string) => void
}


const CategoryMin: FC<TProps> = ({text,imgSrc, onClick, isActive, isItRoutable, pathRoute, id,handleActiveClick, imgSrcBold}) => {
    return (
        <div className={'min-single-category'} onClick={() => {
            handleActiveClick(id, text)
            isItRoutable && onClick(pathRoute, text)
        }}>
            <img src={!isActive ? imgSrc : imgSrcBold} className={'min-icon'} alt="Menu Bar icon"/>
        </div>
    );
}

export default CategoryMin;