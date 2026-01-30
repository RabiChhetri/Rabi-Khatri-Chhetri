import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { rabi } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1.05}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 flex flex-col lg:flex-row items-start gap-10">
        {/* Profile Photo */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="flex-shrink-0"
        >
          <div className="w-[280px] h-[350px] rounded-2xl overflow-hidden shadow-card">
            <img
              src={rabi}
              alt="Rabi Chhetri"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="flex-1"
        >
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and Next.
            I'm a quick learner and collaborate closely with clients to create
            efficient, scalable, and user-friendly solutions that solve real-world
            problems. Let's work together to bring your ideas to life!
          </p>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
