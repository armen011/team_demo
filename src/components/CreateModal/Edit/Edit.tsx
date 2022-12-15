import { useAppDispatch, useAppSelector } from "app";
import ImageSlider from "../Components/ImageSlider";
import PostModalHeader from "../Components/PostModalHeader";
import filters from "./filters.json";
import filterImg from "assets/images/filterImg.jpg";
import "./edit.css";
import { ChangeEventHandler, FC, useCallback, useState } from "react";
import { ChangeStepFunctionType } from "../CreateModal";
import { updateStyles } from "features/post";

export type EditProps = {
  changeStep: ChangeStepFunctionType;
};

const Edit: FC<EditProps> = ({ changeStep }) => {
  const images = useAppSelector((state) => state.post.images);
  const [activeIndex, setActiveIndex] = useState(0);
  const [clonedStyles, setClonedStyles] = useState(
    images.map(({ style }) => style)
  );
  console.log("clonedStyles", clonedStyles);
  const dispatch = useAppDispatch();
  const currentSlideStyle = clonedStyles[activeIndex];

  const hanldleChangeFilter = useCallback(
    (property: string) => () => {
      setClonedStyles((prev) =>
        prev.map((style, index) =>
          index == activeIndex ? { ...style, filter: property } : style
        )
      );
    },
    [activeIndex]
  );

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  const handleGoBack = () => {
    changeStep("resize");
  };
  const handleGoNext = () => {
    dispatch(updateStyles(clonedStyles));
    changeStep("post");
    setClonedStyles([]);
  };

  console.log("currentSlideStyle", currentSlideStyle);

  return (
    <div className="edit_post_wrapper">
      <PostModalHeader
        {...{
          leftButton: { onClick: handleGoBack },
          rightButton: { title: "Next", onClick: handleGoNext },
          title: "Edit",
        }}
      />
      <div className="edit_content_wrapper">
        <div className="edit_slider_wrapper">
          <ImageSlider
            {...{ images, changeActiveIndex, externalStyle: currentSlideStyle }}
          />
        </div>
        <div className={"create_post_filters_wrapper"}>
          <div className="filter_divs_wrapper">
            {filters.map(({ style, name }, index) => {
              return (
                <div
                  className="filter_div"
                  key={index}
                  onClick={hanldleChangeFilter(style)}
                >
                  <img
                    src={filterImg}
                    alt=""
                    style={{ width: "100%", filter: `${style}` }}
                  />
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
