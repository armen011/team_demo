import "./CreateModal.css";
import { useState } from "react";

const CreateModal = () => {
  const [file, setFile] = useState<File>();

  const handleUploadFile = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      // @ts-ignore
      const images = [...files];

      // @ts-ignore
      setFile(() => {
        return images.map((el) => URL.createObjectURL(el));
      });
    }
  };
  // @ts-ignore
  // {file && file.map((el) => <img src={el} style={{width:"200px"}} />)}

  console.log('file', file)
  return (
    <div className="create_file_wrapper">
      <div className="create_file_content">
        {!file ? (
          <div className="input_file_wrapper">
            Click here
            <input type="file" multiple onChange={handleUploadFile} />
          </div>
        ) : (
          <div style={{width:"100%", height:"100%"}}> 
          {/* @ts-ignore */}
            <img src={file && file[0]} style={{width:"100%", height:"100%"}} /> 
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateModal;
