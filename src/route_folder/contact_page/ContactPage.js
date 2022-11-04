import React from "react";
import "./ContactPage.css";
import Form from "../../component_folder/form_folder/Form";

const ContactPage = ({ twitter }) => {
  return (
    <div className="contact-page-container">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask about anything you have in mind.</p>
      <Form twitter={twitter} />
    </div>
  );
};

export default ContactPage;
