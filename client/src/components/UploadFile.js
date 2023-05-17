import React, { useState } from 'react';
import axios from 'axios';

function UploadFile({ handleImageUpload, uploadedImg }) {
  const preset_key = 'ta3tfyyf';
  const cloud_name = 'dx02mu5r0';

  const [image, setImage] = useState();

  const handleFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    formData.append('upload_preset', preset_key);
    axios
      .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
      .then((res) => {
        setImage(res.data.secure_url);
        handleImageUpload(res.data.secure_url); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center bg-dark vh-100'>
      <div className='w-25 bg-white mt-5 p-5'>
        <input type="file" name="image" onChange={handleFile}></input>
      </div>
      <br />
      <br />
      {uploadedImg && image && <img src={image} alt="Uploaded" />}
    </div>
  );
}

export default UploadFile;