import React from "react";
//import "./ProfileWindow.css"; // Make sure to include this CSS file in your build

export function ProfileWindow({ profileImage = "img/profile.png", user }) {
  if (!user) {
    return (
      <header>
        <div className="profile">
          <div className="profile-text">
            <h1>Welcome back!</h1>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header>
      <div className="profile">
        <div className="profile-text">
          <h1>Welcome back, {user.displayName}!</h1>
          <p className="email">{user.email}</p>
        </div>
        <div className="profile-pic-wrapper">
          <img src={profileImage} alt="profile" className="profile-pic" />
        </div>
      </div>
    </header>
  );
}

