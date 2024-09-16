import React from "react";
import Logo from "@/assets/images/Logo_White.png";
import Image from "next/image";
import { footerLinks, footerSocials } from "@/data";
import { Link } from "@nextui-org/react";

const Footer = () => {
	return (
		<footer className="w-full bg-custom text-primary padding md:px-36">
			<div className="w-[100%] flex max-lg:flex-col gap-16 items-center justify-between mb-16 lg:mb-40">
				<div className="flex flex-col items-center justify-between lg:items-start lg:justify-start gap-4 w-[80%] lg:w-80">
					<div className="flex items-center justify-center">
						<Image
							src={Logo}
							width={0}
							height={0}
							alt="White Code"
							className="w-60"
						/>
					</div>
					<div className="text-primary font-montserrat text-xl max-sm:text-medium">
						We make your dreams realize
					</div>
				</div>

				<div className="flex items-start justify-between w-[60%] lg:w-72">
					{/* Menu */}
					<div className="max-w-sm">
						<div className="text-accent font-montserrat mb-8 lg:mb-12 tracking-widest text-medium md:text-lg">Menu</div>
						<ul id="menu" className="list-none flex flex-col gap-4">
							{
								footerLinks.menu.map((item, index) => (
									<li key={index}>
										<Link href={item.link} className="text-accent font-montserrat font-[300] text-sm md:text-medium">{item.name}</Link>
									</li>
								))
							}
						</ul>
					</div>
					
					{/* Contact */}
					<div className="max-w-sm">
						<div className="text-accent font-montserrat mb-8 lg:mb-12 tracking-widest text-medium md:text-lg">Contact</div>
						<ul id="contact" className="list-none flex flex-col gap-4">
							{
								footerLinks.contact.map((item, index) => (
									<li key={index}>
										<Link href={item.link} className="text-accent font-montserrat font-[300] text-sm md:text-medium">{item.name}</Link>
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</div>

			{/* Copyright and socials */}
			<div className="flex max-md:flex-col-reverse max-md:gap-8 items-center justify-between w-[100%]">
				<div className="capitalize text-xs text-slate-400 font-[200]">2024 WHITE CODE. ALL RIGHTS RESERVED.</div>
				<div className="flex items-center justify-between gap-5 w-36 max-md:m-auto">
					{
						footerSocials.map((item, index) => (
							<Link key={index} href={item.link} size="lg" className="text-accent">{item.icon}</Link>
						))
					}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
