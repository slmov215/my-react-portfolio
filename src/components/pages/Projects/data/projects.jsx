import WeatherApp from "../../../../assets/images/weather-dashboard-screen-shot.gif";
import project1 from "../../../../assets/images/project-1.png";
import employeeTracker from "../../../../assets/images/employee-tracker-demo.gif";
import techBlog from "../../../../assets/images/my-tech-blog.jpeg";
import project2 from "../../../../assets/images/project-2.png";
import pwa from "../../../../assets/images/pwa-text-editor.gif";

const projectsData = [
  {
    title: 'Weather App',
    image: WeatherApp,
    description: "This application retrieves weather information for a chosen or searched city. The app will enable users to search for a city and receive a 5-day forecast, including details such as date, icon representing weather conditions, temperature, humidity, and wind speed for the current day and the subsequent five days.",
    link: 'https://slmov215.github.io/weather-dashboard/',
    gitHub: 'https://github.com/slmov215/weather-dashboard',
  },
    {
      title: 'Project 1 - Food Focus',
      image: project1,
      description: 'This was my first group assignment done for the coding bootcamp. I was assigned in designing the vegan page and applied javascript to fetch the reciepes and data from another API.',
      link: 'https://paulnxn1.github.io/food_Focus/Vegan/veganIndex.html',
      gitHub: 'https://github.com/PaulNXN1/food_Focus',
    },
    {
      title: 'Employee Tracker',
      image: employeeTracker,
      description: 'This challenge tasked me in writing a code which allows the user to keep track of and manage their employees data using Node.js',
      link: 'https://drive.google.com/file/d/1r7yIBk7enMAX2aziXzwKoqegtvwp2hHs/view',
      gitHub: 'https://github.com/slmov215/employee-traker-sql',
    },
    {
      title: 'My Tech Blog',
      image: techBlog,
      description: ' This is a full-stack app for the tech sector I had developed. Users can create and interact with content, save posts, comment, and manage their own articles. Public posts are viewable, but the dashboard and specific articles require login. User security is maintained through session storage, cookies, and bcrypt-hashed passwords.',
      link: 'https://my-mvc-tech-blog-slmov-2a0483569b53.herokuapp.com/',
      gitHub: 'https://github.com/slmov215/mvc-tech-blog',
    },
    {
      title: 'Project 2 - Bookbusta',
      image: project2,
      description: 'This was my second Group Project for my coding bootcamp. Bookbusta is a website where book lovers can find and review books. Users can search by title or genre, add books to favorites, preview them, and leave comments. It is a one-stop platform that combines Front-End and Back-End skills to offer a complete book-related experience.',
      link: 'https://bookbusta-950538aa625f.herokuapp.com/',
      gitHub: 'https://github.com/Nneifem/bookbusta',
    },
    {
      title: 'PWA - JATE',
      image: pwa,
      description: 'This is a progressive web application to enhance skills in that area. The application aimed to delve into the inner workings of React JavaScript library. The project had four key aspects: configuring webpack settings with necessary workbox plugins, enabling asset caching for offline use, setting up IndexedDB for database operations, and adding event handlers for installing the app and using it offline.',
      link: 'https://my-pwa-text-editor-week-19-9be97db16d1d.herokuapp.com/',
      gitHub: 'https://github.com/slmov215/pwa-text-editor',
    },
    // Add more projects
  ];
  
  export default projectsData;
  