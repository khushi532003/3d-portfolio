import { styles } from "../styles";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import brochurePdf from "../assets/brochure/khushi.pdf";
import BallParticle from "./canvas/BallParticle";
import Setup from "./canvas/setup/Setup";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      
      {/* Hero Text */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] md:top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-30`}
      >
        {/* Timeline Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#66bfe0]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Content */}
       <div>
  <h1 className={`${styles.heroHeadText} text-white`}>
    Hi, I'm{" "}
    <span className="text-[#66bfe0]">
      Khushi
    </span>
  </h1>

  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    React.js & Three.js Developer
  </p>

  <p className={`${styles.heroDesc} mt-2 text-white-100 max-w-lg`}>
    Building interactive, immersive and high-performance web experiences.
  </p>

  {/* CTA Buttons */}
 <div className="flex flex-wrap gap-2 sm:gap-4 mt-8">

  {/* View Projects */}
  <a
    href="#work"
    className="
      px-4 py-2 sm:px-6 sm:py-3
      text-sm sm:text-base
      rounded-lg
      bg-[#66bfe0]
      text-black
      font-semibold
      transition-all duration-300
      hover:bg-white
      hover:scale-105
    "
  >
    View Projects
  </a>

  {/* Contact Me */}
  <a
    href="#contact"
    className="
       px-4 py-2 sm:px-6 sm:py-3
      text-sm sm:text-base
      rounded-lg
      border border-[#66bfe0]
      text-[#66bfe0]
      font-semibold
      transition-all duration-300
      hover:bg-[#66bfe0]
      hover:text-black
      hover:scale-105
    "
  >
    Contact Me
  </a>

  {/* Download Brochure */}
  <a
    href={brochurePdf}
    download
    className="
       px-4 py-2 sm:px-6 sm:py-3
      text-sm sm:text-base
      rounded-lg
      border border-white/70
      text-white
      font-semibold
      transition-all duration-300
      hover:bg-white
      hover:text-black
      hover:scale-105
    "
  >
    Download CV
  </a>

</div>
</div>
      </div>

      {/* 3D Setup */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-20 pointer-events-none">
        <Setup />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 w-full h-full z-10">
        <Canvas
          camera={{
            position: [1.5, 1.5, 1.5],
            fov: 75,
          }}
        >
          <ambientLight intensity={0.5} />

          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            makeDefault
          />

          <BallParticle
            position={[0, 0, 0]}
            scale={[0.7, 0.7, 0.7]}
          />

          <BallParticle
            position={[0, 0, 0]}
            scale={[0.3, 0.3, 0.3]}
          />
        </Canvas>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute z-40 xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[34px] h-[64px] rounded-3xl border-4 border-secondary p-2 flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;