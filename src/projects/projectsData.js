import projectOne from '../assets/project1.png';
import projectTwo from '../assets/project2.png';
import projectThree from '../assets/project3.gif'; 
import projectFour from '../assets/project4.gif'; 
import projectFive from '../assets/project5.png'; 
import projectSix from '../assets/project6.gif'; 
import projectSeven from '../assets/project7.png';
import projectEight from '../assets/project8.png';
const projects = {
  1: {
    title: "Password Generator",
    image: projectOne,
    description: (
      <>
        <p>
        A password generator that allows users to generate a secure password based on their chosen criteria.
        </p>
      </>
    ),
    github: "https://github.com/jofiel-nguyen/PasswordGenerateMachine.git",
    demo: "https://jofiel-nguyen.github.io/PasswordGenerateMachine/",
  },
  2: {
    title: "Text Editor Web Application",
    image: projectTwo,
    description: (
      <>
        <p>
      The application is a single-page application that meets the Progressive Web App (PWA) criteria. 
      It incorporates various data persistence techniques to ensure reliability and redundancy, even when offline.
        </p>
      </>
    ),
    github: "https://github.com/nhunguyen-debug/PWA-From-Rice.git",
    demo: "https://pwaapps-6193e22597e4.herokuapp.com/",
  },
  3: {
    title: "NoSQL Social Network API",
    image: projectThree,
    description: (
      <>
        <p>
          This is an API for a social network web application built using MongoDB, Express.js, and Mongoose. It allows users to share their thoughts, react to friends' thoughts, and create a friend list.
        </p>
      </>
    ),
    github: "https://github.com/nhunguyen-debug/Nosql-for-rice.git",
    demo: "http://localhost:3001/api/users",
  },
  4: {
    title: "Get Weather Apps",
    image: projectFour,
    description: (
      <>
        <p>
          HTML, JavaScript, and the Fetch API were used to create a website to check the next 3 or 5 days of weather in a chosen location.
        </p>
      </>
    ),
    github: "https://github.com/nhunguyen-debug/Get-weather-challenge-for-rice.git",
    demo: "https://nhunguyen-debug.github.io/Get-weather-challenge-for-rice/",
  },
  5: {
    title: "MVC Tech Blog",
    image: projectFive,
    description: (
      <>
        <p>
          Writing about tech can be just as important as making it.
        </p>
      </>
    ),
    github: "https://github.com/nhunguyen-debug/MVC-From-Rice-Wren.git",
    demo: "http://localhost:3000",
  },
  6: {
    title: "E-Commerce Back End",
    image: projectSix,
    description: (
      <>
        <p>
          This project involves building the back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database.
        </p>
      </>
    ),
    github: "https://github.com/nhunguyen-debug/ORM-Wren-Rice.git",
    demo: "http://localhost:3001/api/tags",
  },
  7: {
    title: "WanderJo App Travel",
    image: projectSeven,
    description: (
      <>
        <p>
          This is App created to fetching data to prepare for users to travel.
        </p>
      </>
    ),
    github: "https://github.com/jomaduagwu/wanderjo-app.git",
    demo: "https://sunny-skies-1f810bfddd0d.herokuapp.com/",
  },
  8: {
    title: "Recipes Now App",
    image: projectEight,
    description: (
      <>
        <p>
          This is App created to fetching data to read and watch video to make cooking easier.
        </p>
      </>
    ),
    github: "https://github.com/AvenP/recipe-search-app.git",
    demo: "https://avenp.github.io/recipe-search-app/",
  },
};

export default projects;
