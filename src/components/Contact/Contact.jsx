import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_PUBLIC_KEY,
} from "../../config/email";
import { fadeUp } from "../../animations/variants";
import { SiLeetcode } from "react-icons/si";

import { useState } from "react";
import personal from "../../data/personal";

function Contact() {
    const [formData,setFormData]=useState({

    name:"",
    email:"",
    subject:"",
    message:"",

});

const handleChange=(e)=>{

    setFormData({

        ...formData,

        [e.target.name]:e.target.value,

    });

};

const [loading,setLoading]=useState(false);


const handleSubmit=async(e)=>{

    e.preventDefault();

    if(
        !formData.name.trim()||
        !formData.email.trim()||
        !formData.subject.trim()||
        !formData.message.trim()
    ){

        alert("Please fill all fields.");

        return;

    }

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(formData.email)){

        alert("Please enter a valid email address.");

        return;

    }

    setLoading(true);

    try{

        await emailjs.send(

            EMAIL_SERVICE_ID,

            EMAIL_TEMPLATE_ID,

            {

                from_name:formData.name,

                from_email:formData.email,

                subject:formData.subject,

                message:formData.message,

            },

            EMAIL_PUBLIC_KEY

        );

        alert("Message sent successfully.");

        setFormData({

            name:"",

            email:"",

            subject:"",

            message:"",

        });

    }

    catch(error){

        console.error(error);

        alert("Failed to send message. Please try again.");

    }

    finally{

        setLoading(false);

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
            id="contact"
            className="bg-[#0A0A0A] text-white py-24"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <p className="text-blue-500 uppercase tracking-[0.3em] font-semibold">
                    Contact
                </p>

                <h2 className="text-5xl font-bold mt-3">
                    Let's Connect
                </h2>

                <div className="grid lg:grid-cols-2 gap-14 mt-16">

                    {/* Left */}

                    <div>

                        <h3 className="text-3xl font-bold">

                            Have an opportunity?

                        </h3>

                        <p className="text-gray-400 mt-6 leading-8">

                            I'm always interested in internships,
                            collaborations and software engineering
                            opportunities.

                        </p>

                        <div className="mt-10 space-y-6">

                            <a
                                href={personal.social.email}
                                className="flex items-center gap-4 hover:text-blue-500 transition"
                            >
                                <FaEnvelope size={22} />
                                Email
                            </a>

                            <a
                                href={personal.social.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-blue-500 transition"
                            >
                                <FaGithub size={22} />
                                GitHub
                            </a>

                            <a
                                href={personal.social.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-blue-500 transition"
                            >
                                <FaLinkedin size={22} />
                                LinkedIn
                            </a>

                            <a
                                href={personal.social.leetcode}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-blue-500 transition"
                            >
                                <SiLeetcode size={22} />
                                LeetCode
                            </a>

                        </div>

                    </div>

                    {/* Right */}

                    <form
    onSubmit={handleSubmit}
    className="space-y-6"
>

                        <input
    type="text"
    name="name"
    required
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
    className="w-full bg-[#111111] border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
/>

                        <input
    type="email"
    name="email"
    required
    value={formData.email}
    onChange={handleChange}
    placeholder="Your Email"
    className="w-full bg-[#111111] border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
/>

                     <input
    type="text"
    required
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    placeholder="Subject"
    className="w-full bg-[#111111] border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
/>

                       <textarea
    rows="6"
    required
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    className="w-full bg-[#111111] border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500 resize-none"
></textarea>
                       <button
    type="submit"
    disabled={loading}
    className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition w-full md:w-auto disabled:opacity-60"
>

    {

        loading

        ?

        "Sending..."

        :

        "Send Message"

    }

</button>
                    </form>

                </div>

            </div>

        </motion.section>
    );

}

export default Contact;