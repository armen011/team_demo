import { useRef } from "react";

// @ts-ignore
const FileUploader = ({ onFileSelectSuccess, onFileSelectError }) => {
  const fileInput = useRef(null);

  // @ts-ignore
  const handleFileInput = ({ target: { files } }) => {
    const file = files[0];
    if (file.size > 1024)
      onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
    </div>
  );
};

export default FileUploader;
