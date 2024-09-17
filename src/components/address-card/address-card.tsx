import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const AddressCard = ({
	name,
	address,
	hq,
}: {
	name: string;
	address: string;
	hq?: string;
}) => {
	return (
		<Card
			className="
      w-full
      sm:max-w-[300px] sm:h-auto sm:p-[40px 20px] sm:gap-6 
      md:max-w-[312px] md:h-[284px] md:p-[68px 24px] md:gap-8
    "
		>
			<CardHeader className="flex flex-col items-start">
				<h3 className="text-xl md:text-2xl font-semibold font-montserrat text-gray-800">
					{name}
				</h3>
				{hq && (
					<h4 className="text-md md:text-lg font-medium font-montserrat text-gray-500">
						{hq}
					</h4>
				)}
			</CardHeader>

			<CardBody className="mt-4">
				<p className="text-sm md:text-base font-medium font-montserrat text-gray-800">
					{address}
				</p>
			</CardBody>
		</Card>
	);
};

export default AddressCard;
