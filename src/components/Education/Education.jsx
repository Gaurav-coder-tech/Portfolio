import education from "../../data/education";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { fadeUp } from "../../animations/variants";
function Education() {
    return (
     <motion.section

    variants={fadeUp}

    initial="hidden"

    whileInView="visible"

    viewport={{

        once:true,

        amount:0.3,

    }}
            id="education"
            className="min-h-screen bg-black text-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <p className="text-blue-500 uppercase tracking-[0.3em] font-semibold">
                    Education
                </p>

                <h2 className="text-5xl font-bold mt-3">
                    Academic Journey
                </h2>

                <div className="relative mt-20">

                    <div className="absolute left-5 top-0 w-[2px] h-full bg-gray-700"></div>

                    {
                        education.map((item,index)=>(

                            <div
                                key={index}
                                className="relative pl-20 mb-14"
                            >

                                <div
                                    className="absolute left-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center"
                                >
                                    <GraduationCap size={18}/>
                                </div>

                                <div
                                    className="bg-[#111111] rounded-2xl border border-gray-800 p-8 hover:border-blue-500 transition duration-300"
                                >

                                    <span className="text-blue-500 font-semibold">
                                        {item.duration}
                                    </span>

                                    <h3 className="text-2xl font-bold mt-2">
                                        {item.degree}
                                    </h3>

                                    {
                                        item.specialization &&

                                        <p className="text-gray-400 mt-2">
                                            {item.specialization}
                                        </p>

                                    }

                                    <p className="text-gray-300 mt-3">
                                        {item.institute}
                                    </p>

                                    <p className="text-blue-400 mt-4 font-semibold">
                                        {item.score}
                                    </p>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>
        </motion.section>
    );
}

export default Education;