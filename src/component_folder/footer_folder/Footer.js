import React from "react";
import "./Footer.css";
import ZuriLogo from "../../images/zuri_logo.svg";
import I4gLogo from "../../images/4G.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://internship.zuri.team/" target="_blank" rel="noreferrer">
        <img src={ZuriLogo} alt="Zuri Logo" />
      </a>
      <h2>HNG Internship 9 Frontend Task</h2>
      <a href="https://i4g.zuriboard.com/" target="_blank" rel="noreferrer">
        <img src={I4gLogo} alt="I4G Logo" />
      </a>
    </div>
  );
};

export default Footer;
