import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE_CARD } from "../utils/mutations";
import "./styles/modal.css";

const Modal = ({ toggle }) => {
  const [formData, setFormData] = useState({
    experience: "",
    instrument: "",
    genres: "",
    image: "",
    text: "",
    location: "",
    username: "",
  });

  const [addProfileCard, { loading, error }] = useMutation(ADD_PROFILE_CARD);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfileCard({ variables: formData })
      .then((result) => {
        // Handle successful submission
        console.log(result.data.addProfileCard);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="exit-btn" onClick={toggle}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            {/* Your form fields here */}
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience"
            />
            <input
              type="text"
              name="instrument"
              value={formData.instrument}
              onChange={handleChange}
              placeholder="Instrument"
            />
            <input
              type="text"
              name="genres"
              value={formData.genres}
              onChange={handleChange}
              placeholder="Genres"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
            />
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Text"
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>

            {error && <p>Error: {error.message}</p>}
          </form>
          <button className="create-btn">Create Post</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
