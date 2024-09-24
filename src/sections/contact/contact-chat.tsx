"use client";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import { easeInOut, motion } from "framer-motion";

const ContactChat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '8801622257180';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

	return (
		<div className="bg-bgprimary h-screen padding font-jura w-full flex flex-col items-center justify-center gap-20">
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3, ease: easeInOut }}
				className="text-center"
			>
				<p className="text-5xl md:text-6xl lg:text-8xl text-center">
					The Future
					<br />
					Awaits
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3, ease: easeInOut }}
			>
				<p className="text-lg lg:text-3xl text-center">
					Have a project? Let&apos;s Chat!
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, ease: easeInOut, delay: 0.3 }}
			>
				<motion.button
					initial={{ width: "50px" }}
					whileHover={{ width: "150px" }}
					transition={{ type: "spring", stiffness: 300 }}
          onClick={handleWhatsAppClick}
					className="bg-green-500 text-white flex items-center justify-start gap-3 rounded-full overflow-hidden p-4 active:bg-green-700 transition duration-150"
				>
					<span className="text-base lg:text-lg">{ICONS.chat}</span>

					<motion.span
						initial={{ opacity: 0 }}
						whileHover={{ opacity: 1 }}
						transition={{ ease: "easeInOut" }}
						className="text-base lg:text-lg whitespace-nowrap"
					>
						WhatsApp
					</motion.span>
				</motion.button>
			</motion.div>
		</div>
	);
};

export default ContactChat;
