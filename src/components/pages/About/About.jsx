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
          <div className="col-md-6">
            <Slide left >
              <img
                src={ImagePath}
                // src="..\src\assets\img\my-pic-1.jpeg"
                alt="Your Name"
                className="img-fluid rounded-circle about-img animated-image"
              />
            </Slide>
          </div>
          <div className="col-md-6">
            <Slide right>
              <div className="about-content">
                <h2>About Me</h2>
                <div right>
                  <p>
                    Hi! My name is Stephen Mov, a results-driven restaurant manager 
                    turned full-stack developer and data analyst.
                  </p>
                  <p>
                  With 12 years of leadership experience in restaurant management, 
                  I've honed my skills in project coordination, team leadership, 
                  and customer-focused problem-solving. Now, I’m leveraging these 
                  strengths to build seamless and impactful digital experiences.
                  </p>
                  <p>
                  My journey in tech started with HTML, CSS, and JavaScript, 
                  expanding into React, Node.js, and Express for full-stack development. 
                  Recently, I completed a Data Analytics Boot Camp, where I developed 
                  proficiency in Python, R, SQL, and Tableau, further enhancing my 
                  ability to work with data-driven solutions.
                  </p>
                  <p>
                  Transitioning from a fast-paced industry, I bring a unique combination 
                  of management expertise, analytical skills, and a strong user-first approach. 
                  Whether I’m crafting a dynamic web application or analyzing data to uncover insights, 
                  I’m always focused on delivering value through technology.
                  </p>
                  <p>
                  When I’m not coding, you’ll likely find me experimenting with new recipes or 
                  tackling coding challenges. I'm eager to collaborate with innovative teams 
                  that value creativity, efficiency, and user-centric solutions. 
                  Let’s connect and build something great!
                  </p>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

