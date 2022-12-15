import React, { FC, useState } from "react";
import "./HeaderPostComponent.css";
import information from "../ReactionBar/icons/more.png";
import UserPopup from "../UserPopup";

const HeaderPostComponent: FC = () => {
  const [style, setStyle] = useState("");

  const handleClosePopup = ()=>{
    document.body.classList.remove("no_scroll")
    document.body.classList.remove("block")
    setStyle("")
  }
  return (
    <>
      {style && <div onClick={handleClosePopup} className="grey"></div>}
      <div className="header_container_a">
        <div className="avatar_wrapper">
          <div className="avatar">
            <img
              src="https://assets-fr.imgfoot.com/media/cache/1200x1200/cristiano-ronaldo-enerve.jpg"
              alt="avatar"
            />
            
          </div>
          <div className="user_name">
            userName
          </div>
          {/* <HoverPopup/> */}
          
        </div>
        <div className="information" onClick={() => {
          document.body.classList.add("no_scroll")
          document.body.classList.add("block")
          setStyle("block")
          
        }}>
          <img src={information} alt="information" />
        </div>
        <UserPopup style={style} handleClosePopup={handleClosePopup} />
        
      </div>
    </>
  );
};

export default HeaderPostComponent;
