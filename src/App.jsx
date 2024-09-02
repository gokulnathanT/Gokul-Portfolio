import {useEffect} from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SmoothScroll from 'smooth-scroll';
import { Helmet } from "react-helmet-async";

const App = () => {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 1200, // Adjust speed
      speedAsDuration: true,
      offset: 70, // Adjust offset if needed
    });
  }, []);
  
 
  return (

    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      {/* <Helmet>
        <title>Gokul ⚡</title>
      </Helmet> */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <NavBar/>
          <Hero/>
          <About/>
          <Technologies/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
    </div>
  )
}

export default App