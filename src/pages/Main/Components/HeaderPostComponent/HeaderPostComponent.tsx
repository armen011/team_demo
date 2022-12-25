import React, {FC, useCallback, useEffect, useState} from "react";
import "./HeaderPostComponent.css";
import information from "../ReactionBar/icons/more.png";
import UserPopup from "../UserPopup";
import {useAppSelector} from "../../../../app";
import {TUserState} from "../../../EachUserProfile/EachUserProfile";
import userIcon from 'assets/images/user.png'
import {useNavigate} from "react-router";

const HeaderPostComponent: FC<{userId:string,postId:string}> = ({userId,postId}) => {
  const [style, setStyle] = useState("");
  const [postInfo, setPostInfo] = useState<TUserState>()
  const ownId = useAppSelector(s=>s.user._id);

  const handleClosePopup = ()=>{
    document.body.classList.remove("no_scroll")
    setStyle("")
  }

    useEffect(() => {
      fetch(
          `http://localhost:8800/api/users/${userId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" }})
          .then((res) => res.json()).then(res=> setPostInfo(res))
    }, [])

  const navigate = useNavigate()

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
                src={postInfo?.profilePicture ? postInfo?.profilePicture : userIcon}
              alt="avatar"
            />
            
          </div>
          <div className="user_name" onClick={() => {
            if (postInfo?._id !== ownId) {
              navigate(`users/${postInfo?._id}`)
            }else{
              navigate('/profile')
            }
          }}>
            {postInfo?.username}
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
