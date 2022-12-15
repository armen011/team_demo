import React, { FC, useState } from "react";
import CommentBox from "../Components/CommentBox";
import ContentBox from "../Components/ContentBox";
import HeaderPostComponent from "../Components/HeaderPostComponent";
import PostImages from "../Components/PostImages";
import ReactionBar from "../Components/ReactionBar";
import "./PostComponent.css";

type Tstate = {
  redHeartB:boolean,
  setRedHeartB:()=>void
}

const PostComponent: FC = () => {

  const [redHeartB,setRedHeartB] = useState(false)

  const handleDoubleClick = ()=>{
    if(!redHeartB){
      setRedHeartB(true)
    }
  }
 const  handleChangeHeart = ()=>{
  setRedHeartB(!redHeartB)
  }

  return (
    <div className="post_component_wrapper">
      <HeaderPostComponent/>
      <PostImages handleDoubleClick={handleDoubleClick}/>
      <ReactionBar redHeartB={redHeartB} handleChangeHeart={handleChangeHeart}/>
      <ContentBox/>
      <CommentBox/>
      
    </div>
  );
};

export default PostComponent;
