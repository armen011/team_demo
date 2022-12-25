import React, { FC  } from "react";
import "./ReactionBar.css";
import heart from "./icons/heart-icon.svg";
import comment from "./icons/comment-icon.svg";
import group from "./icons/Group.svg";
import redHeart from "./icons/red-heart-icon.svg"

const ReactionBar: FC<{handleChangeHeart:()=>void , redHeartB:boolean}> = ({handleChangeHeart , redHeartB }) => {



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
          <img src={group} alt="group" />
        </div>
      </div>
    </div>
  );
};

export default ReactionBar;
