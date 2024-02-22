import projectOne from '../assets/project1.png';
import projectTwo from '../assets/project2.png';
import projectThree from '../assets/project3.png'; 
import projectFour from '../assets/project4.png'; 
import projectFive from '../assets/project5.png'; 
import projectSix from '../assets/project6.png'; 
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
    title: "Pokedex Search Tool",
    image: projectThree,
    description: (
      <>
        <p>
        A simple HTML/CSS project that showcases information about various Pokémon using pokemon API.        </p>
      </>
    ),
    github: "https://github.com/jofiel-nguyen/Pokedex.git",
    demo: "https://jofiel-nguyen.github.io/Pokedex/",
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
    demo: "https://jofiel-nguyen.github.io/RiceWeatherQuest/",
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
    title: "Todo-App Web",
    image: projectSix,
    description: (
      <>
        <p>
        A simple yet powerful task management application designed to help users keep track of their daily tasks, deadlines, and priorities.
        </p>
      </>
    ),
    github: "https://github.com/jofiel-nguyen/To-do-App.git",
    demo: "https://jofiel-nguyen.github.io/To-do-App/",
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
