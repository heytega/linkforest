import React, { useState } from "react";
import "./Form.css";

const Form = ({ twitter }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <div className="form-flex-container">
        <div className="form-control">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="first_name"
            name="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <span className="helperText">helper text</span>
        </div>
        <div className="form-control">
          <label htmlFor="firstName">Last name</label>
          <input
            type="text"
            id="last_name"
            name="firstName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <span className="helperText">helper text</span>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Yourname@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="helperText">helper text</span>
      </div>

      <div className="form-control">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message and I'll reply as soon as possible..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <span className="helperText">helper text</span>
      </div>

      <div className="form-control">
        <label className="checkbox-container">
          You agree to providing your data to {twitter.username} who may contact
          you
          <input type="checkbox" required />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="form-control">
        {/* <input className="btn" value="Send message" /> */}
        <button className="btn" id="btn__submit">
          Send message
        </button>
      </div>
    </form>
  );
};

export default Form;
