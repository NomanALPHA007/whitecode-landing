"use client";
import { ItemCard } from "@/components";
import { projects } from "@/data";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const VIEW_COUNT = 6;

const AllWorks = () => {
	const [visibleProjects, setVisibleProjects] = useState(VIEW_COUNT);
	const allProjectsVisible = visibleProjects === projects.length;

	const handleToggleProjects = () => {
		setVisibleProjects(allProjectsVisible ? VIEW_COUNT : projects.length);
	};

	const initialProjects = projects.slice(0, VIEW_COUNT);
  const additionalProjects = projects.slice(VIEW_COUNT);

	return (
		<div className="w-full px-2 md:px-12 lg:px-48 padding-y lg:py-36 flex flex-col items-center justify-center gap-20">
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="font-jura text-2xl md:text-4xl lg:text-6xl tracking-wide font-[500] py-2 md:py-8 lg:py-16"
			>
				More of Our Creations
			</motion.div>

			{/* All projects */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="w-[100%] md:w-[70vw] flex justify-center items-center gap-5 lg:gap-10 flex-wrap"
			>
				{initialProjects.map((project, index) => (
					<ItemCard key={index} title={project.name} img={project.img} link={project.link} />
				))}
			</motion.div>

			<AnimatePresence>
        {visibleProjects > VIEW_COUNT && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] md:w-[70vw] flex justify-center items-center gap-5 lg:gap-10 flex-wrap"
          >
            {additionalProjects.map((project, index) => (
              <ItemCard key={index + VIEW_COUNT} title={project.name} img={project.img} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

			<Button
				variant="light"
				size="lg"
				disableRipple
				onPress={handleToggleProjects}
				className="mr-2 self-end hover:!bg-transparent font-[500] text-slate-600 hover:text-slate-500 "
			>
				{!allProjectsVisible ? "See more" : "See less"}
			</Button>
		</div>
	);
};

export default AllWorks;
