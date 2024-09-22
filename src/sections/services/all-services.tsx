"use client";
import { motion } from "framer-motion"
import { ItemCard } from "@/components";
import { services } from "@/data";

const AllServices = () => {
	return (
		<div className="bg-bgprimary px-2 md:px-6 lg:px-12 py-16 md:py-32 w-full flex flex-col items-center justify-center gap-20">
      <motion.div
      initial={{ opacity: 0, x: 20 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }} 
      className="font-jura text-4xl tracking-wide font-[500]">
        Our Services
      </motion.div>
			<motion.div
      initial={{ opacity: 0, x: -20 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }} 
      className="w-[100%] md:w-[70vw] flex justify-center items-center gap-5 lg:gap-10 flex-wrap">
        {
          services.map((service, index) => (
            <ItemCard key={index} title={service.name} img={service.img} />
          ))
        }
			</motion.div>
		</div>
	);
};

export default AllServices;
