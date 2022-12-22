import React, {FC, useState} from 'react';
import {refreshPage} from "../../features/user";
import {useAppDispatch} from "../../app";
import savedIcon from 'assets/images/saved.png'
import settingIcon from 'images/settings.png'
import logoutIcon from 'assets/images/logout.png'
import {useNavigate} from "react-router";



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

    const [menuDropdown, setMenuDropdown]= useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <>
            {!menuDropdown ?
        <div className={ 'min-single-category'} onClick={() => {
            if (text === 'More'){
                setMenuDropdown(!menuDropdown)
            }
            handleActiveClick(id, text)
            isItRoutable && onClick(pathRoute, text)
        }}>
            <img src={!isActive ? imgSrc : imgSrcBold} className={'min-icon'} alt="Menu Bar icon"/>
        </div> : <div className='dropdown_wrapper'>
                    <div className='close_dropdown' onClick={() => setMenuDropdown(false)}>

                    </div>
                    <div className='dropdown'>
                        <div className='dropdown_child' onClick={() => navigate('/profile/saved')}>
                            <div>
                                Saved
                            </div>
                            <img className='saved_icon' src={savedIcon} alt=""/>
                        </div>
                        <div className='dropdown_settings' onClick={() => navigate('/settings')}>
                            <div>
                                Settings
                            </div>
                            <img className='saved_icon' src={settingIcon} alt=""/>
                        </div>
                        <div className='dropdown_settings' onClick={() => {
                            localStorage.clear()
                            dispatch(refreshPage())
                        }}>
                            <div>
                                Log Out
                            </div>
                            <img className='saved_icon' src={logoutIcon} alt=""/>
                        </div>
                    </div>


                    <div className={ 'min-single-category'} onClick={() => {
                        setMenuDropdown(!menuDropdown)
                        handleActiveClick(id, text)
                        isItRoutable && onClick(pathRoute, text)
                    }}>
                        <img src={!isActive ? imgSrc : imgSrcBold} className={'min-icon'} alt="Menu Bar icon"/>
                    </div>
                </div>}
        </>
    );
}

export default CategoryMin;