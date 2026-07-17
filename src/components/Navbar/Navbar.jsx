import { useEffect,useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

    const [menuOpen,setMenuOpen]=useState(false);
const [activeSection,setActiveSection]=useState("home");
    const navLinks=[
        {
            name:"Home",
            href:"#home",
        },
        {
            name:"About",
            href:"#about",
        },
        {
            name:"Education",
            href:"#education",
        },
        {
            name:"Skills",
            href:"#skills",
        },
        {
            name:"Projects",
            href:"#projects",
        },
        {
            name:"Coding",
            href:"#coding",
        },
        {
            name:"Contact",
            href:"#contact",
        },
    ];
useEffect(()=>{

    const sections=document.querySelectorAll("section");

    const observer=new IntersectionObserver(

        (entries)=>{

            entries.forEach((entry)=>{

                if(entry.isIntersecting){

                    setActiveSection(entry.target.id);

                }

            });

        },

        {

            threshold:0.4,

        }

    );

    sections.forEach((section)=>observer.observe(section));

    return()=>{

        sections.forEach((section)=>observer.unobserve(section));

    };

},[]);
    return (

        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

            <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex justify-between items-center">

               <a href="#home">
    <img
        src="/logo.jpeg"
        alt="Logo"
        className="h-12 w-auto"
    />
</a>

                <nav className="hidden md:flex gap-8">

                    {
                        navLinks.map((link)=>(

                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition ${
    activeSection===link.href.substring(1)
    ?
    "text-blue-500"
    :
    "text-gray-300 hover:text-blue-500"
}`}
                            >
                                {link.name}
                            </a>

                        ))
                    }

                </nav>

                <div className="flex items-center gap-4">

                   {/* <a
    href="/resume.pdf"
    target="_blank"
    className="bg-blue-600 hover:bg-blue-700 transition rounded-lg px-3 py-2 text-sm md:px-5 md:py-2 md:text-base"
>
    Resume
</a> */}

                    <button
                        onClick={()=>setMenuOpen(!menuOpen)}
                        className="md:hidden"
                    >
                        {
                            menuOpen
                            ?
                            <X size={30}/>
                            :
                            <Menu size={30}/>
                        }
                    </button>

                </div>

            </div>

            {
                menuOpen &&

                <div className="md:hidden bg-[#111111] border-t border-gray-800">

                    {
                        navLinks.map((link)=>(

                            <a
                                key={link.name}
                                href={link.href}
                                onClick={()=>setMenuOpen(false)}
                               className={`block px-6 py-4 border-b border-gray-800 transition ${
    activeSection===link.href.substring(1)
    ?
    "bg-blue-600"
    :
    "hover:bg-blue-600"
}`}
                            >
                                {link.name}
                            </a>

                        ))
                    }

                </div>

            }

        </header>

    );

}

export default Navbar;