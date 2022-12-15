import React, { FC } from "react";
import "./PostImages.css";

type ThandleDoubleClick = {
  handleDoubleClick:()=>void
}

const PostImages: FC<ThandleDoubleClick> = ({handleDoubleClick}) => {
  return (
    <div className="image_container" onDoubleClick={handleDoubleClick}>
        <img src="https://assets.telegraphindia.com/telegraph/2021/Jul/1625947754_cristiano-ronaldo-1.jpg" alt="" />
    </div>
  )
};

export default PostImages;
