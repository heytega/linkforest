import React, { useState } from "react";
import "./Form.css";

const Form = ({ twitter }) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

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
            onChange={handleChange}
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
            onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
