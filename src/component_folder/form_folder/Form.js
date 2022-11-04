import React, { useState } from "react";
import "./Form.css";

const Form = ({ twitter }) => {
  const [firstName, setFirstName] = useState("");
  return (
    <form>
      <div className="form-flex-container">
        <div className="form-control">
          <label htmlFor="firstName">Name </label>
          <input
            type="text"
            id="first_name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            id="last_name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="email">Name : </label>
        <input
          type="text"
          id="email"
          name="email"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="message">Message : </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Send me a message and I'll reply as soon as possible..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></textarea>
      </div>
      <div className="checkbox">
        <input type="checkbox" name="checkbox" />
        <label htmlFor="checkbox">
          You agree to providing your data to {twitter.username} who may contact
          you
        </label>
      </div>
    </form>
  );
};

export default Form;
