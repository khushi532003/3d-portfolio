import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./AboutModel";
import CanvasLoader from "./Loader";
import Tilt from "./Tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full cyan-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="
            bg-tertiary
            rounded-[20px]
            py-5
            px-4
            sm:px-8
            min-h-[190px]
            sm:min-h-[240px]
            md:min-h-[280px]
            flex
            justify-evenly
            items-center
            flex-col
          "
        >
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />

          <h3 className="text-white text-[15px] sm:text-[18px] md:text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div className="w-full">

        {/* TOP SECTION */}
        <div className="w-full grid grid-cols-12 gap-6">

          {/* 3D MODEL */}
          <div className="col-span-12 md:col-span-4">
            <div className="w-full h-[260px] sm:h-[380px] md:h-[500px]">
              <Canvas
                shadows
                camera={{
                  fov: 75,
                  near: 0.1,
                  far: 200,
                  position: [-4, 3, 4],
                }}
                gl={{ preserveDrawingBuffer: true }}
              >
                <Suspense fallback={<CanvasLoader />}>
                  <ambientLight intensity={2} />

                  <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 4}
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
          </div>

          {/* OVERVIEW */}
          <div className="col-span-12 md:col-span-8">

            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>
                Introduction
              </p>

              <h2 className={styles.heroHeadText}>
                Overview
              </h2>
            </motion.div>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="
                mt-4
                text-secondary
                text-[15px]
                sm:text-[17px]
                max-w-3xl
                leading-[26px]
                sm:leading-[30px]
              "
            >
              I'm a React.js Frontend Developer with 3.5+ years of
              experience building responsive, interactive, and visually
              engaging web applications. I specialize in React.js,
              Next.js, TypeScript, JavaScript, HTML, CSS, and modern
              styling frameworks like Tailwind CSS and Bootstrap.

              <br />
              <br />

              I also work with Three.js and React Three Fiber to create
              immersive 3D web experiences, interactive interfaces, and
              engaging animations.

              <br />
              <br />

              I focus on building clean, scalable, responsive, and
              user-friendly frontend experiences with strong UI and
              smooth interactions.
            </motion.p>
          </div>
        </div>

        {/* SERVICES */}
        <div
          className="
            mt-10
            sm:mt-14
            md:mt-20
            grid
            grid-cols-2
            gap-4
            sm:flex
            sm:flex-wrap
            sm:gap-8
            md:gap-10
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");