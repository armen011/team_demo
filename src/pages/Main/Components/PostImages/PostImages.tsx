import ImageSlider from "components/CreateModal/Components/ImageSlider";
import { TImages } from "pages/Main/PostComponent/PostComponent";
import React, { FC } from "react";

import "./PostImages.css";





type Tprops = {
  handleChangeHeart:() => void,
  images:TImages
}



const PostImages: FC<Tprops> = ({ handleChangeHeart , images}) => {
  return (
    <div className="image_container" onDoubleClick={handleChangeHeart}>
      <ImageSlider images={images} />
    </div>
  );
};

export default PostImages;
