import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Input, Textarea } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div
      className="w-bg-cover w-full bg-center bg-cover font-montserrat padding-x py-32 md:py-48 flex flex-col gap-20"
      style={{ backgroundImage: "url('/Form.png')" }}
    >
      <div>
        <p className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center ">
          Let&apos;s have a chat!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 mx-auto max-w-6xl">
        {/* Left Column: Name, Email, RadioGroup, Captcha */}
        <div className="grid grid-rows-[auto_1fr_auto] gap-y-4 w-full">
          <div className="grid gap-y-4">
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              placeholder="Enter your name"
              className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
            />
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="Email"
              className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
            />
            <RadioGroup color="secondary" defaultValue="london">
              <Radio value="Project">Project</Radio>
              <Radio value="Recruitment">Recruitment</Radio>
              <Radio value="Other">Other</Radio>
            </RadioGroup>
          </div>
          <div className="mt-4">
            <Image src="/Captcha.png" alt="captcha" width={300} height={100} />
          </div>
        </div>

        {/* Right Column: Surname, Name of the company, Message, Submit Button */}
        <div className="grid grid-rows-[auto_1fr_auto] gap-y-4 w-full">
          <div className="grid gap-y-4">
            <Input
              label="Surname"
              placeholder="Surname"
              labelPlacement="outside"
              type="text"
              className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
            />
            <Input
              label="Name of the Company"
              placeholder="Name of the Company"
              labelPlacement="outside"
              type="text"
              className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]"
            />
            <Textarea
              label="Message"
              placeholder="Message"
              labelPlacement="outside"
              className="w-full sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] resize-y"
            />
          </div>
          <div className="flex justify-center sm:justify-start mt-5 w-full">
            <Button className="bg-black hover:bg-blue-400 text-white font-bold py-1 px-6 rounded-lg w-96 sm:w-80">
              Submit
            </Button>
          </div>
        </div>

        {/* Social Media Icons Below the Right Column */}
        {/* <div className="grid place-items-center sm:place-items-start sm:col-start-2 mt-4 sm:mt-0">
    <ul className="grid grid-flow-col gap-4">
      <li className="text-base">{ICONS.linkedin}</li>
      <li className="text-base">{ICONS.youtube}</li>
      <li className="text-base">{ICONS.instagram}</li>
      <li className="text-base">{ICONS.twitter}</li>
    </ul>
  </div> */}
      </div>
    </div>
  );
};

export default ContactForm;
