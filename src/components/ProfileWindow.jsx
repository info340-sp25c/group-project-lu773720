import React from "react";
//import "./ProfileWindow.css"; // Make sure to include this CSS file in your build

export function ProfileWindow({
  username = "User",
  handle = "@YourUsername",
  profileImage = "img/profile.png"
}) {
  return (
    <header>
      <div className="profile">
        <div className="profile-text">
          <h1>Welcome back, {username}!</h1>
          <p className="username">{handle}</p>
        </div>
        <div className="profile-pic-wrapper">
          <img src={profileImage} alt="profile" className="profile-pic" />
        </div>
      </div>
    </header>
  );
}
