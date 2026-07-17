import aiImage from "../assets/projects/ai-code-assistant.png";
import portfolioImage from "../assets/projects/portfolio.png";

const projects = [
    {
        title: "AI Code Assistant",

        description:
            "A full-stack AI-powered code assistant built using the MERN stack and Gemini API. It helps users generate, explain, debug and optimize code through an intuitive interface.",

        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Gemini API",
        ],

        github: "https://github.com/Gaurav-coder-tech/AI-Code-Assistant",
live: "",

        image: aiImage,
    },

    {
        title: "Developer Portfolio",

        description:
            "A responsive portfolio website built with React and Tailwind CSS showcasing projects, skills, coding profiles and achievements.",

        tech: [
            "React",
            "Tailwind CSS",
            "JavaScript",
        ],

   github: "https://github.com/yourusername/portfolio",
live: "",

        image: portfolioImage,
    },
];

export default projects;