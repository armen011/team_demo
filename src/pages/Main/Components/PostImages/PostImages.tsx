import ImageSlider from "components/CreateModal/Components/ImageSlider";
import { Timages } from "pages/Main/PostComponent/PostComponent";
import React, { FC } from "react";

import "./PostImages.css";

type ThandleDoubleClick = {
  handleDoubleClick: () => void;
};



type Tprops = {
  handleDoubleClick:() => void,
  images:Timages
}



const PostImages: FC<Tprops> = ({ handleDoubleClick , images}) => {
  return (
    <div className="image_container" onDoubleClick={handleDoubleClick}>
      <ImageSlider images={images} />
    </div>
  );
};

export default PostImages;
