import ImageSlider from "components/CreateModal/Components/ImageSlider";
import React, { FC } from "react";

import "./PostImages.css";

type ThandleDoubleClick = {
  handleDoubleClick: () => void;
};

const images = [{file:"https://static.javatpoint.com/computer/images/what-is-the-url.png", style:{}} , {file:"https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg" , style:{}}]

const PostImages: FC<ThandleDoubleClick> = ({ handleDoubleClick }) => {
  return (
    <div className="image_container" onDoubleClick={handleDoubleClick}>
      <ImageSlider images={images} />
    </div>
  );
};

export default PostImages;
