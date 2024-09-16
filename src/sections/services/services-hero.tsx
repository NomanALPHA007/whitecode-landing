"use client";
import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
	return (
		<div className="bg-custom h-[55vh] padding-y px-8 md:px-24 lg:px-28 xl:px-36 flex items-center justify-center mb-2">
			<motion.div
				initial={{ opacity: 0, y: 20 }} 
				whileInView={{ opacity: 1, y: 0 }} 
				transition={{ duration: 0.6 }} 
				className="w-[90%] xl:w-[70%] text-center"
			>
				<span className="text-accent font-jura font-[600] text-3xl md:text-5xl lg:text-6xl tracking-widest">
					Move beyond integration to intelligence
				</span>
			</motion.div>
		</div>
	);
};

export default ServicesHero;
