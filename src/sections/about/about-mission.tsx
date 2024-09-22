"use client";
import { motion } from "framer-motion";

const AboutMission = () => {
	return (
		<div className="bg-bgprimary px-8 md:px-24 lg:px-28 xl:px-36 py-16 lg:py-48 flex flex-col items-center justify-center gap-14 md:gap-24">
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="font-jura text-xl lg:text-3xl xl:text-4xl tracking-wide font-[500]"
			>
				Our Mission
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -10 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.6 }}
				className="w-[100%] md:w-[80%] lg:w-[65%] max-md:px-4 max-md:py-20 max-sm:py-10 text-center"
			>
				<span className="font-montserrat text-2xl lg:text-4xl xl:text-5xl leading-relaxed">
					At Project WhiteCode, we aim to deliver innovative, customtailored
					software solutions that drive efficiency and excellence
				</span>
			</motion.div>
		</div>
	);
};

export default AboutMission;
