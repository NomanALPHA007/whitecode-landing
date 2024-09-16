"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Vision = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center text-center md:items-start md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-jura font-bold text-blue-300 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700 font-montserrat mb-6 text-sm sm:text-base">
          We position ourselves to provide affordable IT solutions for all sorts
          of business sizes, so you don’t have to worry if you’re an SME. Our
          budget is tailored according to the size of your business.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-blue-300 text-white font-jura px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-blue-400 transition duration-300 flex items-center justify-center">
            About Us
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-4/5 md:w-2/3 lg:w-1/2 h-auto"
        >
          <img
            src="/vision.jpg" // Ensure the correct path to your image file
            alt="Team collaborating on a project"
            className="w-full h-auto object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
