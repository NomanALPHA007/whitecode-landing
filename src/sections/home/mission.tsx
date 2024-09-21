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
      skills: ["Research", "Analysis", "Planning"],
    },
    {
      name: "Develop",
      color: "bg-[#8e6fea] text-gray-800", // Pastel turquoise with dark text
      skills: ["Coding", "Testing", "Debugging"],
    },
    {
      name: "Deliver",
      color: "bg-[#8ea0dc] text-white", // Light peach with white text
      skills: ["Deployment", "Optimization", "Support"],
    },
  ];

  const steps = [
    { name: "Research", icon: FaSearch, color: "bg-[#95c1d1]" },
    { name: "Specification", icon: FaClipboardList, color: "bg-[#95c1d1]" },
    { name: "Design", icon: FaPencilAlt, color: "bg-[#95c1d1]" },
    { name: "Develop", icon: FaCode, color: "bg-[#8e6fea]" },
    { name: "QA Testing", icon: FaBug, color: "bg-[#8e6fea]" },
    { name: "Launch", icon: FaRocket, color: "bg-[#8ea0dc]" },
    { name: "Maintenance", icon: FaTools, color: "bg-[#8ea0dc]" },
  ];

  return (
    <div className="mission-section w-full min-h-screen mx-auto px-4 py-24 md:py-32 overflow-hidden flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mission-section__title text-3xl md:text-4xl lg:text-5xl font-jura font-bold text-center mb-12 text-gray-800"
      >
        How we work
      </motion.h2>

      {/* Workflow Categories */}
      <div className="mission-section__categories flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mission-section__category px-6 py-3 rounded-lg ${category.color} shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer group relative overflow-hidden`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg md:text-xl font-montserrat text-center">
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

      {/* Workflow Timeline */}
      <div className="mission-section__timeline relative flex justify-center">
        {/* Steps */}
        <div className="mission-section__steps grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 justify-center items-center w-full lg:w-3/5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mission-section__step flex flex-col items-center w-full sm:w-auto mb-8 md:mb-0 px-2 py-2 justify-center"
            >
              <motion.div
                className={`mission-section__icon-wrapper ${step.color} rounded-full p-4 md:p-5 mb-2 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#758D9B]`}
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="mission-section__icon text-lg md:text-xl text-gray-800" />
              </motion.div>
              <div className="mission-section__step-name text-sm md:text-base font-jura text-center text-gray-600">
                {step.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
