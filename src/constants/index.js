import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  reactThreeFiber,
  gsap,
  paras,
  redux,
  tailwind,
  framerMotion,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  gtf,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  portfolioImage,
  marbleGameImage,
  characterControllerImage,
  gvr3dImage,
  origenImage,
  npsImage,
  northwindImage,
  shrivrindaImage,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Interactive Experiences",
    icon: web,
  },
  {
    title: "3D Web Experiences",
    icon: mobile,
  },
  {
    title: "Frontend Development",
    icon: backend,
  },
];

const technologies = [
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: nextjs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Framer Motion", icon: framerMotion },
  { name: "React Three Fiber", icon: reactThreeFiber },
  { name: "GSAP", icon: gsap },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "React JS Developer",
    company_name: "GTF Technologies",
    icon: gtf,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Developing production-ready real-estate websites using React.js, Next.js, TypeScript, Tailwind CSS, and modern frontend technologies.",
      "Independently handling frontend development for multiple client websites, including UI implementation, responsive layouts, reusable components, animations, and cross-browser compatibility.",
      "Built and contributed to modern, responsive web experiences for real-estate brands including Origen Realty, NPS Developers, North Wind Estates, Shri Vrinda, Runal Group, Great Value Realty, and Anantraj Limited.",
      "Collaborating with designers and developers to translate UI designs into scalable and high-quality frontend experiences.",
      "Working with Git and GitHub for version control and collaborative development.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Paras Parivaar",
    icon: paras,
    iconBg: "#383E56",
    date: "May 2024 - Jan 2025",
    points: [
      "Developed responsive company and business websites using React.js, Tailwind CSS, JavaScript, HTML, and CSS.",
      "Worked as a Frontend Developer and Team Lead, coordinating frontend tasks and supporting team members during development.",
      "Built reusable UI components and responsive layouts with a focus on clean design and cross-browser compatibility.",
      "Collaborated with the team to deliver projects within defined timelines and maintain development quality.",
    ],
  },

  {
    title: "Web Designer",
    company_name: "Adaccurate Pvt. Ltd.",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jul 2023 - May 2024",
    points: [
      "Designed and developed responsive websites for clients using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
      "Worked on website UI, responsive layouts, cross-browser compatibility, and frontend implementation.",
      "Handled website design and frontend requirements for multiple client projects.",
      "Worked on SEO-focused website structure and frontend best practices.",
    ],
  },

  {
    title: "Web Designer",
    company_name: "Core Industrial Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2022 - Jul 2023",
    points: [
      "Designed and developed responsive company websites using HTML, CSS, JavaScript, and jQuery.",
      "Created user-friendly website layouts and implemented responsive designs across different screen sizes.",
      "Maintained and updated existing websites based on business and design requirements.",
      "Focused on clean UI implementation, browser compatibility, and website usability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "An interactive 3D developer portfolio built with React, React Three Fiber, Three.js, and modern animation libraries. Designed to showcase frontend development, 3D experiences, and interactive web development skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "pink-text-gradient",
      },
      {
        name: "gsap",
        color: "blue-text-gradient",
      },
    ],
    image: portfolioImage,
    source_code_link:
      "https://github.com/khushi532003/3d-portfolio",
    live_demo_link:
      "https://3d-portfolio-xv8l.vercel.app/",
  },

  {
    name: "3D Character Controller",
    description:
      "An interactive third-person 3D character experience built with React Three Fiber and Three.js, featuring character movement, 3D scene interaction, camera controls, and immersive web-based gameplay mechanics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "pink-text-gradient",
      },
      {
        name: "drei",
        color: "blue-text-gradient",
      },
    ],
    image: characterControllerImage,
    source_code_link:
      "https://github.com/khushi532003/character-controller",
    live_demo_link:
      "https://character-controller-chi.vercel.app/",
  },

  {
    name: "Marble 3D Game",
    description:
      "An interactive physics-based 3D game built with React Three Fiber, Three.js, and React Three Rapier. Features real-time marble movement, keyboard controls, jumping mechanics, obstacles, and game state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "pink-text-gradient",
      },
      {
        name: "rapier",
        color: "blue-text-gradient",
      },
    ],
    image: marbleGameImage,
    source_code_link:
      "https://github.com/khushi532003/marble-game",
    live_demo_link:
      "https://marble-game-rose.vercel.app/",
  },

  {
    name: "GVR 3D Experience",
    description:
      "An interactive 3D web experience featuring a custom animated water effect created with Three.js, combining immersive visuals with a modern real-estate presentation.",
    tags: [
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "webgl",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gvr3dImage,
    live_demo_link:
      "https://gvr3d.netlify.app/",
  },

  {
    name: "Origen Realty",
    description:
      "Production real-estate website where I independently handled almost the complete frontend development, including responsive UI implementation, reusable components, interactions, animations, and cross-device compatibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: origenImage,
    live_demo_link:
      "https://origenrealty.in/",
  },

  {
    name: "NPS Developers",
    description:
      "Production real-estate website for NPS Developers, where I independently handled almost the complete frontend development with a focus on responsive layouts, reusable components, interactive sections, and modern UI implementation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: npsImage,
    live_demo_link:
      "https://npsdevelopers.com/",
  },

  {
    name: "North Wind Estates",
    description:
      "Production real-estate website where I independently handled almost the complete frontend development, focusing on responsive design, reusable React components, visual interactions, and polished user experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: northwindImage,
    live_demo_link:
      "https://www.northwindestates.com/",
  },

  {
    name: "Shri Vrinda",
    description:
      "Production real-estate website where I independently handled almost the complete frontend development, implementing responsive layouts, reusable components, UI interactions, and cross-device compatibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: shrivrindaImage,
    live_demo_link:
      "https://www.shrivrinda.com/",
  },
];
export { services, technologies, experiences, testimonials, projects };