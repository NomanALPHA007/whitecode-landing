"use client";
import { motion } from "framer-motion";
import { HomeValuesCarousel, ValueCard } from "@/components";
import { values } from "@/data";

const Values = () => {
  return (
    <div className="px-4 md:px-6 lg:px-12 py-12 md:py-24 lg:py-32 w-full flex flex-col items-center justify-center gap-10 md:gap-20 overflow-hidden">
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="font-jura text-2xl md:text-3xl lg:text-4xl tracking-wide font-semibold text-center"
      >
        Exception is the Standard
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-blue-300 font-Montserrat text-xl md:text-2xl lg:text-3xl tracking-wide font-medium text-center"
      >
        Why Choose Us
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap mx-auto"
      >
        <HomeValuesCarousel />
      </motion.div>
    </div>
  );
};

export default Values;
