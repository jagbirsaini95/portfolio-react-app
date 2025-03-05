export interface Education {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa: string;
}

export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Skill {
    name: string;
    level: string;
}

export interface Project {
    name: string;
    description: string;
    technologies: string;
    link?: string;
}

export interface ResumeData {
    personalInfo: {
        fullName: string;
        email: string;
        phone: string;
        location: string;
        linkedin: string;
        github?: string;
    };
    education: Education[];
    experience: Experience[];
    skills: Skill[];
    projects: Project[];
}