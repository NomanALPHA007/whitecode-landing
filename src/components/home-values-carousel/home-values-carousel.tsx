"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { cardData } from "@/data"; // Ensure the correct path to your data
import { FaStar, FaHeart, FaShare } from "react-icons/fa";
import SwiperCore from "swiper";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
}

const HomeValuesCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null); // Reference to Swiper instance

  const handleCardClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
    }
  };

  return (
    <div className="w-full max-w-lg md:max-w-md lg:max-w-sm mx-auto p-2">
      {" "}
      {/* Adjusted for responsiveness */}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true} // Enable looping of slides
        modules={[EffectCards]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach the swiper instance to ref
      >
        {cardData.map((card: CardProps) => (
          <SwiperSlide
            key={card.id}
            className="bg-gradient-to-b from-[#3f9eb7] to-white rounded-[8.65px] shadow-lg border border-[#3f9eb7] overflow-hidden" // Reduced size for smaller cards
            onClick={handleCardClick} // Trigger next slide on click
          >
            <div className="relative w-full h-[150px] md:h-[200px] lg:h-[250px]">
              {" "}
              {/* Responsive height */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                <FaHeart className="text-red-500 cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-sm md:text-base lg:text-lg font-jura font-bold mb-1 text-black">
                {card.title}
              </h2>
              <p className="text-black font-jura text-xs md:text-sm lg:text-base mb-2">
                {card.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-bold text-black font-jura text-sm md:text-base">
                    {card.rating.toFixed(1)}
                  </span>
                </div>
                <button className="bg-white text-[#3f9eb7] px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-full hover:bg-opacity-90 transition-colors flex items-center">
                  <FaShare className="mr-1 md:mr-2" />
                  Share
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeValuesCarousel;
