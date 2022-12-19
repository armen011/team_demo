import { useAppDispatch } from "app";
import { FC } from "react";
import { ChangeStepFunctionType } from "../CreateModal";
import "./upload.css";
import { addImages } from "features/post";
import { ReactComponent as UploadIcon } from "assets/icon/upload_icon.svg";
import UTILS from "utils";
import { useTranslation } from "react-i18next";

export type UploadType = {
  changeStep: ChangeStepFunctionType;
};

const Upload: FC<UploadType> = ({ changeStep }) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch();
  const handleUploadFile = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      Promise.all(
        Array.from(files).map(async (file) => {
          const encodedFile = await UTILS.encodeImageFileAsURL(file);
          return {
            style: {},
            file: encodedFile,
          };
        })
      ).then((images) => {
        dispatch(addImages(images));
        changeStep("resize");
      });
    }
  };

  return (
    <div className="upload_content">
      <div>{t("Create_new_post")}</div>
      <UploadIcon />
      <h2>{t("Drag_photos_and_videos_here")}</h2>
      <button className="input_file_wrapper">
        {t("Select_from_computer")}
        <input type="file" multiple onChange={handleUploadFile} />
      </button>
    </div>
  );
};

export default Upload;
