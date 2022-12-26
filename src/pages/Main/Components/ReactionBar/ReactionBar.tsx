import React, { FC  } from "react";
import "./ReactionBar.css";
import heart from "./icons/heart-icon.svg";
import comment from "./icons/comment-icon.svg";
import group from "./icons/Group.svg";
import redHeart from "./icons/red-heart-icon.svg"
import {useAppSelector} from "../../../../app";
import {useNavigate} from "react-router";

const ReactionBar: FC<{handleChangeHeart:()=>void , redHeartB:boolean,postOwner?:string}> = ({handleChangeHeart , redHeartB,postOwner }) => {

 const creatorId = useAppSelector(state => state.user._id)
    const navigate = useNavigate()
    const handlePostMessage = () => {
        fetch(
            'http://localhost:8800/api/chat',
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({creatorId, memberId: postOwner})
            }
        )
            .then((res) => res.json()).then(res => {
            navigate(`/messages/${res.id}`)
        })
    }

  return (
    <div className="icon_container">
      <div className="icons_bar">
        <div className="heart" onClick={handleChangeHeart}>
          {!redHeartB ? <img src={heart} alt="heart" /> :<img className="red_heart" src={redHeart} alt="heart" /> }
        </div>
        <div>
          <img src={comment} alt="comment" />
        </div>
        <div>
          {creatorId !== postOwner ? <img onClick={() => {
              handlePostMessage()
          }
          } src={group} alt="group" /> : null}
        </div>
      </div>
    </div>
  );
};

export default ReactionBar;
