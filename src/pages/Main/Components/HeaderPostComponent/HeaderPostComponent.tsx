import React, {FC, useCallback, useState} from "react";
import "./HeaderPostComponent.css";
import information from "../ReactionBar/icons/more.png";
import UserPopup from "../UserPopup";
import {useAppSelector} from "../../../../app";

const HeaderPostComponent: FC<{userId:string,postId:string}> = ({userId,postId}) => {
  const [style, setStyle] = useState("");

  const ownId = useAppSelector(s=>s.user._id);

  const handleClosePopup = ()=>{
    document.body.classList.remove("no_scroll")
    setStyle("")
  }


  const deletePost = useCallback(():void => {
    fetch(`http://localhost:8800/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId:ownId
      })
    }).then(r => r.json()).then((r) => {
      console.log(r);
      handleClosePopup();
      window.location.reload();
    }).catch((e) => console.log(e));
  },[postId]);

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
          
          
        </div>
        <div className="information" onClick={() => {
          document.body.classList.add("no_scroll")
          setStyle("block")
          
        }}>
          <img src={information} alt="information" />
        </div>
        <UserPopup userId={userId} ownId={ownId} style={style} handleClosePopup={handleClosePopup} deletePost={deletePost} />
        
      </div>
    </>
  );
};

export default HeaderPostComponent;
