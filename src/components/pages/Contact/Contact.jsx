import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center">
      <div className="container">
        <Slide bottom>
          <h2 className="mb-4">Get in Touch</h2>
        </Slide>
        <Slide bottom cascade>
          <div className="row">
            <div className="col-md-4">
              <a
                href="mailto:slmov215@gmail.com"
                className="contact-link"
              >
                <FaEnvelope className="contact-icon" />
                Email
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://www.linkedin.com/in/yourusername/"
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
          <Link to="/" className="btn btn-back">
            Back Home
          </Link>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
