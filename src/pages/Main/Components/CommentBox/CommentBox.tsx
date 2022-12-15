import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import "./CommentBox.css";

const CommentBox: FC = () => {
  const [comment, setComment] = useState("");
  const {t} = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const tplaceHolder = t("Add a comment...")
  
  

  return (
    <div className="comment_container">
      <div className="comment_wrapper">
        <div className="aa">
          <input
            onChange={handleChange}
            value={comment}
            placeholder={tplaceHolder}
          />
        </div>
        <div className="post_button">
          <button disabled={!comment?true:false}>{t("Post")}</button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
