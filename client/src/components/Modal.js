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
  });

  const [addProfileCard, { loading, error }] = useMutation(ADD_PROFILE_CARD);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log({ variables: formData });
    e.preventDefault();
    addProfileCard({ variables: formData })
      .then((result) => {
        console.log(result.data.addProfileCard);
      })
      .catch((error) => {
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

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>

            {error && <p>Error: {error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
