export const myInfo = {
    name: 'Jagbir Singh',
    designation: 'Software Engineer',
    description: 'Results-driven Software Engineer with 3 years of experience in building scalable and efficient web applications. Proficient in modern front-end and back-end technologies, including React, Redux, Angular, Node.js, and MongoDB. Passionate about clean code, performance optimization, and delivering seamless user experiences.',
    email: 'jagbirsaini95@gmail.com',
    linkedInURL: 'https://www.linkedin.com/in/jagbirsaini95',
    gitHubURL: 'https://github.com/jagbirsaini95',
}

export const experienceTimeline = [
    {
        year: "March 2023 – Present",
        title: "Software Engineer at Bebo Technologies Ltd.",
        description: "Developing and optimizing scalable web applications using React, Angular, and Redux. Collaborating with cross-functional teams to enhance UI/UX and integrate RESTful APIs efficiently.",
        icon: 'work',
    },
    {
        year: "March 2022 – March 2023",
        title: "Associate Software Engineer at Bebo Technologies Ltd.",
        description: "Built RESTful APIs with Node.js and Express, implemented JWT-based authentication, and optimized application performance to improve scalability.",
        icon: 'work',
    },
    {
        year: "Feb 2022 – March 2022",
        title: "Intern – Software Developer at Bebo Technologies Ltd.",
        description: "Developed real-time features using Socket.IO for enhanced client-server communication and contributed to UI component development.",
        icon: 'work',
    },
    {
        year: "2019 - 2022",
        title: "MCA – Kurukshetra University",
        description: "Post Graduated with a GPA of 8.2, specializing in Full Stack Development and Software Engineering principles.",
        icon: 'school',
    },
    {
        year: "2016 - 2019",
        title: "BSc – Kurukshetra University",
        description: "Graduated with a focus on Computer Science, gaining expertise in programming and database management.",
        icon: 'school',
    },
];

export const projects = [
    {
        title: "User Management System",
        description: "Developed a user authentication and management system using React, Express, JWT, and MongoDB. Implemented secure role-based access control and API protection.",
        image: "https://img.freepik.com/free-vector/personal-settings-concept-illustration_114360-2659.jpg",
        url: `${myInfo.gitHubURL}/UMS`,
    },
    {
        title: "Chat Room Application",
        description: "Built a real-time chat application using HTML, CSS, JavaScript, and Socket.IO. Integrated private/public chat rooms and real-time notifications.",
        image: "https://img.freepik.com/free-vector/messenger-application-flat-style_23-2147792779.jpg",
        url: `${myInfo.gitHubURL}/ChatRoomSocket.ioAndNode`,
    },
    {
        title: "E-commerce Application",
        description: "Developed an Angular-based e-commerce platform with authentication, product management, and cart functionality using LocalStorage and JSON server.",
        image: "https://img.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg",
        url: `${myInfo.gitHubURL}/Ecommerce-Angular-and-json-server`,
    },
    {
        title: "Recipe Application",
        description: "Created a recipe management app using Angular and Firebase Realtime Database. Implemented authentication, dynamic recipe updates, and a responsive UI.",
        image: "https://img.freepik.com/free-photo/person-taking-photo-bowls-with-food-with-smartphone_23-2149428181.jpg",
        url: `${myInfo.gitHubURL}/Recipe-Application`,
    },
];

export const skills: Record<string, string[]> = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Redux", "Angular", "Bootstrap", "Accessibility"],
    Backend: ["Express.js", "Socket.IO", "Postman"],
    Database: ["MongoDB"],
    'Version Control': ["Git", "GitHub", "GitLab"],
    OS: ["Windows", "Mac", "WSL"]
}
