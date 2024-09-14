"use client";
import React from "react";
import { motion } from "framer-motion";
import Map from "@/sections/shared/map"; // Adjust the path according to your folder structure

const Locations = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20">
      {/* Render the Map component here */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full  gap-5 lg:gap-10 flex-wrap"
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default Locations;
