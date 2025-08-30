interface Experience {
	company: string;
	title: string;
	responsibilities: string[];
	startDate: Date;
	endDate: Date | string;
	location: string;
}

interface Education {
	school: string;
	major: string;
	startDate: Date;
	endDate: Date | string;
	location: string;
}

interface Certification {
	name: string;
	issuer: string;
	issueDate: Date | string;
	link: string;
}

interface Project {
	name: string;
	githubLink: string;
	description: string;
	technologies: string[];
	link: string | undefined;
	achievements: string[];
}

export type { Experience, Education, Certification, Project };
