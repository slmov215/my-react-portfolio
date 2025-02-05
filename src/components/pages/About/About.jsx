import React from "react";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import ImagePath from "../../../assets/images/my-pic-1.jpeg";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-6">
            <Slide left>
              <img
                src={ImagePath}
                alt="Stephen Mov"
                className="img-fluid rounded-circle about-img animated-image"
              />
            </Slide>
          </div>

          {/* About Me Content */}
          <div className="col-md-6">
            <Slide right>
              <div className="about-content">
                <h2>About Me</h2>
                <p>
                  Hi, I'm <strong>Stephen Mov</strong>, a <strong>Full Stack Developer</strong> and <strong>Data Analyst</strong> 
                  passionate about building efficient, user-centric applications and uncovering actionable insights from data.
                </p>
                <p>
                  With <strong>12 years of experience as a restaurant manager</strong>, I developed expertise in leadership, 
                  problem-solving, and business operations. Now, I apply those skills to developing 
                  innovative solutions in web development and data analytics.
                </p>

                {/* Skills Breakdown */}
                <div className="about-skills">
                  <p>🔹 <strong>Full Stack Development</strong> – Proficient in JavaScript, React, Node.js, Express, and database management, 
                    with a focus on scalable and user-friendly applications.
                  </p>
                  <p>🔹 <strong>Data Analysis & Visualization</strong> – Skilled in Python, R, SQL, and Tableau, leveraging data-driven insights 
                    for business optimization and user experience enhancement.
                  </p>
                  <p>🔹 <strong>Business & Technology Integration</strong> – Bridging the gap between customer needs and technical solutions, 
                    blending business acumen with software development expertise.
                  </p>
                </div>

                <p>
                  Whether it's developing high-performance web applications or uncovering meaningful patterns in data, 
                  I thrive on solving real-world problems with technology. Let's connect and create impactful solutions together!
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
