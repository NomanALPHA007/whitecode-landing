"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const AboutHero = () => {
	return (
		<div className="w-full bg-custom padding flex items-center justify-center">
			<div className="w-[100%] md:w-[80%] flex flex-col items-center justify-center gap-16">
				<motion.div 
          initial={{opacity: 0, y: -10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        className="py-2 md:py-8 font-jura text-3xl md:text-4xl lg:text-6xl leading-10 tracking-wide font-[600] text-accent">
					Hi, We Are <span className="text-primary">WhiteCode</span>
				</motion.div>
				<div className="relative w-[100%] md:flex items-center justify-between gap-4">
					<motion.div 
          initial={{opacity: 0, x: -10}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6,  delay: 0.3}}
          className="text-accent w-[100%] md:w-[50%] lg:w-[45%] max-md:absolute max-md:z-10 max-md:px-10 max-md:py-20 max-sm:py-10">
						<span className="font-montserrat text-xl lg:text-4xl xl:text-5xl max-md:font-[600] max-md:tracking-wide max-md:leading-relaxed">
							We are a premier software development firm specializing in
							creating custom-tailored solutions.
						</span>
					</motion.div>
          <motion.div
          initial={{opacity: 0, x: 10}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay:0.6}}
          className="w-[100%] md:w-[50%] lg:w-[45%] xl:w-[40%]"
          >
					<Image
						src="/about-hero-image.png"
						alt="Hero Image"
						loading="lazy"
						removeWrapper
						className="h-auto z-0"
            />
          </motion.div>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
