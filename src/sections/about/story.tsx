"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

const Story = () => {
	return (
		<div className="w-full h-[400px] md:h-[550px] lg:h-[700px]">
			<Swiper
				modules={[Autoplay, Navigation, Pagination, EffectFade]}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				effect={'fade'}
				slidesPerView={1}
				pagination={{ clickable: true }}
				className="mySwiper w-full h-full"
			>
				<SwiperSlide>
					<div className="h-full bg-blue-gradient px-8 md:px-24 lg:px-36 xl:px-52 py-24 lg:py-60 text-white flex justify-end items-center">
						<div className="font-jura text-5xl md:text-6xl lg:text-8xl font-[600]">
							Our Story
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-full bg-blue-gradient px-8 md:px-24 lg:px-36 xl:px-52 py-24 lg:py-60 text-white flex justify-start items-center">
						<div className="font-jura text-xl md:text-2xl lg:text-3xl w-[85%] lg:w-[60%]">
							Despite being in the era of Industry 5.0, basic IT solutions
							remain unaffordable, particularly for SMEs and startups. SMEs
							often hesitate due to high initial costs, while startups find over
							60% of their funding consumed by tech development, which is even
							higher for tech-focused startups.
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Story;
