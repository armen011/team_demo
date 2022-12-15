import PostModalHeader from "../Components/PostModalHeader";
import { useAppDispatch, useAppSelector } from "app/store";
import { ChangeEventHandler, FC, useCallback, useState } from "react";
import { ReactComponent as SizeImg } from "assets/images/sizeImg.svg";
import ImageSlider from "../Components/ImageSlider";
import { resetPostState, updateStyles } from "features/post";
import { ChangeStepFunctionType } from "../CreateModal";
import "./resize.css" 

export type ResizeType = {
  changeStep: ChangeStepFunctionType;
};

const Resize: FC<ResizeType> = ({ changeStep }) => {
  const { images } = useAppSelector((s) => s.post);
  const [imgSizePoppup, setImgSizePoppup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [clonedStyles, setClonedStyles] = useState(
    images.map(({ style }) => style)
  );
  const dispatch = useAppDispatch();
  const currentSlideStyle = clonedStyles[activeIndex];

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  const hanldleResize: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      setClonedStyles((prev) =>
        prev.map((style, index) =>
          index == activeIndex ? { ...style, scale: value } : style
        )
      );
    },
    [activeIndex]
  );

  const handleInputSize = () => {
    setImgSizePoppup((prev) => !prev);
  };

  const handleGoBack = () => {
    dispatch(resetPostState());
    changeStep("upload");
  };
  const handleGoNext = () => {
    dispatch(updateStyles(clonedStyles));
    changeStep("edit");
    setClonedStyles([]);
  };

  return (
    <div className="create_newPost_photo_wrapper">
      <PostModalHeader
        {...{
          leftButton: { onClick: handleGoBack },
          rightButton: { title: "Next", onClick: handleGoNext },
          title: "Crop",
        }}
      />
      <div className="create_img_show_wrapper">
        <div className="create_img_wrapper">
          <ImageSlider
            {...{ images, changeActiveIndex, externalStyle: currentSlideStyle }}
          />
          <div className={!imgSizePoppup ? "none_style" : "img_size_poppup"}>
            <input
              type="range"
              min="1"
              max="2"
              value={currentSlideStyle?.scale || 1}
              step="0.1"
              onChange={hanldleResize}
            />
          </div>
          <div className="create_post_icon_wrappers">
            <SizeImg onClick={handleInputSize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resize;
