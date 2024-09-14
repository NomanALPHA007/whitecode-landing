"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    "Custom AI & Image Processing Solution",
    "Advanced Data Analytics",
    "Cloud Infrastructure Management",
    "Cybersecurity Solutions",
    "IoT Integration Services",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-300 font-['Jura'] mb-6">
            What we do
          </h1>
          <p className="text-gray-600 mb-8 font-['Montserrat']">
            At Project WhiteCode, we aim to deliver innovative, customized
            software solutions that drive efficiency and excellence. Our
            services span across various domains, ensuring we meet diverse
            technological needs.
          </p>
          <button className="bg-blue-300 text-white font-['Montserrat'] py-3 px-6 rounded-lg hover:bg-blue-400 transition duration-300 flex items-center">
            More services
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-blue-200 hover:border-blue-300 cursor-pointer"
              >
                <p className="text-gray-800 font-['Montserrat']">{service}</p>
              </div>
            ))}
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-3/4 pointer-events-none">
            <div className="h-full w-full bg-blue-50 rounded-l-full overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="75" cy="25" r="3" fill="#60A5FA" />
                <circle cx="75" cy="75" r="3" fill="#60A5FA" />
                <circle cx="25" cy="50" r="3" fill="#60A5FA" />
                <line
                  x1="75"
                  y1="25"
                  x2="25"
                  y2="50"
                  stroke="#60A5FA"
                  strokeWidth="0.5"
                />
                <line
                  x1="25"
                  y1="50"
                  x2="75"
                  y2="75"
                  stroke="#60A5FA"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
