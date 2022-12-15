import { FC } from "react";
import { ReactComponent as CancelImg } from "assets/images/cancelImg.svg";

export type PostModalHeaderProps = {
  leftButton: {
    onClick: () => void;
  };
  rightButton: {
    title: string;
    onClick: () => void;
  };
  title: string;
};

const PostModalHeader: FC<PostModalHeaderProps> = ({
  leftButton,
  rightButton,
  title,
}) => {
  return (
    <div className="create_next_and_cancel_wrapper">
      <CancelImg className="cancel_img" onClick={leftButton.onClick} />
      <h1>{title}</h1>
      <button className="create_post_next_button" onClick={rightButton.onClick}>
        {rightButton.title}
      </button>
    </div>
  );
};

export default PostModalHeader;
