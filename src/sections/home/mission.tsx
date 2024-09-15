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

const MissionSection = () => {
  const categories = [
    {
      name: "Discover",
      color: "bg-blue-300",
      skills: ["Research", "Analysis", "Planning"],
    },
    {
      name: "Develop",
      color: "bg-blue-300",
      skills: ["Coding", "Testing", "Debugging"],
    },
    {
      name: "Deliver",
      color: "bg-blue-300",
      skills: ["Deployment", "Optimization", "Support"],
    },
  ];

  const steps = [
    { name: "Research", icon: FaSearch },
    { name: "Specification", icon: FaClipboardList },
    { name: "Design", icon: FaPencilAlt },
    { name: "Develop", icon: FaCode },
    { name: "QA Testing", icon: FaBug },
    { name: "Launch", icon: FaRocket },
    { name: "Maintenance", icon: FaTools },
  ];

  return (
    <div className="mission-section container mx-auto px-4 py-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mission-section__title text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-center mb-12 text-gray-800"
      >
        How we work
      </motion.h2>

      <div className="mission-section__categories flex flex-col md:flex-row justify-between mb-16 space-y-4 md:space-y-0 md:space-x-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mission-section__category px-6 py-3 rounded-lg ${category.color} text-white shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer group relative overflow-hidden`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg md:text-xl font-semibold">
              {category.name}
            </h3>
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="text-sm md:text-base text-white mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: skillIndex * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mission-section__timeline relative">
        <div className="mission-section__line absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
        <div className="mission-section__steps flex flex-wrap justify-between relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mission-section__step flex flex-col items-center w-1/2 sm:w-1/4 md:w-auto mb-8 md:mb-0"
            >
              <motion.div
                className="mission-section__icon-wrapper bg-white rounded-full p-3 md:p-4 mb-3 shadow-md transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="mission-section__icon text-2xl md:text-3xl text-gray-800" />
              </motion.div>
              <div className="mission-section__step-name text-xs md:text-sm font-medium text-center text-gray-600">
                {step.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
