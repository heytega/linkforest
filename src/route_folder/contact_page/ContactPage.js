import React from "react";
import "./ContactPage.css";
import Form from "../../component_folder/form_folder/Form";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "250vw",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: { type: "tween", delay: 0.5 },
  },
};

const ContactPage = ({ twitter }) => {
  return (
    <motion.div
      className="contact-page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask about anything you have in mind.</p>
      <Form twitter={twitter} />
    </motion.div>
  );
};

export default ContactPage;
