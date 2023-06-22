export const projects = [
    {
        id: 'p1',
        name: 'Quello',
        developmentIn: 'Final project - Coding Academy',
        description: 'As part of my studies at an academic coding bootcamp, I collaborated with two team members to develop the Quello project. Qwello is web-based task management inspired by Trello, encompassing both the UI and functionality. We completed the project within a two-week sprint, dedicating over 130 working hours to developing the frontend, backend, and connecting it to the database.',
        images: [
            'images/quello.jpeg'
        ],
        githubLink: 'https://github.com/MorAgayev/Quello/',
        webLink: '',
        tools: ['Vue', 'Vuex', 'Scss', 'NodeJS', 'Express', 'Socket.io', 'MongoDB']
    },
    {
        id: 'p2',
        name: 'MineSweeper',
        developmentIn: 'Coding Academy - First Project',
        description: 'As part of an academic coding bootcamp, I developed the Minesweeper game for my first project. This game incorporates complex logic required for game development.',
        images: [
            'images/minesweeper.png'
        ],
        githubLink: 'https://github.com/MorAgayev/MineSweeper',
        webLink: 'https://moragayev.github.io/MineSweeper/',
        tools: ['JavaScript', 'HTML', 'CSS']
    },
    {
        id: 'p3',
        name: 'AppSus',
        developmentIn: 'Coding Academy',
        description: 'I collaborated with a team member to build an application that combines a notes application and email functionality. This integration allows users to send a note as an email and save an email as a note.',
        images: [
            'images/appsus1.png'
        ],
        githubLink: 'https://github.com/MorAgayev/AppSus',
        webLink: 'https://moragayev.github.io/AppSus/#/',
        tools: ['JavaScript', 'HTML', 'CSS']
    }
]

export const recommendations = [
    {
        id: 'r1',
        name: 'Gabriel Ameram',
        title: 'CTO & Co-Founder at Brew',
        description: 'I had the pleasure of working with Mor for several months at Brew. During that time, I was consistently impressed with her abilities - quick learning, social skills and fast understanding of a complex system. Mor was able to quickly learn the codebase and the different systems that we use. She was also able to quickly understand the different moving parts of our projects and how they all fit together. This allowed her to make significant contributions to our team, even though she was "only" a junior engineer. For example, though she mainly came from Front-end technologies she learned both back-end and cloud infrastructure quickly and thoroughly. Mor is also a very social person. She is well-liked by both her peers and managers. She is always willing to help others and she is always up for a challenge. She is also a great communicator and she is able to clearly explain complex technical concepts to both technical and non-technical audiences. She worked closely with the CTO (myself), product team and the entire engineering team. I believe that Mor would be a valuable asset to any team. She is a quick learner, she is a team player, and she is a great communicator. I highly recommend her for any position and envy any company that would be lucky enough to work with Mor.',
        img: 'img/gabriel-amram.jpeg'
    },
    {
        id: 'r2',
        name: 'Vicky Hill',
        title: 'Senior Software Developer at Brew',
        description: 'I highly recommend Mor as a talented frontend developer. She is a quick learner, enthusiastic about software development, and a pleasure to work with. Mor consistently delivers high-quality solutions within tight deadlines, and her passion and eagerness to learn are truly impressive. She is a valuable asset to any team and any company will be lucky to have her.',
        img: 'img/vicky-hill.jpeg'
    },
    {
        id: 'r3',
        name: 'Shani Pelzig',
        title: 'Fullstack Developer at Brew',
        description: 'I have had the privilege of working closely with Mor at Brew. She has the ability to handle complex technical challenges with ease and precision. Mor is a true team player and an absolute pleasure to work with. She has a strong technical skills like her attention to details, clean code, strong understanding of software development principles and best practices.',
        img: 'img/shani-pelzig.jpeg'
        
    },
]


export function getProjects() {
    return projects
}

export function getRecommendations() {
    return recommendations
}

export function getFavoriteLearningAssets() {
    return recommendations
}