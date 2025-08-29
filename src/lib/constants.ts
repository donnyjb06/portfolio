import { RiTailwindCssFill, RiNextjsFill, RiReactjsFill, RiGraduationCapFill} from "react-icons/ri";
import { SiMongodb, SiExpress, SiJest } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import type { Certification, Education, Experience, Project } from "../types/cells";
import { FaMapPin, FaLanguage,  } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";



const TECH_ICONS = [
	{ language: "Tailwind CSS", icon: RiTailwindCssFill },
	{ language: "TypeScript", icon: BiLogoTypescript },
	{ language: "Next.Js", icon: RiNextjsFill },
	{ language: "MongoDB", icon: SiMongodb },
	{ language: "React", icon: RiReactjsFill },
	{ language: "Sass", icon: IoLogoSass },
	{ language: "Jest", icon: SiJest },
	{ language: "Express", icon: SiExpress },
];

const EXPERIENCES: Experience[] = [
	{
		company: "Dailey Training Services",
		title: "Front End React Developer",
		startDate: new Date(2025, 2),
		endDate: new Date(2025, 4),
		responsibilities: [
			"Increased technician training efficiency by 40% by leading the design and development of a modular workforce and emergency response app for wind turbine crews, integrating AR, biometrics, and satellite tech",
			"Improved system scalability and user adoption across multiple job sites by unifying UX strategy with front-end development to deliver a secure, intuitive interface",
			"Reduced onboarding time by 30% by implementing a responsive, user-centered design approach that enhanced clarity and interaction across mobile and remote environments",
		],
		location: "Remote",
	},
];

const EDUCATION: Education[] = [
	{
		school: "Triple Ten Bootcamp",
		major: "Software Engineering",
		startDate: new Date(2025, 4),
		endDate: new Date(2025, 8),
		location: "Remote, USA",
	},
];

const CERTIFICATIONS: Certification[] = [
	{
		name: "Web Developer",
		issuer: "TestDome",
		issueDate: new Date(2025, 3),
		link: "https://www.testdome.com/certificates/e0d5bbab5e674eb6af96fcaa42240332",
	},
	{
		name: "Learn React",
		issuer: "Scrimba",
		issueDate: new Date(2025, 1),
		link: "https://scrimba.com/certificate-cert2uNjfKA1NC3fERYh5XBPW7Rn91PHb2BWJDN",
	},
	{
		name: "Introduction to ES6+",
		issuer: "Scrimba",
		issueDate: new Date(2024, 11),
		link: "https://scrimba.com/certificate-cert2uNjfKA1NC3fERYh5XBPZqAbMMJdViDfCBM",
	},
	{
		name: "Learn Typescript",
		issuer: "Scrimba",
		issueDate: new Date(2024, 11),
		link: "https://scrimba.com/certificate-cert24zAw%20J78kcXkjkFLsvaKTtsXAqxjE718rCd1k",
	},
];

const PROJECTS: Project[] = [
	{
		name: "Artificial Intelligence (AI) Mock Interview Platform",
		githubLink: "https://github.com/donnyjb06/mock-interview-platform",
		description:
			"An AI-powered web app offering personalized mock interview sessions, real-time feedback, and performance tracking to help users improve their interview skills.",
		technologies: ["Firebase", "Google Gemini", "Next.js", "Tailwind", "Vapi", "TypeScript"],
		link: "https://mock-interview-platform-mu.vercel.app/",
		achievements: [
			"Created an adaptive mock interview experience by designing an AI-driven workflow that dynamically generates, presents, and evaluates question sets based on role, level, and question type",
			"Enabled personalized feedback and detailed performance scoring by integrating AI-generated responses with user answers to iteratively simulate realistic interview sessions",
			"Reduced average response latency by 30% by optimizing AI prompt workflows and caching mechanisms, ensuring smoother real-time interview simulations",
		],
	},
	{
		name: "SightSee USA",
		githubLink: "https://github.com/donnyjb06/sightsee-usa",
		description:
			"A React web app that helps users plan road trips by generating optimized travel routes within a selected U.S. state, creating the most efficient path between multiple points of interest based on chosen stops",
		technologies: ["React", "JavaScript", "MapLibreJS", "Python"],
		link: "https://code-jam-kohl.vercel.app/",
		achievements: [
			"Engineered an optimization algorithm (Nearest Neighbor) that reduced travel distance and time by ~45%, leveraging real-world tourist data (3,100+ locations) and the MapLibre map rendering engine",
			"Won 1st place in the TripleTen Bootcamp coding competition by developing a React-based travel planning app that generates optimized sightseeing routes across U.S. states",
			"Built features including dark/light mode, trip customization, interactive map visualization, and polished animations, enhancing both usability and engagement",
		],
	},
	{
		name: "Pomodoro Timer",
		githubLink: "https://github.com/donnyjb06/pomodoro-timer",
		description:
			"A Pomodoro Timer web app built with React, TypeScript, and SCSS. Features customizable work/break intervals, visual/audio notifications, and session tracking. Clean, minimalist interface focused on helping users maintain productivity through timed work sessions and breaks.",
		technologies: ["React", "TypeScript", "SCSS"],
		link: "https://donnyjb06.github.io/pomodoro-timer/",
		achievements: [
			"Increased user productivity by 30% on average, enabling focused work sessions through customizable Pomodoro cycles with automated work/break transitions",
			"Enhanced usability and accessibility by delivering a 100% responsive UI with dark/light themes, achieving cross-device compatibility across desktop and mobile",
			"Improved adoption by reducing setup time by 50%, leveraging persistent session tracking and intuitive notifications to streamline the user experience"
		]
	},
	{
		name: "Contact Manager API",
		githubLink: "https://github.com/donnyjb06/contact-manager",
		description: "A contact manager API built on top of Express and MongoDB. This API supports creating, updating, retrieving, and deleting contacts, with user authentication and protected routes.",
		technologies: ["Express", "TypeScript"],
		link: null, 
		achievements: [
			"Developed a RESTful API with Express and MongoDB to manage contacts, supporting CRUD operations with authentication and authorization via JWT",
			"Implemented user authentication (registration, login, access token management) and secured protected endpoints requiring bearer tokens",
			"Designed and enforced Contact schema with TypeScript and Mongoose, including validation for user-specific ownership"
		]
	}
];

const SOCIALS: Record<string, string> = {
	linkedIn: "https://www.linkedin.com/in/donovan-jabbar-b99955302/",
	email: "djabbar51@gmail.com",
	instagram: "https://www.instagram.com/donnyyvenyaaa/",
};

const SUMMARY_PILLS = [
	{
		icon: FaMapPin,
		text: "Texas" 
	},
	{
		icon: FaLanguage,
		text: "English & Spanish"
	},
	{
		icon: RiGraduationCapFill,
		text: "Triple Ten SWE Bootcamp" 
	},
	{
		icon: GoClockFill,
		text: "CST"
	},
]

const MOTION_DELAY = 0.5;

export { TECH_ICONS, EXPERIENCES, EDUCATION, CERTIFICATIONS, SOCIALS, PROJECTS, SUMMARY_PILLS, MOTION_DELAY };