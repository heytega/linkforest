import React, { useState } from "react";
import "./Header.css";
import Profile_img from "../../images/profile__img.png";

const Header = () => {
  const [twitter, setTwitter] = useState({
    id: "twitter",
    username: "Annette Black",
  });

  const [slack, setSlack] = useState({
    id: "slack",
    username: "Tega Akpovbiyor",
  });

  return (
    <div className="header-container">
      <div className="profile-section">
        <img src={Profile_img} alt="Profile display" id="profile_img" />
        <h1 id={twitter.id}>{twitter.username}</h1>
        <h1 id={slack.id}>{slack.username}</h1>
      </div>
    </div>
  );
};

export default Header;
