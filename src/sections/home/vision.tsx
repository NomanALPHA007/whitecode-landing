"use client";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";

const Vision = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="font-jura text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-[600] tracking-wide leading-snug mb-8">
            Our Mission
          </h1>
          <p className="font-montserrat text-base lg:text-base xl:text-base max-md:font-[600] max-md:tracking-wide max-md:leading-relaxed mb-6">
            We position ourselves to provide affordable IT solutions for all
            sorts of business sizes, so you don't have to worry if you're an
            SME. Our budget is tailored according to the size of your business.
          </p>
          <button className="bg-transparent border border-black text-black px-6 py-4 rounded-full text-base font-semibold transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 flex items-center justify-center">
            Let's have a Chat
            <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-0"
        >
          <img
            src="/vision.jpg"
            alt="Team collaborating on a project"
            className="w-full h-full object-cover relative z-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
