import skills from "../../data/skills";
import { motion } from "framer-motion";

import { fadeUp } from "../../animations/variants";
import {
    SiCplusplus,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman,
    SiCloudinary,
} from "react-icons/si";


import { VscVscode } from "react-icons/vsc";

const icons = {

    "C++": <SiCplusplus className="text-blue-500" />,
    "JavaScript": <SiJavascript className="text-yellow-400" />,
    "Python": <SiPython className="text-blue-400" />,

    "HTML": <SiHtml5 className="text-orange-500" />,
    "CSS": <SiCss className="text-blue-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    "React": <SiReact className="text-cyan-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,

    "Node.js": <SiNodedotjs className="text-green-500" />,
    "Express.js": <SiExpress className="text-gray-300" />,

    "MongoDB": <SiMongodb className="text-green-500" />,
    "MySQL": <SiMysql className="text-blue-600" />,

    "Git": <SiGit className="text-orange-500" />,
    "GitHub": <SiGithub className="text-white" />,
    "Docker": <SiDocker className="text-blue-500" />,
    "VS Code": <VscVscode className="text-blue-500" />,
    "Postman": <SiPostman className="text-orange-400" />,
    "Cloudinary": <SiCloudinary className="text-blue-400" />,

};

function Skills() {

    const categories = [

        {
            title: "Languages",
            data: skills.languages,
        },

        {
            title: "Frontend",
            data: skills.frontend,
        },

        {
            title: "Backend",
            data: skills.backend,
        },

        {
            title: "Database",
            data: skills.database,
        },

        {
            title: "Tools",
            data: skills.tools,
        },

    ];

    return (

        <motion.section

    variants={fadeUp}

    initial="hidden"

    whileInView="visible"

    viewport={{

        once:true,

        amount:0.3,

    }}
            id="skills"
            className="min-h-screen bg-[#0A0A0A] text-white py-24"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <p className="text-blue-500 uppercase tracking-[0.3em] font-semibold">
                    Skills
                </p>

                <h2 className="text-5xl font-bold mt-3">
                    Technologies I Work With
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

                    {

                        categories.map((category,index)=>(

                            <div
                                key={index}
                                className="bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
                            >

                                <h3 className="text-2xl font-bold mb-8">

                                    {category.title}

                                </h3>

                                <div className="space-y-4">

                                    {

                                        category.data.map((skill,skillIndex)=>(

                                            <div
                                                key={skillIndex}
                                                className="flex items-center gap-4 p-3 rounded-xl bg-[#1A1A1A] hover:bg-blue-600 transition duration-300"
                                            >

                                                <div className="text-2xl">

                                                    {icons[skill] || "•"}

                                                </div>

                                                <span>

                                                    {skill}

                                                </span>

                                            </div>

                                        ))

                                    }

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

      </motion.section>

    );

}

export default Skills;