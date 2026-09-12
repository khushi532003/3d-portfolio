import React, { useState } from 'react';
import { fadeIn } from '../utils/motion';
import { github } from '../assets';

import { projects } from '../constants';
import Tilt from './Tilt';

const images = [
  '/images/dragon_1.jpg',
  '/images/dragon_2.jpg',
  '/images/dragon_1.jpg',
  '/images/dragon_2.jpg',
  '/images/dragon_1.jpg',
  '/images/dragon_2.jpg',
  '/images/dragon_1.jpg',
  '/images/dragon_2.jpg',
  '/images/dragon_1.jpg',
  '/images/dragon_2.jpg',
];

const ProjectCard = ({index, name, description, tags, image, source_code_link, onHoverStart, onHoverEnd })=>{
  return (
    <motion.div
    onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    variants={fadeIn("up", "spring", index * 0.5, "0.75")}
    >
      <Tilt
      options={{
        max : 45,
        scale : 1,
        speed : 450
      }}

      className="bg-tertiary p-5 w-[90%] h-[20%] object-cover rounded-lg shadow-md mx-auto"
      >
        <div className="relative w-full h-full">
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={()=> window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[16px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[8px]'>{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[8px] ${tag.name} ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const RotatingImageSlider = () => {

  const [isHovered, setIsHovered] = useState(false);

  const itemCount = images.length;
  const sliderSize = 200;
  const radius = sliderSize / 2 / Math.tan(Math.PI / itemCount); // Dynamic translateZ

  return (
    <div
      className="relative max-w-8xl mx-auto h-screen overflow-hidden flex items-center justify-center bg-primary"
      style={{ perspective: '1000px' }} // ✅ Apply perspective here
    >
      {/* 3D Rotating Slider */}
      <div
       className={`[transform-style:preserve-3d] ${
    isHovered ? '' : 'animate-[spinSlider_20s_linear_infinite]'
  }`}
  style={{
    transform: 'rotateX(-16deg)',
    width: `${sliderSize}px`,
    height: `${sliderSize * 1.25}px`,
    position: 'relative',
    animationPlayState: isHovered ? 'paused' : 'running',
  }}
      >
        {/* {images.map((src, idx) => (
          <div
            key={idx}
            className="absolute inset-0"
            style={{
              transform: `rotateY(${(idx * 360) / itemCount}deg) translateZ(${radius}px)`,
            }}
          >
            <img
              src={src}
              alt={`dragon-${idx + 1}`}
              className="w-[80%] h-[80%] object-cover rounded-lg shadow-md mx-auto"
            />
          </div>
        ))} */}

         {projects.map((project, index)=>(
            <div
            key={index}
            className="absolute inset-0"
            style={{
              transform: `rotateY(${(index * 360) / itemCount}deg) translateZ(${radius}px)`,
            }}
          >
      <ProjectCard
  key={`project-${index}`}
  index={index}
  {...project}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
/>
      </div>
    ))}
      </div>
    </div>
  );
};

export default RotatingImageSlider;
