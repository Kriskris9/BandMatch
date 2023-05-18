import React, { useState } from "react";
import axios from "axios";
import "./styles/createPost.css";

function UploadFile({ handleImageUpload, uploadedImg }) {
  const preset_key = "ta3tfyyf";
  const cloud_name = "dx02mu5r0";

  const [image, setImage] = useState();

  const handleFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        setImage(res.data.secure_url);
        handleImageUpload(res.data.secure_url);
        alert("File Uploaded");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <label htmlFor="file-upload" className="cloud-btn">
          <input
            id="file-upload"
            type="file"
            name="image"
            onChange={handleFile}
            style={{ display: "none" }}
          />
          Media
        </label>
      </div>
    </div>
  );
}

export default UploadFile;
