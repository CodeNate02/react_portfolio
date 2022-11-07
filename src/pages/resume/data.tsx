import {
	SiCsharp,
	SiDotnet,
	SiReact,
	SiTypescript,
	SiJavascript,
	SiJquery,
	SiVite,
} from 'react-icons/si';
export const RELEVANT_COURSES = [
	{
		category: 'Development',
		courses: [
			'Computer Problem Solving',
			'Web & Mobile Development',
			'Client Programming',
			'Task Automation',
			'Designing the User Experience ',
		],
	},
	{
		category: 'Administration',
		courses: [
			'Routing and Switching',
			'Systems Administration',
			'Config. Management',
		],
	},
	{
		category: 'Database',
		courses: [
			'Database & Data Modeling',
			'Information Requirements Modeling',
		],
	},
];
export const WORK_EXPERIENCE = [
	{
		company: 'LSI Solutions',
		dates: 'August 2022 - Present',
		location: 'Victor, NY',
		title: 'IT Development Co-Op',
		duties: [
			'Improve company efficiency by developing applications for internal use.',
		],
	},
	{
		company: 'Burr and Burton Academy',
		dates: 'June 2018 - August 2019. Summers 2020 & 2021',
		location: 'Manchester, VT',
		title: 'Tech Department Internship',
		duties: [
			'Lessened load of senior IT department members by triaging incoming IT-related issues, questions, and requests.',
			'Ensured prompt and reliable response to support requests through the use of Zendesk ticketing system.',
			'Improved school live-stream events through the use of new hardware and software solutions.',
			'Facilitated preparation, distribution, and collection of iPads and accessories used by the majority of the student body as a part of 1:1 iPad program.',
		],
	},
];
export const SKILLS = {
	Beginner: ['PHP', 'Angular', 'C#', 'Bash', 'Electron'],
	Intermediate: ['Python', 'Java', 'MySQL', 'jQuery'],
	Proficient: ['HTML', 'Javascript', 'CSS', 'React', 'Typescript'],
	OS: [
		'Windows XP, Vista, 7-11: Advanced',
		'Linux (RHEL, Ubuntu, CentOS 7-8): Beginner',
		'MacOS: Intermediate',
	],
};
export const PORTFOLIO_PROJECTS = [
	{
		title: "Nate's Pokedex",
		description: `I've been a fan of Pokemon for years, so as a personal project I decided to build a React app that fetched information from the PokeAPI database and served information on the Pokemon.  The database was more difficult to use than I had originally anticipated and some features, like the ability to display a Pokemon's evolutionary chain, didn't quite work as well as I had hoped, but overall I am proud of the result.  It was good practice working around a previously existing database and its quirks.`,
		creationDate: 'October 2022',
		link: '' /*NATE DON'T FORGET TO ADD THIS ONCE YOU SET IT UP */,
		icons: [SiReact, SiTypescript, SiVite],
	},
	{
		title: '.NET iSchool Web App',
		description: `This web app was originally constructed as a final project for a
        Client Programming app in the Spring of 2022. The professor
        provided us with the database and a quick tutorial on how .NET
        works, then let us work to create the site. I am particularly
        proud of this site because of the grade I recieved on it. The
        professor's grading criteria stipulated that A-worthy work would
        go above and beyond expectations. I worked very hard to build
        the best site that I could in the time-frame that Finals
        provided, and am very proud of the 97 I recieved on the end
        poduct.`,
		creationDate: 'June 2022',
		link: 'https://nrwb-ischoolwebapp.azurewebsites.net/',
		icons: [SiCsharp, SiDotnet],
	},
	{
		title: 'Myst Maze',
		creationDate: 'Fall 2016, Rebuilt October 2022',
		description: `Originally, Myst Maze was the product of a video game design class taken in my Sophomore year of high school.  The class followed an online tutorial to build a simple scrolling game, but I had my heart set on building a maze so, with my teacher's blessing, I spent hours both in class and after school researching guides and adapting the class tutorial to my needs in order to create my maze.  In my third year of college, I discovered an old backup of the game stored on my high school Google Drive account, mercifully left undeleted thanks to my time working as an intern.  I decided to update the game's code using the knowlege I'd gained during my time at RIT. This is the result.`,
		link: 'https://people.rit.edu/nrw4912/portfolio/maze',
		icons: [SiJavascript],
	},
];
