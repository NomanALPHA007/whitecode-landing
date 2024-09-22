"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Image } from "@nextui-org/react";

const AboutValuesNew = () => {
	return (
		<div className="w-full h-[970px] lg:h-[820px]">
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{
					delay: 3500,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				slidesPerView={1}
				pagination={{ clickable: true }}
				className="mySwiper w-full h-full"
			>
				<SwiperSlide>
					<div className="relative h-full bg-[url('/about-values-bg-1.jpg')] bg-cover bg-center filter brightness-125">
						<div className="absolute inset-0 bg-white opacity-75"></div>
						<div className="relative h-full px-8 md:px-32 lg:px-42 xl:px-52 py-24 lg:py-48 flex flex-col justify-center items-center gap-10">
							<div className="font-jura text-3xl md:text-4xl lg:text-5xl font-[600]">
								Empowering Women in Technology
							</div>
							<div className="font-jura text-xl md:text-2xl lg:text-3xl">
								We are dedicated to promoting gender diversity and inclusion
								within the tech industry. Our initiatives focus on empowering
								women by providing opportunities, mentorship, and resources to
								excel in technology roles.
							</div>
							<div className="flex flex-col justify-center items-center gap-4">
								<div className="relative z-10 rounded-full bg-pink-400 w-28 h-28 ">
									<Image src="/about-women-emp-samantha.jpg" alt="Samantha Hussain" className="w-full h-auto rounded-full" />
								</div>
								<h2 className="font-jura text-xl lg:text-2xl font-semibold">
									Samantha Hussain
								</h2>
								<p className="font-jura text-center text-md lg:text-lg font-[500]">
									UI/UX Development & Media
									<br />
									Team Lead
								</p>
								<blockquote className="w-[90%] sm:w-[80%] p-4 italic font-montserrat text-center text-sm md:text-md lg:text-lg">
									“As a member of Project WhiteCode, I am proud to affirm our
									unwavering commitment to women empowerment in the tech
									industry.”
								</blockquote>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative h-full bg-[url('/about-values-bg-2.jpg')] bg-cover bg-center filter brightness-125">
						<div className="absolute inset-0 bg-white opacity-70"></div>
						<div className="relative h-full px-8 md:px-32 lg:px-42 xl:px-52 py-24 lg:py-48 flex flex-col justify-center items-center gap-10">
							<div className="font-jura text-3xl md:text-4xl lg:text-5xl font-[600]">
								Supporting Employment for Individuals with Disabilities
							</div>
							<div className="font-jura text-xl md:text-2xl lg:text-3xl">
								We actively create job opportunities for individuals with
								disabilities, ensuring they have equal access to meaningful
								employment in the tech sector. Our inclusive workplace fosters a
								supportive environment where everyone can thrive.
							</div>
							<div className="w-[90%] sm:w-[80%] p-4">
								<blockquote className="italic font-montserrat text-justify text-sm md:text-md lg:text-lg">
									&quot;IT services are among the most suitable job
									opportunities for individuals with disabilities, as these
									roles can be effectively performed remotely. As a company, it
									is our responsibility to build the appropriate infrastructure,
									foster an inclusive environment, and provide comprehensive
									training and guidance to ensure success in these
									positions.&quot;
								</blockquote>
								<div className="text-right font-montserrat text-base lg:text-lg">
									Project WhiteCode
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
				<div className="relative h-full bg-[url('/about-values-bg-3.png')] bg-cover bg-center filter brightness-125">
				<div className="absolute inset-0 bg-white opacity-70"></div>
					<div className="relative px-8 md:px-32 lg:px-42 xl:px-52 py-24 lg:py-48 flex flex-col justify-center items-center gap-10">
						<div className="font-jura text-3xl md:text-4xl lg:text-5xl font-[600]">
							Advancing Tech Education in Underrepresented Areas
						</div>
						<div className="flex flex-col items-center justify-center gap-3">
							<p className="font-jura text-xl md:text-2xl lg:text-3xl">
								We are committed to empowering students in third-tier cities by
								providing them with the education and skills needed for tech
								jobs. We aim to bridge the digital divide through specialized
								training programs and resources and create pathways to success.
							</p>
							<p className="font-jura text-xl md:text-2xl lg:text-3xl">
								At Project WhiteCode, we address critical issues and drive
								technological advancement. Our goal is not only to move forward
								as a company but to contribute to the progress of our nation. We
								believe in collective growth and are committed to positively
								impacting our country&apos;s development.
							</p>
						</div>
						<div className="w-[90%] sm:w-[80%] ">
							<blockquote className="p-4 italic font-montserrat text-justify text-sm md:text-md lg:text-lg">
								&quot;We don&apos;t believe in just moving forward as a company;
								we believe in moving the country forward.&quot;
							</blockquote>
						</div>
					</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default AboutValuesNew;
