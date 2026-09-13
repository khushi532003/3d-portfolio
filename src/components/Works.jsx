import React from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { github, linkIcon } from "../assets";
import Tilt from "./Tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, "0.75")}
      className="w-full sm:w-[360px] h-[570px]"
    >
      <Tilt
        options={{
          max: 20,
          scale: 1.02,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative w-full h-[230px] flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub */}
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="absolute top-3 right-3 bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-5 flex flex-col flex-1">

          <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>

          {/* Fixed Description Area */}
          <div className="mt-2 h-[110px] overflow-hidden">
            <p className="text-secondary text-[14px] leading-[22px]">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 min-h-[44px] flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Live Demo */}
          {live_demo_link && (
            <div className="mt-auto pt-5">
              <button
                onClick={() => window.open(live_demo_link, "_blank")}
                className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800 transition"
              >
                Live Demo →
              </button>
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>

        <h2 className={styles.heroHeadText}>
          Featured Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A selection of my frontend and 3D web projects, combining
          React.js, Next.js, TypeScript, Three.js, React Three Fiber,
          and modern animation technologies to create responsive,
          interactive, and engaging web experiences.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");