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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  prithivi, 
  yam,
  anjan,
} from "../assets";

// Navigation links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services offered
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

// Technologies
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

// Work experiences
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "Rabi displayed strong technical skills and professionalism, effectively solving problems and reliably meeting all project deadlines with dedication.",
    name: "Prithivi Raj Paneru",
    designation: "Assistant Professor",
    company: "Tribhuwan University",
    image: prithivi, 
  },
  {
    testimonial:
      "Rabi consistently demonstrated strong technical skills, creativity, and initiative in his projects. His work consistently met high standards with excellence.",
    name: "Yam Kumar Baral",
    designation: "Coordinator",
    company: "JMC",
    image: yam,
  },
  {
    testimonial:
      "We are extremely satisfied with Rabi's exceptional and outstanding work. He is reliable, skilled, and goes above and beyond to consistently deliver excellent results.",
    name: "Anjan Rana Magar",
    designation: "Founder",
    company: "Astar Unisex Salon",
    image: anjan,
  },
];

// Projects
const projects = [
  {
    name: "Astar Unisex Salon",
    description:
      "Web-based platform that allows users to explore services, book barber appointments, and manage reservations online, providing a convenient and hassle-free grooming experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/RabiChhetri/Frontend",
    website_link: "https://astar-salon.netlify.app",
  },
  {
    name: "Grocery Delivery Website",
    description:
      "Web-based grocery delivery platform with real-time order tracking and intelligent customer interaction.Features live updates and AI-powered chat support for a fast, secure, and seamless shopping experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind-css", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/RabiChhetri/ivarcart",
    website_link: "https://ivarcart.netlify.app",
  },
  {
    name: "Media-Search",
    description:
      "Media Search is a modern web app that lets users search high-quality photos and videos using the Unsplash and Pexels APIs, with favorites saved locally for quick access.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "tailwind-css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/RabiChhetri/Media-Search",
    website_link: "https://media-search-app.netlify.app",
  },
   {
    name: "Media-Search",
    description:
      "Media Search is a modern web app that lets users search high-quality photos and videos using the Unsplash and Pexels APIs, with favorites saved locally for quick access.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "tailwind-css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/RabiChhetri/Media-Search",
    website_link: "https://media-search-app.netlify.app",
  },
];

// Exports
export { services, technologies, experiences, testimonials, projects };
