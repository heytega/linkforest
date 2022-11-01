import React from "react";
import "./Header.css";
import Profile_img from "../../images/profile_img.png";
import Share_btn from "../../images/share_btn.svg";
import Share_btn_mob from "../../images/share_btn_mob.svg";

const Header = ({ twitter, slack }) => {
  return (
    <div className="profile-section">
      <button className="btn desk_btn">
        <img src={Share_btn} alt="share avatar" />
      </button>
      <button className="btn mob_btn">
        <img src={Share_btn_mob} alt="share avatar" />
      </button>
      <img src={Profile_img} alt="profile display" id="profile_img" />
      <h1 id={twitter.id}>{twitter.username}</h1>
      <h1 id={slack.id}>{slack.username}</h1>
    </div>
  );
};

export default Header;
