import WeatherApp from "../../../../assets/images/weather-dashboard-screen-shot.gif";
import project1 from "../../../../assets/images/project-1.png";
import employeeTracker from "../../../../assets/images/employee-tracker-demo.gif";
// import techBlog from "../../../../assets/images/my-tech-blog.jpeg";
import project2 from "../../../../assets/images/project-2.png";
import pwa from "../../../../assets/images/pwa-text-editor.gif";
import habit from "../../../../assets/images/habit-screen-shot.png";

const projectsData = [
  {
    title: "Weather App",
    image: WeatherApp,
    description:
      "A weather dashboard that retrieves real-time weather data for any city. Users can search for a location and get a 5-day forecast with temperature, humidity, wind speed, and weather conditions.",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    link: "https://slmov215.github.io/weather-dashboard/",
    gitHub: "https://github.com/slmov215/weather-dashboard",
  },
  {
    title: "Food Focus (Project 1)",
    image: project1,
    description:
      "A recipe search app where users can find various dishes. My role focused on designing the vegan page and implementing JavaScript to fetch recipes using an external API.",
    techStack: ["JavaScript", "HTML", "CSS", "Third-Party API"],
    link: "https://paulnxn1.github.io/food_Focus/Vegan/veganIndex.html",
    gitHub: "https://github.com/PaulNXN1/food_Focus",
  },
  {
    title: "Employee Tracker",
    image: employeeTracker,
    description:
      "A command-line application that enables business owners to manage and track employees using MySQL. Users can add, update, and remove employees, roles, and departments.",
    techStack: ["Node.js", "MySQL", "Inquirer"],
    link: "https://drive.google.com/file/d/1r7yIBk7enMAX2aziXzwKoqegtvwp2hHs/view",
    gitHub: "https://github.com/slmov215/employee-traker-sql",
  },
  {
    title: "Bookbusta (Project 2)",
    image: project2,
    description:
      "A full-stack web application for book lovers. Users can search for books, add favorites, leave reviews, and interact with a community of readers.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://bookbusta-950538aa625f.herokuapp.com/",
    gitHub: "https://github.com/Nneifem/bookbusta",
  },
  {
    title: "PWA - JATE",
    image: pwa,
    description:
      "A Progressive Web Application (PWA) text editor that works offline. This app explores React and service workers while utilizing IndexedDB for local storage.",
    techStack: ["PWA", "React", "Webpack", "IndexedDB"],
    link: "https://my-pwa-text-editor-week-19-9be97db16d1d.herokuapp.com/",
    gitHub: "https://github.com/slmov215/pwa-text-editor",
  },
  {
    title: "Habit Your Way",
    image: habit,
    description:
      "A MERN-stack habit tracker that helps users build and maintain positive habits. Users can set goals, track progress, and analyze their habits over time.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://habit-your-way-habit-tracker-8b86617a280e.herokuapp.com/",
    gitHub: "https://github.com/slmov215/habit-your-way/tree/Stephen",
  },
];
  
  export default projectsData;
  

      // {
    //   title: 'My Tech Blog',
    //   image: techBlog,
    //   description: ' This is a full-stack app for the tech sector I had developed. Users can create and interact with content, save posts, comment, and manage their own articles. Public posts are viewable, but the dashboard and specific articles require login. User security is maintained through session storage, cookies, and bcrypt-hashed passwords.',
    //   link: 'https://my-mvc-tech-blog-slmov-2a0483569b53.herokuapp.com/',
    //   gitHub: 'https://github.com/slmov215/mvc-tech-blog',
    // },