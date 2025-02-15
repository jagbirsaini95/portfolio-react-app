export const myInfo = {
    name: 'Jagbir Singh',
    designation: 'Software Engineer',
    description: 'A passionate Software Developer with 3 years of experience in developing scalable web applications using modern technologies like React, Redux, Angular, Node.js, and MongoDB.',
    email: 'jagbirsaini95@gmail.com',
    linkedInURL: 'https://www.linkedin.com/in/jagbirsaini95',
    gitHubURL: 'https://github.com/jagbirsaini95',
}

export const experienceTimeline = [
    {
        year: "March 2023 – Present",
        title: "Software Engineer at Bebo Technologies Ltd.",
        description: "Developing user-friendly web applications using React, Angular, and Redux.",
        icon: 'work',
    },
    {
        year: "March 2022 – March 2023",
        title: "Associate Software Engineer at Bebo Technologies Ltd.",
        description: "Built RESTful APIs using Node.js and Express, optimized app performance.",
        icon: 'work',
    },
    {
        year: "Feb 2022 – March 2022",
        title: "Intern – Software Developer at Bebo Technologies Ltd.",
        description: "Implemented real-time features using Socket.IO for client-server communication.",
        icon: 'work',
    },
    {
        year: "2019 - 2022",
        title: "MCA – Kurukshetra University",
        description: "Post Graduated with a GPA of 8.2, specializing in Full Stack Development.",
        icon: 'school',
    },
    {
        year: "2016 - 2019",
        title: "Bsc – Kurukshetra University",
        description: "Graduated Bachelor of science, specializing in Computer Science.",
        icon: 'school',
    },
];

export const projects = [
    {
        title: "User Management System",
        description: "A user authentication and management system built using React, Express, JWT, and MongoDB.",
        image: "https://img.freepik.com/free-vector/personal-settings-concept-illustration_114360-2659.jpg?t=st=1738408154~exp=1738411754~hmac=ed1367a676afd3e3dcf2d5d1946592163dd05851d0d794b1d55b23dd1a589cd2&w=740",
        url: `${myInfo.gitHubURL}/UMS`,
    },
    {
        title: "Chat Room Application",
        description: "A real-time chat application built using HTML, CSS, JavaScript, and Socket.IO.",
        image: "https://img.freepik.com/free-vector/messenger-application-flat-style_23-2147792779.jpg?t=st=1738408474~exp=1738412074~hmac=baacabdafd19ca5fddb9cfd0eda41a188a1f5f6032e3dd11bea55ff7b332a609&w=740",
        url: `${myInfo.gitHubURL}/ChatRoomSocket.ioAndNode`,
    },
    {
        title: "E-commerce Application",
        description: "An Angular-based e-commerce platform with AuthGuards, LocalStorage, and a JSON server.",
        image: "https://img.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg?t=st=1738408527~exp=1738412127~hmac=5c6f0fc8b8f20f84349302589ef79eae2bcc85810bb1cc7cdca4b4b629c0afec&w=740",
        url: `${myInfo.gitHubURL}/Ecommerce-Angular-and-json-server`,
    },
    {
        title: "Recipe Application",
        description: "A recipe management app using Angular, AuthGuards, and Firebase Realtime Database.",
        image: "https://img.freepik.com/free-photo/person-taking-photo-bowls-with-food-with-smartphone_23-2149428181.jpg?t=st=1738408625~exp=1738412225~hmac=5aba1680c71bd950d9e33bc67d9516ecaa8e1b9fb4a10378790438c61b2515e1&w=360",
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


