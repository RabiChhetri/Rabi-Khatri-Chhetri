import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex-shrink-0"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute top-3 right-3 flex gap-2">
          {website_link && (
            <div
              onClick={() => window.open(website_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={website}
                alt="website"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);

  const cardWidth = 360 + 28; // card width + gap
  const visibleCards = 3;
  const maxIndex = Math.max(0, projects.length - visibleCards);

  useEffect(() => {
    if (projects.length > 3 && isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex > maxIndex ? 0 : nextIndex;
        });
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex]);

  useEffect(() => {
    if (scrollContainerRef.current && projects.length > 3) {
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, cardWidth]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 relative">
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-7 pb-4" style={{ width: projects.length > 3 ? 'max-content' : '100%' }}>
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        {projects.length > 3 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
