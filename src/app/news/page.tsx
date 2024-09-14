import { ImageCarousel } from "@/components";
import { carouselNews } from "@/data";
import { AllNews, Chat, NewsHero } from "@/sections";
import React from "react";

const News = () => {
	return (
		<div>
			<NewsHero />
			<ImageCarousel projects={carouselNews} />
			<AllNews />
			<Chat />
		</div>
	);
};

export default News;
