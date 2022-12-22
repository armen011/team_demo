import React, {FC, useState} from "react";
import { useTranslation } from "react-i18next";
import {NavLink} from "react-router-dom";
import savedIcon from "../../assets/images/saved.png";
import settingIcon from "../../images/settings.png";
import {refreshPage} from "../../features/user";
import logoutIcon from "../../assets/images/logout.png";
import {useNavigate} from "react-router";
import {useAppDispatch} from "../../app";

type TProps = {
  text: string;
  imgSrc: string;
  imgSrcBold: string;
  isActive: boolean;
  isItRoutable: boolean;
  onClick: (route: string, text: string) => void;
  pathRoute: string;
  id: number;
  handleActiveClick: (id: number, text: string) => void;
};

const Category: FC<TProps> = ({
  text,
  imgSrc,
  isItRoutable,
  pathRoute,
  onClick,
  isActive,
  id,
  handleActiveClick,
  imgSrcBold,
}) => {
  const { t } = useTranslation();
  const [menuDropdown, setMenuDropdown]= useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  return (
      <>
        {!menuDropdown ?

            <div
                className={"single-category"}
                onClick={() => {
                  if (text === 'More'){
                  setMenuDropdown(!menuDropdown)
                  }
                  handleActiveClick(id, text);
                  isItRoutable && onClick(pathRoute, text);
                }}
            >
              <div className={"category-icon"}>
                <img
                    src={!isActive ? imgSrc : imgSrcBold}
                    className={"category-image"}
                    alt="Menu Bar icon"
                />
              </div>
              <div>{t(text)}</div>
            </div>
        :
            <div>
              <div className='close_dropdown' onClick={() => setMenuDropdown(false)}>

              </div>
              <div className='dropdown_app_bar_wrapper'>
                <div className='dropdown_app_bar'>
                  <div className='dropdown_child' onClick={() => navigate('/profile/saved')}>
                    <div style={{fontWeight: 'lighter'}}>
                      Saved
                    </div>
                    <img className='saved_icon' src={savedIcon} alt=""/>
                  </div>
                  <div className='dropdown_settings' onClick={() => navigate('/settings')}>
                    <div style={{fontWeight: 'lighter'}}>
                      Settings
                    </div>
                    <img className='saved_icon' src={settingIcon} alt=""/>
                  </div>
                  <div className='dropdown_settings' onClick={() => {
                    localStorage.clear()
                    dispatch(refreshPage())
                  }}>
                    <div style={{fontWeight: 'lighter'}}>
                      Log Out
                    </div>
                    <img className='saved_icon' src={logoutIcon} alt=""/>
                  </div>
                </div>

              </div>


              <div
                  className={"single-category"}
                  onClick={() => {
                    setMenuDropdown(!menuDropdown)
                    handleActiveClick(id, text);
                    isItRoutable && onClick(pathRoute, text);
                  }}
              >
                <div className={"category-icon"}>
                  <img
                      src={!isActive ? imgSrc : imgSrcBold}
                      className={"category-image"}
                      alt="Menu Bar icon"
                  />
                </div>
                <div>{t(text)}</div>
              </div>
            </div>

        }
      </>
  );
};

export default Category;
