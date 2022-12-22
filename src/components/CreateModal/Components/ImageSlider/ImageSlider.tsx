import { PostImageType } from "features/post";
import { CSSProperties, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./imageSlider.css";
import { Timages } from "pages/Main/PostComponent/PostComponent";

export type ImageSliderProps = {
  images: PostImageType[] | Timages;
  changeActiveIndex?: (index: number) => void;
  externalStyle?: CSSProperties;
};

const ImageSlider: FC<ImageSliderProps> = ({
  images,
  changeActiveIndex,
  externalStyle,
}) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="my_swiper"
      onSlideChange={(key) => {
        changeActiveIndex && changeActiveIndex(key.activeIndex);
      }}
    >
      {images.map(({ file, style }, index) => (
        <SwiperSlide className="slide_wrapper" key={index}>
          <img src={file} alt="" style={externalStyle || style} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
