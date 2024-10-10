import mypic from "../assets/IMG_6122.JPG"
import { ABOUT_TEXT, ABOUT_TEXT2 } from "../constants"
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b overflow-hidden border-neutral-900 pb-4">
         <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">me</span></h1>
         <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={mypic} alt="about" />
                </div>
                
            </motion.div>
{/* image uploaded */}
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            
            className="w-full lg:w-1/2">
                <div className=" justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 text-justify"># {ABOUT_TEXT}</p>
                    <p className="my-2 max-w-xl py-6 text-justify"># {ABOUT_TEXT2}</p>

                </div>
            </motion.div>
         </div>
    </div>
  )
}

export default About