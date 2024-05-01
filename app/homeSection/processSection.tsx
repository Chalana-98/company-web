
import React from "react";
import IconButton from "../components/ui/iconButton";

const ProcessSection = () => {
  return (
    <div className="flex lg:flex-row text-[#EBEBEB] lg:justify-between lg:text-start md:flex md:flex-row md:justify-between md:text-start flex-col items-center justify-center text-center pb-10  max-w-screen-xl">
      <div className="w-1/2">
        <img src="./hand1.svg" alt="" />
      </div>

      <div className="flex flex-col items-center lg:items-start md:items-start lg:w-1/2 md:w-1/2 sm:w-1/2">
        <p className="lg:text-4xl md:text-3xl text-2xl  font-normal text-primaryTextColor dark:text-primaryDarkTextColor pb-10">
          Dedicated Team for your needs
        </p>

        <p className="text-primaryTextColor dark:text-primaryDarkTextColor pb-10 lg:text-lg md:text-base text-sm font-light">
          We excel in sourcing, cultivating, and coordinating top-tier talent to
          seamlessly collaborate with you. With over 4 years of expertise, we
          curate teams with precision, matching your exact needs
        </p>
        <IconButton text="Our process" />
      </div>
    </div>
  );
};

export default ProcessSection;
