import { useEffect,useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollTop(){

    const[visible,setVisible]=useState(false);

    useEffect(()=>{

        const handleScroll=()=>{

            if(window.scrollY>400){

                setVisible(true);

            }

            else{

                setVisible(false);

            }

        };

        window.addEventListener("scroll",handleScroll);

        return()=>window.removeEventListener("scroll",handleScroll);

    },[]);

    const scrollTop=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth",

        });

    };

    if(!visible){

        return null;

    }

    return(

        <button
            onClick={scrollTop}
            className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition"
        >

            <ChevronUp/>

        </button>

    );

}

export default ScrollTop;