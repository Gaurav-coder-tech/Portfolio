import personal from "../../data/personal";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";
import { SiCodeforces } from "react-icons/si";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import profileImage from "../../assets/me.png";

function Hero() {

    return (

        <section
            id="home"
            className="min-h-screen bg-black text-white flex items-center pt-20"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

                <motion.div

                    variants={fadeUp}

                    initial="hidden"

                    animate="visible"

                    className="grid lg:grid-cols-2 gap-16 items-center"

                >

                    {/* LEFT */}

                    <div>

                        <p className="text-blue-500 font-semibold text-xl mb-3">

                            {personal.intro}

                        </p>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

                            {personal.name}

                        </h1>

                        <div className="mt-5 text-2xl md:text-3xl font-semibold text-gray-300">

                            <TypeAnimation

                                sequence={[

                                    "Full Stack MERN Developer",
                                    2000,

                                    "Software Developer",
                                    2000,

                                    "React & Node.js Developer",
                                    2000,

                                    "DSA Learner",
                                    2000,

                                ]}

                                wrapper="span"

                                speed={45}

                                repeat={Infinity}

                            />

                        </div>

                        {/* <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">

                            {personal.about}

                        </p> */}

                        <div className="flex flex-wrap gap-5 mt-10">

                            <a

                                href="#projects"

                                className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-blue-600/30"

                            >

                                View Projects

                            </a>

                            <a

                                href={personal.resume}

                                target="_blank"

                                rel="noreferrer"

                                className="border border-gray-600 px-7 py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-semibold"

                            >

                                View Resume

                            </a>

                        </div>

                        <div className="flex gap-5 mt-10 text-2xl">

                            <a

                                href={personal.social.github}

                                target="_blank"

                                rel="noreferrer"

                                className="w-14 h-14 rounded-full bg-[#111111] border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"

                            >

                                <FaGithub />

                            </a>

                            <a

                                href={personal.social.linkedin}

                                target="_blank"

                                rel="noreferrer"

                                className="w-14 h-14 rounded-full bg-[#111111] border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"

                            >

                                <FaLinkedin />

                            </a>

                            <a

                                href={personal.social.leetcode}

                                target="_blank"

                                rel="noreferrer"

                                className="w-14 h-14 rounded-full bg-[#111111] border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"

                            >

                                <SiLeetcode />

                            </a>
<a
    href={personal.social.codeforces}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full bg-[#111111] border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
>
    <SiCodeforces className="text-2xl" />
</a>

                        </div>

                   

                    </div>
                                        {/* RIGHT */}

                    <div className="flex justify-center">

                        <div className="relative">

                            <div
                                className="absolute -inset-4 rounded-full bg-blue-600 blur-3xl opacity-30"
                            ></div>

                            <div
                                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl shadow-blue-600/40 hover:scale-105 transition-all duration-500"
                            >

                                <img
                                    src={profileImage}
                                    alt="Gaurav"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}

export default Hero;