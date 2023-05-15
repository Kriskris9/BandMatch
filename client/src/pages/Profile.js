import React from 'react';

const ProfilePage = () => {
  return (
    <div className="container">
      <form className="profile-form">
        <h1>Edit Profile</h1>
        <div className="profile-image">
          <img src="https://via.placeholder.com/150" alt="Profile Picture" />
          <button className="edit-image-btn">Edit Profile Picture</button>
        </div>
        
        <div className="profile-details">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"/>
          
          <label htmlFor="name">Email</label>
          <input type="text" id="name" name="name"/>
          
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio"></textarea>
          
          <label htmlFor="password"> Password</label>
          <input type="text" id="password" name="password"/>
        </div>
        
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ProfilePage;