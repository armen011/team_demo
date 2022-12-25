import { ChangeEventHandler, FC, useState } from "react";
import PostModalHeader from "../Components/PostModalHeader";
import { ChangeStepFunctionType } from "../CreateModal";
import "./post.css";
import ImageSlider from "../Components/ImageSlider/index";
import { useAppSelector } from "app";
import { useAppDispatch } from "app/store";
import { createPost } from "features/post/postSlice";
import { useTranslation } from "react-i18next";
import user from "assets/images/user.png"

export type PostType = {
  changeStep: ChangeStepFunctionType;
  handleCloseModal:()=>void
};

const Post: FC<PostType> = ({ changeStep, handleCloseModal }) => {
  const [content, setContent] = useState("");
  const images = useAppSelector((state) => state.post.images);
  const userId = useAppSelector((state) => state.user._id) || "";

  const { username, profilePicture } = useAppSelector((s) => s.user);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const post = useAppSelector((s) => s.post);

  const handleContent: ChangeEventHandler<HTMLTextAreaElement> | undefined = ({
    target: { value },
  }) => {
    setContent(() => value);
  };

  const handleGoBack = () => {
    changeStep("edit");
  };
  const handleShare = () => {
    dispatch(createPost({ post: { ...post, content }, userId }));
    handleCloseModal()
    window.location.reload()
  };

  const a = t("Write_a_caption...");
  return (
    <div className="post_share_main_wrapper">
      <PostModalHeader
        {...{
          leftButton: { onClick: handleGoBack },
          rightButton: { title: "Share", onClick: handleShare },
          title: "Create_new_post",
        }}
      />
      <div className="post_share_content_wrapper">
        <div className="post_slider_wrapper">
          <ImageSlider {...{ images }} />
        </div>
        <div className="post_title_wrapper">
          <div className="post_user_info_wrapper">
            <img src={profilePicture || user} />
            <h3>{username}</h3>
          </div>
          <div className="post_content_wrapper">
            <textarea
              cols={30}
              rows={10}
              onChange={handleContent}
              value={content}
              placeholder={a}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
