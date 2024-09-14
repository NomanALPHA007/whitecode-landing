"use client";
import { motion } from "framer-motion";
import { HomeValuesCarosel, ValueCard } from "@/components";
import { values } from "@/data";

const Values = () => {
  return (
    <div className="px-2 md:px-6 lg:px-12 py-16 md:py-32 w-full flex flex-col items-center justify-center gap-20">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="font-jura text-4xl tracking-wide font-[500]"
      >
        Exception is the Standard
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="font-Montserrat text-2xl tracking-wide font-[500]"
      >
        Why choose Us
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[100%] md:w-[70vw] flex justify-center items-center gap-5 lg:gap-10 flex-wrap"
      >
        <HomeValuesCarosel></HomeValuesCarosel>
      </motion.div>
    </div>
  );
};

export default Values;
