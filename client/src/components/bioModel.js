import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "../utils/mutations";
import "./styles/modal.css";
import UploadFile from "./UploadFile";

const Mod = ({ doggle }) => {
  const [formData, setFormData] = useState({
    bio: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedImg, setUploadedImg] = useState(true);

  const [updateProfile, { loading, error }] = useMutation(UPDATE_PROFILE);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    updateProfile({ variables: formData })
      .then((result) => {
        console.log(result.data.updateProfile);
      })
      .catch((error) => {
        console.log(error);
        console.log("here");
      });
  };

  const handleImageUpload = (imageUrl) => {
    setImageUrl(imageUrl);
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="exit-btn" onClick={doggle}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Bio"
            />

            <div className="modal-flex">
              <button className="modal-btn" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
              <UploadFile
                handleImageUpload={handleImageUpload}
                uploadedImg={uploadedImg}
              />
            </div>

            {error && <p>Error: {error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mod;
