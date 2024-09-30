"use client";
import React from "react";
import {
  FaSearch,
  FaClipboardList,
  FaPencilAlt,
  FaCode,
  FaBug,
  FaRocket,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Mission = () => {
  const categories = [
    {
      name: "Discover",
      color: "bg-[#95c1d1]", // Light mint green
      steps: [
        { name: "Research", icon: FaSearch },
        { name: "Specification", icon: FaClipboardList },
        { name: "Design", icon: FaPencilAlt },
      ],
    },
    {
      name: "Develop",
      color: "bg-[#8e6fea] text-gray-800", // Pastel turquoise with dark text
      steps: [
        { name: "Develop", icon: FaCode },
        { name: "QA Testing", icon: FaBug },
      ],
    },
    {
      name: "Deliver",
      color: "bg-[#8ea0dc] text-white", // Light peach with white text
      steps: [
        { name: "Launch", icon: FaRocket },
        { name: "Maintenance", icon: FaTools },
      ],
    },
  ];

  return (
    <div className="mission-section w-full min-h-screen mx-auto px-4 py-24 md:py-32 overflow-hidden flex flex-col justify-center bg-bgprimary">
      {/* Mission Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mission-section__title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jura font-bold text-center mb-8 lg:mb-12 text-gray-800"
      >
        How we work
      </motion.h2>

      {/* Workflow Categories for Small Screens */}
      <div className="flex flex-col space-y-8 sm:hidden">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3
              className={`text-lg font-semibold ${category.color} py-2 px-4 rounded-md mb-4`}
            >
              {category.name}
            </h3>
            <div className="flex space-x-4 justify-center">
              {category.steps.map((step, stepIndex) => (
                <motion.div
                  key={stepIndex}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                >
                  <div className="bg-gray-200 rounded-full p-3 shadow-md mb-2">
                    <step.icon className="text-xl text-gray-700" />
                  </div>
                  <div className="text-sm font-montserrat text-gray-600">
                    {step.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Categories for Medium and Large Screens */}
      <div className="hidden sm:flex sm:flex-col">
        <div className="mission-section__categories flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mission-section__category px-4 py-3 sm:px-6 sm:py-4 rounded-lg ${category.color} shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer group relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-sm sm:text-lg md:text-xl font-montserrat text-center">
                {category.name}
              </h3>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {category.steps.map((step, stepIndex) => (
                  <motion.span
                    key={stepIndex}
                    className="text-xs sm:text-sm md:text-base text-white mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: stepIndex * 0.1 }}
                  >
                    {step.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Timeline */}
        <div className="mission-section__timeline relative flex justify-center">
          <div className="mission-section__steps grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 justify-center items-center w-full lg:w-4/5">
            {categories.map((category, index) =>
              category.steps.map((step, stepIndex) => (
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                  className="mission-section__step flex flex-col items-center w-full mb-8 px-2 py-2 justify-center"
                >
                  <motion.div
                    className={`${category.color} rounded-full p-4 md:p-5 mb-2 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#758D9B]`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="mission-section__icon text-lg sm:text-xl md:text-2xl text-gray-800" />
                  </motion.div>
                  <div className="mission-section__step-name text-xs sm:text-sm md:text-base font-jura text-center text-gray-600">
                    {step.name}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
