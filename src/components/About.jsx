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

      <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
        {/* Profile Photo */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start"
        >
          <div className="w-[220px] sm:w-[250px] lg:w-[280px] h-[280px] sm:h-[320px] lg:h-[350px] rounded-2xl overflow-hidden shadow-card">
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
          className="flex-1 text-center lg:text-left px-4 lg:px-0"
        >
          <p className="text-secondary text-[14px] sm:text-[16px] lg:text-[17px] max-w-3xl leading-[26px] sm:leading-[28px] lg:leading-[30px] mx-auto lg:mx-0">
            I'm a skilled software developer with strong experience in TypeScript and JavaScript, and deep expertise in modern frameworks and libraries including React, Next.js, Node.js, and Three.js. I specialize in building high-performance, scalable, and visually engaging web applications that deliver real value. <br /><br />

            I'm a quick learner who adapts easily to new technologies and project requirements, and I believe great products are built through clear communication and close collaboration. I work hand-in-hand with clients to understand their goals, translate ideas into practical solutions, and deliver clean, maintainable code on time.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");