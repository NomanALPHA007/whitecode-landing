"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
const Mission = () => {
  return (
    <div className="w-full bg-white padding flex items-center justify-center">
      <div className="relative w-[100%] md:flex items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-[100%] md:w-[50%] lg:w-[45%] max-md:absolute max-md:z-10 max-md:px-10 max-md:py-20 max-sm:py-10"
        >
          <span className="font-jura text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-[600] tracking-wide leading-snug">
            Our Mission
          </span>
          <br />
          <span className="font-montserrat text-base lg:text-base xl:text-base max-md:font-[600] max-md:tracking-wide max-md:leading-relaxed ">
            At Project WhiteCode, we aim to deliver innovative, customtailored
            software solutions that drive efficiency and excellence
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-[100%] md:w-[50%] lg:w-[45%] xl:w-[40%] z-0"
        >
          <Image
            src="/mission.jpg"
            alt="Hero Image"
            loading="lazy"
            removeWrapper
            className="h-auto z-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
