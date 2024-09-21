"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutValuesNew = () => {
	return (
		<div className="w-full h-[800px] lg:h-[700px]">
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				slidesPerView={1}
				pagination={{ clickable: true }}
				className="mySwiper w-full h-full"
			>
				<SwiperSlide>
					<div className="h-full px-8 md:px-24 lg:px-36 xl:px-52 py-24 lg:py-60 flex flex-col justify-center items-center gap-6">
						<div className="font-jura text-3xl md:text-4xl lg:text-5xl font-[600]">
							Empowering Women in Technology
						</div>
						<div className="font-jura text-xl lg:text-2xl">
							We are dedicated to promoting gender diversity and inclusion
							within the tech industry. Our initiatives focus on empowering
							women by providing opportunities, mentorship, and resources to
							excel in technology roles.
						</div>
						<div className="flex flex-col justify-center items-center gap-3">
							<div className="rounded-full bg-pink-400 w-28 h-28 "></div>
							<div className="font-jura text-base lg:text-lg font-[600]">
								Nur Sohada
							</div>
							<div className="font-jura text-center text-base lg:text-lg">
								Ui/Ux Development Team <br />
								Member
							</div>
							<div className="font-montserrat text-base lg:text-lg italic">
								“As a member of Project WhiteCode, I am proud to affirm our
								unwavering commitment to women empowerment in the tech industry”
							</div>
						</div>
					</div>
				</SwiperSlide>
				{/* <SwiperSlide>
					<div className="h-full px-8 md:px-24 lg:px-36 xl:px-52 py-24 lg:py-60 flex justify-start items-center">
						<div className="font-jura text-xl md:text-2xl lg:text-3xl w-[85%] lg:w-[60%]">
							Despite being in the era of Industry 5.0, basic IT solutions
							remain unaffordable, particularly for SMEs and startups. SMEs
							often hesitate due to high initial costs, while startups find over
							60% of their funding consumed by tech development, which is even
							higher for tech-focused startups.
						</div>
					</div>
				</SwiperSlide> */}
			</Swiper>
		</div>
	);
};

export default AboutValuesNew;
