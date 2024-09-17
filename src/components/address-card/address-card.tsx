import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const AddressCard = () => {
  return (
    <Card className="max-w-[400px] bg-gray-200 shadow-lg rounded-lg h-[300px] w-[300px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-xl font-bold font-montserrat text-black">
            WhiteCode
          </p>
          <p className="text-lg font-semibold font-montserrat text-black">
            (GLOBAL HQ)
          </p>
        </div>
      </CardHeader>

      <CardBody className="p-6">
        <p className="text-lg font-medium font-montserrat text-black mt-2">
          WhiteCode
        </p>
        <p className="text-sm font-montserrat text-black mt-4">
          909 Third Avenue
        </p>
        <p className="text-sm font-montserrat text-black">New York, New York</p>
        <p className="text-sm font-montserrat text-black">10022</p>
        <p className="text-sm font-montserrat text-black">United States</p>
      </CardBody>
    </Card>
  );
};

export default AddressCard;
