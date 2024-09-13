"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";

const Vision = () => {
  return (
    <div className="w-full bg-white padding flex items-center justify-center">
      <div className="relative w-[100%] md:flex items-center justify-between gap-4">
        <div className="relative w-[100%] md:flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className=" w-[100%] md:w-[50%] lg:w-[45%] max-md:absolute max-md:z-10 max-md:px-10 max-md:py-20 max-sm:py-10"
          >
            <span className="font-jura text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-[600] tracking-wide leading-snug">
              Our Mission
            </span>
            <br />
            <span className="font-montserrat text-base lg:text-base xl:text-base max-md:font-[600] max-md:tracking-wide max-md:leading-relaxed ">
              We position ourselves to provide affordable IT solutions for all
              sorts of business sizes, so you don’t have to worry if you’re an
              SME. Our budget is tailored according to the size of your
              business.
            </span>
            <br />
            <Button
              radius="full"
              size="sm"
              variant="ghost"
              className="border-1 border-black hover:!bg-transparent hover:scale-105 flex items-center justify-center"
              endContent={ICONS.arrow_right}
            >
              <div className=" py-4">
                <span className="text-base">Lets have a Chat</span>
              </div>
            </Button>
          </motion.div>

          <div className="relative w-[100%] md:w-[50%] lg:w-[45%] xl:w-[40%]">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative z-0"
            >
              <div className="absolute inset-0 bg-white opacity-50 max-md:opacity-60 z-10"></div>
              <Image
                src="/vision.jpg"
                alt="Hero Image"
                loading="lazy"
                removeWrapper
                className="h-auto relative z-0"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
