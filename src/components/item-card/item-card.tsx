import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import React from "react";

const ItemCard = ({
	title,
	img,
	link,
	date,
}: {
	title: string;
	img: string;
	link?: string;
	date?: string;
}) => {
	return (
		<Card shadow="sm" className="px-2 py-3 w-[20rem] gap-2">
			<CardBody className="overflow-hidden p-0 h-[250px]">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={title}
					className="object-cover object-top h-full hover:animate-scroll"
					src={`${img}`}
				/>
			</CardBody>
			<CardFooter className="justify-between items-start flex-col gap-2">
				{link ? (
					<Link href={link} target="_blank" showAnchorIcon underline="hover" className="text-black flex items-center justify-center">
						<span className="font-montserrat text-lg md:text-xl font-[600] text-start mr-2">
							{title}
						</span>
					</Link>
				) : (
					<span className="font-montserrat text-lg md:text-xl font-[500] text-start h-[3rem] sm:h-[2.5rem]">
						{title}
					</span>
				)}
				{date && <p className="text-default-500">{date}</p>}
			</CardFooter>
		</Card>
	);
};

export default ItemCard;
