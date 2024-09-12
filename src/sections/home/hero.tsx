"use client";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      className="w-full padding md:px-44 flex flex-col justify-center items-center gap-8 h-[calc(100vh-100px)] bg-black bg-opacity-30"
      style={{
        backgroundImage: `url("/herobackground.jpg")`, // Use the imported image
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        //opacity:  0.5, // Sets the opacity to 50%
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[90%] xl:w-[70%] text-center flex justify-center items-center"
      >
        <div className="text-accent font-jura font-[600] text-3xl md:text-8xl lg:text-8xl tracking-widest">
          WhiteCode is Clean Code
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
