"use client";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import WorldMap from "@/assets/maps/world-110m.json";
import { countries } from "@/data";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

const Map = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
			className="bg-blue-gradient"
		>
			<h2 className="font-jura font-[500] text-2xl md:text-4xl lg:text-6xl tracking-wide pt-4 md:pt-10 lg:pt-16 text-center">
				Where we are
			</h2>
			<ComposableMap
				data-tip=""
				projectionConfig={{ scale: 120 }}
				viewBox="0 90 800 400"
			>
				<Geographies geography={WorldMap}>
					{({ geographies }: { geographies: any }) =>
						geographies.map((geo: any) => {
							const countryData = countries[geo.properties.name];

							return (
								<Tooltip
									key={geo.rsmKey}
									content={
										countryData && (
											<div className="p-2 text-sm">
												<div className="font-semibold">{countryData.name}</div>
												<div>{countryData.address}</div>
											</div>
										)
									}
								>
									<Geography
										geography={geo}
										style={{
											default: {
												fill: countryData ? "#1E90FF" : "white",
												stroke: "#FFFFFF00",
												strokeWidth: 0.75,
												outline: "none",
											},
											hover: {
												fill: countryData ? "#4682B4" : "white",
												stroke: "#FFFFFF00",
												strokeWidth: 0.75,
												outline: "none",
											},
											pressed: {
												fill: countryData ? "#1E90FF" : "white",
												stroke: "#FFFFFF00",
												strokeWidth: 0.75,
												outline: "none",
											},
										}}
									/>
								</Tooltip>
							);
						})
					}
				</Geographies>
			</ComposableMap>
		</motion.div>
	);
};

export default Map;
