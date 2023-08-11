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
            <Slide left>
              <img
                src="\src\assets\img\my-pic-1.jpeg" // Replace with your photo path
                alt="Your Name"
                className="img-fluid rounded-circle about-img"
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

{
  /* <div><p>
                    Hello! I'm Stephen Mov, a passionate and dynamic
                    professional with a diverse background in restaurant
                    management and an exciting new journey as a full stack
                    developer.<br></br>
                  </p>
                  <p>
                    For the past 10 years, I have thrived in the fast-paced and
                    customer-centric environment of the restaurant industry. As
                    a restaurant manager, I honed my skills in leadership, team
                    building, and problem-solving, ensuring seamless operations
                    and delivering exceptional dining experiences for our
                    guests.
                    <br></br>
                  </p>
                  <p>
                    However, my insatiable curiosity and fascination with
                    technology have led me to embark on a thrilling career
                    transition into the world of full stack development. I
                    believe that like running a successful restaurant, building
                    robust and user-friendly web applications requires a perfect
                    blend of creativity, efficiency, and attention to detail.
                    <br></br>
                  </p>
                  <p>
                    My programming journey began with self-guided learning and
                    online courses, where I gained proficiency in languages such
                    as HTML, CSS, JavaScript, and React. These skills ignited my
                    passion for software development, and I have since delved
                    into various frameworks and libraries, including React,
                    Node.js, and Django. The process of creating intuitive
                    interfaces and bringing ideas to life through code has been
                    incredibly fulfilling, and I am eager to continue exploring
                    new technologies and evolving as a developer.<br></br>
                  </p>
                  <p>
                    As a former restaurant manager, I bring a unique perspective
                    to software development. I excel at collaborating with
                    diverse teams, managing multiple projects simultaneously,
                    and maintaining a strong commitment to delivering results on
                    time. My experience in customer service has instilled in me
                    a customer-centric approach to development, ensuring that
                    the end-users' needs are at the forefront of every project I
                    work on. <br></br>
                  </p>
                  <p>
                    In my free time, you can often find me experimenting with
                    new coding challenges, contributing to open-source projects,
                    or seeking inspiration in the culinary world to bring
                    innovative ideas into both code and cuisine. <br></br>
                  </p>

                  <p>
                    I am thrilled about the prospect of combining my past
                    experience and my newfound passion for full stack
                    development to create impactful and delightful digital
                    experiences. I am actively seeking opportunities to
                    contribute my skills and expertise to a forward-thinking
                    team where I can make a meaningful difference.
                    <br></br>
                  </p>
                  <p>
                    Thank you for taking the time to learn a little bit about
                    me. If you would like to connect or discuss potential
                    collaborations, I would love to hear from you. Let's build
                    something extraordinary together!
                  </p></div> */
}
