import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const validateEmail = (email) => {
    // Simple email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
    } else if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    } else {
      console.log("Form submitted:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({ name: false, email: false });
    }
  };

  return (
    <section id="contact" className="py-5 text-center">
      <div className="container">
        <Slide bottom>
          <h2 className="mb-4">Get in Touch</h2>
        </Slide>
        <Slide bottom cascade>
          <div className="row">
            <div className="col-md-4">
              <a href="mailto:slmov215@gmail.com" className="contact-link">
                <FaEnvelope className="contact-icon" />
                Email
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://www.linkedin.com/in/stephen-mov-636583288/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin className="contact-icon" />
                LinkedIn
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://github.com/slmov215"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaGithub className="contact-icon" />
                GitHub
              </a>
            </div>
          </div>
        </Slide>
        <Slide bottom>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className={`form-control ${
                  errors.name ? "is-invalid" : ""
                }`}
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <div className="invalid-feedback">Name is required</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              )}
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Slide>
        <Slide bottom>
          <Link to="/" className="btn btn-back">
            Back Home
          </Link>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
