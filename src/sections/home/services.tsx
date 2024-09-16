"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ServiceSection = () => {
  const services = [
    "Custom AI & Image Processing Solution",
    "Machine Learning Model Development",
    "Data Analytics and Visualization",
    "Natural Language Processing",
    "Computer Vision Applications",
    "Robotic Process Automation",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex flex-col lg:flex-row  p-4 sm:p-8 justify-center items-center">
      {/* Left Side */}
      <div className="lg:w-[40%] xl:w-[30%] lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-jura font-bold text-blue-300 mb-4">
          What We Do
        </h2>
        <p className="text-gray-700 font-montserrat mb-6 text-sm sm:text-base">
          We specialize in cutting-edge AI solutions, delivering custom-tailored
          projects that leverage the latest advancements in artificial
          intelligence and image processing technologies. Our team of experts is
          dedicated to solving complex problems and driving innovation across
          various industries.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-blue-300 text-white font-jura px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-blue-400 transition duration-300 flex items-center justify-center">
            More Services
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-[40%] xl:w-[30%] flex justify-center">
        <ul className="space-y-4 w-full">
          {services.map((service, index) => (
            <motion.li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              animate={{
                scale:
                  hoveredIndex === index
                    ? 1.2
                    : hoveredIndex !== null
                    ? 0.95
                    : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white border border-gray-300 rounded-md p-2 lg:p-3 flex justify-center items-center hover:shadow-md transition duration-300 hover:bg-blue-50">
                <span className="text-gray-800 text-center text-xs sm:text-sm md:text-base">
                  {service}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
