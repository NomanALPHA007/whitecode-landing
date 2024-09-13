import { ValueCard } from "@/components";
import { values } from "@/data";
import AboutValuesImage from "@/assets/images/about-values-image.png";
import Image from "next/image";

const AboutValues = () => {
	return (
		<div className="max-md:padding md:padding-r lg:pr-36 flex items-center justify-center md:justify-between">
			<Image src={AboutValuesImage} className="max-md:hidden object-cover w-[40%] h-auto" alt="About Values Image" />
			<div className="flex flex-col justify-center items-center gap-10">
				{values.map((value: any, index: number) => (
					<div key={index}>
						<ValueCard title={value.title} description={value.description} />
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutValues;
