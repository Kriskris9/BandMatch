import React,{useState} from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "../utils/mutations";
import "./styles/modal.css";

    const Mod = ({doggle}) =>{
        const [formData, setFormData]= useState({
            bio:"",
            profilePic:""
        });

    const [updateProfile,{loading,error}] = useMutation(UPDATE_PROFILE);
    
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        updateProfile({ variables: formData })
          .then((result) => {
            console.log(result.data.updateProfile);
          })
          .catch((error) => {
            console.log(error);
          });

    };
    return(
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
             <input
              type="text"
              name="profilePic"
              value={formData.profilePic}
              onChange={handleChange}
              placeholder="profile Pic"
            />
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>

            {error && <p>Error: {error.message}</p>}
          </form>
          <button className="create-btn">Update your profile</button>
        </div>
      </div>
    </div>

    );
 };

 export default Mod;