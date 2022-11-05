import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Form.css";

const helperVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Form = ({ twitter }) => {
  const [showHelper, setShowHelper] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

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

  const showHelperText = (e) => {
    const tag = e.target.name;
    if (tag === "firstName") {
      setShowHelper({
        lastName: false,
        email: false,
        message: false,
        [tag]: true,
      });

      setTimeout(() => {
        setShowHelper((prev) => {
          return { ...prev, [tag]: false };
        });
      }, 3000);
    }

    if (tag === "lastName") {
      setShowHelper({
        [tag]: true,
        firstName: false,
        email: false,
        message: false,
      });

      setTimeout(() => {
        setShowHelper((prev) => {
          return { ...prev, [tag]: false };
        });
      }, 3000);
    }

    if (tag === "email") {
      setShowHelper({
        [tag]: true,
        firstName: false,
        lastName: false,
        message: false,
      });

      setTimeout(() => {
        setShowHelper((prev) => {
          return { ...prev, [tag]: false };
        });
      }, 3000);
    }
    if (tag === "message") {
      setShowHelper({
        [tag]: true,
        firstName: false,
        email: false,
        lastName: false,
      });

      setTimeout(() => {
        setShowHelper((prev) => {
          return { ...prev, [tag]: false };
        });
      }, 5000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <div className="form-flex-container">
        <div className="form-control ">
          <label htmlFor="firstName">First name</label>
          <input
            onClick={showHelperText}
            required
            autoComplete="off"
            type="text"
            id="first_name"
            name="firstName"
            placeholder="Enter your first name"
            value={person.firstName}
            onChange={handleChange}
          />
          {showHelper.firstName && (
            <motion.span
              className="helperText"
              variants={helperVariant}
              initial="hidden"
              animate="visible"
            >
              Hint: What you would like us to call you
            </motion.span>
          )}
        </div>
        <div className="form-control control-last">
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              onClick={showHelperText}
              required
              autoComplete="off"
              type="text"
              id="last_name"
              name="lastName"
              placeholder="Enter your last name"
              value={person.lastName}
              onChange={handleChange}
            />
            {showHelper.lastName && (
              <motion.span
                className="helperText"
                variants={helperVariant}
                initial="hidden"
                animate="visible"
              >
                Hint: Perferably your surname
              </motion.span>
            )}
          </div>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          onClick={showHelperText}
          required
          autoComplete="off"
          type="email"
          id="email"
          name="email"
          placeholder="Yourname@email.com"
          value={person.email}
          onChange={handleChange}
        />
        {showHelper.email && (
          <motion.span
            className="helperText"
            variants={helperVariant}
            initial="hidden"
            animate="visible"
          >
            Hint: An email readily accessible to you
          </motion.span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="message">Message</label>
        <textarea
          required
          onClick={showHelperText}
          name="message"
          id="message"
          placeholder="Send me a message and I'll reply as soon as possible..."
          value={person.message}
          onChange={handleChange}
        ></textarea>
        {showHelper.message && (
          <motion.span
            className="helperText"
            variants={helperVariant}
            initial="hidden"
            animate="visible"
          >
            Hint: Keep it concise and straight to the point.
          </motion.span>
        )}
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
        <button className="btn" id="btn__submit" type="submit">
          Send message
        </button>
      </div>
    </form>
  );
};

export default Form;
