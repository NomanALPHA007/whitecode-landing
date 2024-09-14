"use client";
import { ItemCard } from "@/components";
import { allNews } from "@/data";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const VIEW_COUNT = 6;

const AllNews = () => {
	const [visibleNews, setVisibleNews] = useState(VIEW_COUNT);
	const allNewsVisible = visibleNews === allNews.length;

	const handleToggleProjects = () => {
		setVisibleNews(allNewsVisible ? VIEW_COUNT : allNews.length);
	};

	const initialNews = allNews.slice(0, VIEW_COUNT);
	const additionalNews = allNews.slice(VIEW_COUNT);

	return (
		<div className="w-full px-2 md:px-12 lg:px-48 padding-y lg:py-36 flex flex-col items-center justify-center gap-20">
			{/* All news */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="w-[100%] md:w-[70vw] flex justify-center items-center gap-5 lg:gap-10 flex-wrap"
			>
				{initialNews.map((news, index) => (
					<ItemCard key={index} title={news.name} img={news.img} />
				))}
			</motion.div>

			<AnimatePresence>
				{visibleNews > VIEW_COUNT && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.6 }}
						className="w-[100%] md:w-[70vw] flex justify-center items-center gap-5 lg:gap-10 flex-wrap"
					>
						{additionalNews.map((news, index) => (
							<ItemCard
								key={index + VIEW_COUNT}
								title={news.name}
								img={news.img}
							/>
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
				{!allNewsVisible ? "See more" : "See less"}
			</Button>
		</div>
	);
};

export default AllNews;
