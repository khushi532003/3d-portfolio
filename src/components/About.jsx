import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./AboutModel";
import CanvasLoader from "./Loader";
import AnimatedModel from "./AboutModel";
import Tilt from "./Tilt";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[220px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full cyan-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            speed: 450,
            scale: 1
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="icon" className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <div className="w-full grid grid-cols-12 sm:gap-6">
        <div className="sm:col-span-4 col-span-12">
          <Canvas
            shadows
            camera={{ fov: 75, near: 0.1, far: 200, position: [-4, 3, 4] }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <ambientLight intensity={2} />
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 4} // -45 degrees
                maxAzimuthAngle={Math.PI / 16}
              />
              <Model               
                position={[0, -2.3, 0]}
                scale={3.5}
                rotation={[0, -0.5, 0]}
              />
            </Suspense>
          </Canvas>
        </div>

        <div className="sm:col-span-8 col-span-12">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.heroHeadText}>Overview</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a passionate React JS Frontend Developer with over 3 years of experience crafting responsive, interactive, and visually engaging web applications. My core skills include <strong>React.js, JavaScript, TypeScript, HTML, CSS</strong>, and styling frameworks like <strong>Tailwind CSS and Bootstrap</strong>. I also specialize in <strong>React Three Fiber</strong> for building immersive 3D web experiences.

            <br /> <br />
            I collaborate effectively to deliver scalable, intuitive solutions—from clean UI designs to advanced 3D interfaces—that drive real-world impact.
          </motion.p>

          <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");