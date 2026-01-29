import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion"; // ✅ FIX

const Tech = () => {
  return (
    <>
      {/* Title Section */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="text-center mb-12"
      >
        <p className="text-secondary text-sm uppercase tracking-wider">
          What I am familiar with
        </p>
        <h2 className="text-white text-5xl font-extrabold mt-2">
          Programming Language<span className="text-white">.</span>
        </h2>
      </motion.div>

      {/* Tech Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
