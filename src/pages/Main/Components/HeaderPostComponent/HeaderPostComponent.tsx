import React, { FC, useState } from "react";
import "./HeaderPostComponent.css";
import information from "../ReactionBar/icons/more.png";
import UserPopup from "../UserPopup";
import userImage from "assets/images/user.png"

const HeaderPostComponent: FC<{userId:string, fullName: string | undefined, avatarUrl: string | undefined}> = ({userId,fullName,avatarUrl}) => {
  const [style, setStyle] = useState("");

  const handleClosePopup = ()=>{
    document.body.classList.remove("no_scroll")
    setStyle("")
  }
  return (
    <>
      {style && <div onClick={handleClosePopup} className="grey"></div>}
      <div className="header_container_a">
        <div className="avatar_wrapper">
          <div className="avatar">
            <img
              src={avatarUrl||userImage }
              alt="avatar"
            />
            
          </div>
          <div className="user_name">
            {fullName}
          </div>
          
          
        </div>
        <div className="information" onClick={() => {
          document.body.classList.add("no_scroll")
          setStyle("block")
          
        }}>
          <img src={information} alt="information" />
        </div>
        <UserPopup userId={userId} style={style} handleClosePopup={handleClosePopup} />
        
      </div>
    </>
  );
};

export default HeaderPostComponent;
