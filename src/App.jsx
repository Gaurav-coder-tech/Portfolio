import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Coding from "./components/Coding/Coding";
import ScrollTop from "./components/ScrollTop/ScrollTop";
function App() {
    return (
        <div className="bg-black text-white">

            <Navbar />

            <Hero />

            <About />

            <Education />

            <Skills />

            <Projects />

<Coding />

<Contact />

            <Footer />
            <ScrollTop/>

        </div>
    );
}

export default App;