import React from "react";
import "./Header.css";
import Profile_image from "../../images/profile__img.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="profile-container">
        <img src={Profile_image} alt="profile image" id="profile_img" />
        <h1>ChristianTae</h1>
      </div>
    </div>
  );
};

export default Header;
