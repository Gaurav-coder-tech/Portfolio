import projects from "../../data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { fadeUp } from "../../animations/variants";
function Projects() {
    return (
       <motion.section

    variants={fadeUp}

    initial="hidden"

    whileInView="visible"

    viewport={{

        once:true,

        amount:0.3,

    }}
            id="projects"
            className="min-h-screen bg-black text-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <p className="text-blue-500 uppercase tracking-[0.3em] font-semibold">
                    Projects
                </p>

                <h2 className="text-5xl font-bold mt-3">
                    Featured Projects
                </h2>

                <div className="grid lg:grid-cols-2 gap-10 mt-16">

                    {
                        projects.map((project,index)=>(

                            <div
                                key={index}
                              className="bg-[#111111] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                            >
<div className="group relative h-60 overflow-hidden rounded-t-2xl">

    <img
        src={project.image}
        alt={project.title}
      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
    />

    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-5">

       {
    project.github && (

        <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
            GitHub
        </a>

    )
}

      {
    project.live && (

        <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
            Live Demo
        </a>

    )
}

    </div>

</div>

                                <div className="p-8">

                                    <h3 className="text-2xl lg:text-3xl font-bold flex items-center gap-3 flex-wrap">
                                       {project.title}

<span className="text-xs px-3 py-1 rounded-full bg-blue-600">
    Featured
</span>
                                    </h3>

                                   <p className="text-gray-400 mt-5 leading-7 text-[15px]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-8">

                                        {
                                            project.tech.map((item,techIndex)=>(

                                                <span
                                                    key={techIndex}
                                                   className="px-3 py-1 text-sm rounded-full bg-blue-600/20 border border-blue-600 text-blue-300"
                                                >
                                                    {item}
                                                </span>

                                            ))
                                        }

                                    </div>


                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>
        </motion.section>
    );
}

export default Projects;