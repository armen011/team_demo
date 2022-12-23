import { FC, useState } from "react";
import "./CreateModal.css";
import Upload from "./Upload";
import Resize from "./Resize";
import Edit from "./Edit";
import Post from "./Post";

const Components = {
  resize: Resize,
  edit: Edit,
  post: Post,
  upload: Upload,
};

type ComponentsKeyType = keyof typeof Components;
export type ChangeStepFunctionType = (step: ComponentsKeyType) => void;

export type CreateModalProps = {
  handleCloseModal: () => void;
};

const CreateModal: FC<CreateModalProps> = ({ handleCloseModal }) => {
  const [step, setStep] = useState<ComponentsKeyType>("upload");

  const changeStep: ChangeStepFunctionType = (step) => {
    setStep(step);
  };

  const Component = Components[step];

  return (
    <div className="create_file_wrapper" onClick={handleCloseModal}>
      <div
        className={
          step === "upload" || step === "resize"
            ? "create_file_content"
            : "opened_poppup_filters"
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Component {...{ changeStep }} handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
};

export default CreateModal;
