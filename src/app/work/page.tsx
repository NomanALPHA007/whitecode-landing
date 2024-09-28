import { ImageCarousel } from "@/components";
import { carouselProjects } from "@/data";
import { AllWorks, Chat, WorkHero } from "@/sections";
import React from "react";

const Work = () => {
	return (
		<main>
			<WorkHero />
			<ImageCarousel projects={carouselProjects} />
			<AllWorks />
			<Chat />
		</main>
	);
};

export default Work;
