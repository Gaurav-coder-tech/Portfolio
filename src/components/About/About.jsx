import personal from "../../data/personal";
import { motion } from "framer-motion";

import { fadeUp } from "../../animations/variants";

function About() {
    return (
       <motion.section

    variants={fadeUp}

    initial="hidden"

    whileInView="visible"

    viewport={{

        once:true,

        amount:0.3,

    }}
            id="about"
            className="min-h-screen bg-[#0A0A0A] text-white flex items-center"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

                <p className="text-blue-500 font-semibold uppercase tracking-widest">
                    About Me
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-3">
                    Know Me Better
                </h2>

                <div className="grid lg:grid-cols-2 gap-20 mt-16">

                    {/* LEFT */}

                    <div>

                        <h3 className="text-3xl font-bold leading-snug">

                            I'm{" "}

                            <span className="text-blue-500">
                                {personal.name}
                            </span>

                        </h3>

                        <p className="text-gray-400 mt-8 leading-9 text-lg">

                            {personal.about}

                        </p>

                    </div>

                    {/* RIGHT */}

                    <div className="grid grid-cols-2 gap-6">

                        <div className="bg-[#111] rounded-2xl p-8 border border-gray-800">

                            <h1 className="text-5xl font-bold text-blue-500">

                                8.71

                            </h1>

                            <p className="mt-3 text-gray-400">

                                Current CGPA

                            </p>

                        </div>

                        <div className="bg-[#111] rounded-2xl p-8 border border-gray-800">

                           <h1 className="text-4xl sm:text-5xl font-bold text-blue-500">
    NIT
</h1>

                            <p className="mt-3 text-gray-400">

                                Patna

                            </p>

                        </div>

                        <div className="bg-[#111] rounded-2xl p-8 border border-gray-800">

                           <h1 className="text-4xl sm:text-5xl font-bold text-blue-500">
    MERN
</h1>

                            <p className="mt-3 text-gray-400">

                                Full Stack

                            </p>

                        </div>

                        <div className="bg-[#111] rounded-2xl p-8 border border-gray-800">

                          <h1 className="text-4xl sm:text-5xl font-bold text-blue-500">
    DSA
</h1>
                            <p className="mt-3 text-gray-400">

                                Problem Solving

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </motion.section>
    );
}

export default About;