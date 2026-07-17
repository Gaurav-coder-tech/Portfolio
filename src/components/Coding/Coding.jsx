import coding from "../../data/coding";
import { motion } from "framer-motion";

import { fadeUp } from "../../animations/variants";
import {
    FaGithub
} from "react-icons/fa";

import {
    SiLeetcode,
    SiCodeforces
} from "react-icons/si";

function Coding() {

    const getIcon = (platform) => {

        switch(platform){

            case "LeetCode":
                return <SiLeetcode className="text-yellow-400 text-5xl"/>;

            case "Codeforces":
                return <SiCodeforces className="text-blue-500 text-5xl"/>;

            case "GitHub":
                return <FaGithub className="text-white text-5xl"/>;

            default:
                return null;

        }

    };

    return (

       <motion.section

    variants={fadeUp}

    initial="hidden"

    whileInView="visible"

    viewport={{

        once:true,

        amount:0.3,

    }}
            id="coding"
            className="bg-black text-white py-24"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <p className="text-blue-500 uppercase tracking-[0.3em] font-semibold">

                    Coding Profiles

                </p>

                <h2 className="text-5xl font-bold mt-3">

                    Where I Code

                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                    {

                        coding.map((item,index)=>(

                            <a
                                key={index}
                                href={item.profile}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
                            >

                                {getIcon(item.platform)}

                                <h3 className="text-2xl font-bold mt-6">

                                    {item.platform}

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    {item.username}

                                </p>

                                <p className="text-gray-500 mt-5 leading-7">

                                    {item.description}

                                </p>

                            </a>

                        ))

                    }

                </div>

            </div>

       </motion.section>

    );

}

export default Coding;