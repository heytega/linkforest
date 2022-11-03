import React from "react";
import "./Socials.css";
import SlackIcon from "../../images/slack.svg";
import GithubIcon from "../../images/Social_icon.svg";

const Socials = () => {
  return (
    <div className="social-section">
      <a href="https://slack.com/" target="_blank" rel="noreferrer">
        <img className="slack" src={SlackIcon} alt="slack" />
      </a>
      <a href="https://github.com/heytega" target="_blank" rel="noreferrer">
        <img src={GithubIcon} alt="github" />
      </a>
    </div>
  );
};

export default Socials;
