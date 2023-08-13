import React from "react";
import { Slide } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Slide left >
              <img
                src=".\src\assets\img\my-pic-1.jpeg"
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
                  {" "}
                  <p>
                    Hi, I'm Stephen Mov, a results-driven restaurant manager in
                    the midst of an exciting transition to become a full stack
                    developer.
                  </p>
                  <p>
                    In my 11 years of restaurant management, I've honed
                    leadership skills, orchestrated seamless operations, and
                    fostered a customer-centric environment. Now, I'm channeling
                    this same dedication into crafting impeccable web
                    experiences.
                  </p>
                  <p>
                    My coding journey started with HTML, CSS, and JavaScript and
                    has evolved to include cutting-edge technologies like React
                    and Node.js. I'm passionate about building elegant solutions
                    that prioritize user needs.My coding journey started with
                    HTML, CSS, and JavaScript and has evolved to include
                    cutting-edge technologies like React and Node.js. I'm
                    passionate about building elegant solutions that prioritize
                    user needs.
                  </p>
                  <p>
                    Transitioning from the dynamic restaurant industry, I bring
                    a proven track record of project management, teamwork, and a
                    sharp eye for detail. These qualities, coupled with my
                    coding skills, position me as an ideal candidate to bridge
                    the gap between user expectations and innovative technology.
                  </p>
                  <p>
                    When I'm not coding, you might find me experimenting with
                    new recipes or diving into coding challenges. I'm
                    enthusiastic about contributing my unique perspective and
                    skills to a forward-thinking team that values creativity and
                    customer focus. Let's connect and explore the exciting
                    possibilities of collaboration!
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

