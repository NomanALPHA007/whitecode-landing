import AddressCard from "@/components/address-card/address-card";
import React from "react";

const Addresses = () => {
  // Define an array of addresses or any other relevant data you want to display
  const addressData = [
    {
      id: 1,
      name: "WhiteCode HQ",
      location: "New York, USA",
      address: "909 Third Avenue, 10022",
    },
    {
      id: 2,
      name: "WhiteCode HQ",
      location: "San Francisco, USA",
      address: "123 Market Street, 94103",
    },
    {
      id: 3,
      name: "WhiteCode Europe",
      location: "London, UK",
      address: "10 Downing Street, SW1A 2AA",
    },
    // Add more addresses as needed
  ];

  return (
    <div>
      <div className="bg-black w-full">
        <div className="mx-auto max-w-[90%] w-auto overflow-hidden">
          <p className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] mt-[100px] sm:mt-[150px] md:mt-[180px] lg:mt-[200px] font-montserrat text-white text-center whitespace-nowrap">
            Where to find Us
          </p>
        </div>
        <div className="flex justify-center mt-[250px] pb-[250px] flex-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addressData.map((address) => (
              <AddressCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
