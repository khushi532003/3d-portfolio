import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { motion } from "framer-motion"
import MacBook from "./canvas/MacBook"
import BallParticle from "./canvas/BallParticle"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Setup from "./canvas/setup/Setup"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex-row flex items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#66bfe0]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className="text-[#66bfe0]">Khushi</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals,  user <br className="sm:block hidden" /> interfaces and web applications
          </p>
        </div>
      </div>
      <Setup/>
      {/* Particle  */}
      {/* <div className="z-10 w-full h-full absolute">
        <Canvas camera={{ position: [1.5, 1.5, 1.5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <OrbitControls autoRotate enableZoom={false} enablePan={false} makeDefault />

          <BallParticle position={[0, 0, 0]} scale={[1, 1, 1]} />
          <BallParticle position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} />
        </Canvas>
      </div> */}
      {/* Particle  */}

      {/* <ComputersCanvas/> */}
      
      {/* <div className="z-20 w-full h-full">
        <MacBook />
      </div> */}

      <div className="absolute z-30 xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[34px] h-[64px] rounded-3xl border-4 border-secondary p-2 flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}

              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;