import {
  SiCsharp,
  SiDotnet,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiJquery,
  SiVite,
  SiAngular,
} from "react-icons/si";
export const PORTFOLIO_PROJECTS = [
  {
    title: "Nate's Pokedex",
    description: `I've been a fan of Pokemon for years, so as a personal project I decided to build a React app that fetched information from the PokeAPI database and served information on the Pokemon.  It was good practice working around a previously existing database and its quirks.`,
    creationDate: "October 2022",
    link: "./pokedex",
    icons: [SiReact, SiTypescript, SiVite],
  },
  {
    title: ".NET iSchool Web App",
    description: `This web app was originally constructed as a final project for a
        Client Programming app in the Spring of 2022. The professor
        provided us with the database and a quick tutorial on how .NET
        works, then let us work to create the site. I am particularly
        proud of this site because of the grade I recieved on it. The
        professor's grading criteria stipulated that A-worthy work would
        go above and beyond expectations. I worked very hard to build
        the best site that I could in the time-frame that finals
        provided, and am very proud of the 97 I recieved on the end
        poduct.`,
    creationDate: "June 2022",
    link: "https://nrwb-ischoolwebapp.azurewebsites.net/",
    icons: [SiCsharp, SiDotnet, SiJquery],
  },
  {
    title: "Myst Maze",
    creationDate: "Fall 2016, Rebuilt October 2022",
    description: `Originally, Myst Maze was the product of a video game design class taken in my sophomore year of high school.  The class followed an online tutorial to build a simple scrolling game, but I had my heart set on building a maze.  With my teacher's blessing, I spent hours both in class and after school researching guides and adapting the class tutorial to my needs in order to create my maze.  In my third year of college, I discovered an old backup of the game stored on my high school Google Drive account, mercifully left undeleted thanks to my time working as an intern.  I decided to update the game's code using the knowlege I'd gained during my time at RIT. This is the result.`,
    link: "./maze",
    icons: [SiJavascript],
  },
  {
    title: "Werdul",
    creationDate: "November 2022",
    description:
      "This app was my first major attempt at working with Angular.  I set out to create my own version of the game Wordle that instead of being updated daily would grab a random word from a dictionary to allow infinite play and custom word lengths.",
    link: "./wordgame",
    icons: [SiAngular, SiTypescript],
  },
];
