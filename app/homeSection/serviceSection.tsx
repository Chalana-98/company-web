
import React from "react";
import IconButton from "../components/ui/iconButton";
import Image from "next/image";
import Hand2 from '../public/hand2.svg'

const ServiceSection = () => {
  return (
    <div className="flex lg:flex-row text-[#EBEBEB]  lg:justify-between lg:text-start md:flex md:flex-row md:justify-between  md:text-start flex-col-reverse items-center justify-center text-center max-w-screen-xl">
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 md:items-start md:w-1/2 sm:w-1/2">
        <p className="lg:text-4xl md:text-3xl text-2xl  font-normal text-primaryTextColor dark:text-primaryDarkTextColor pb-10">
          Your all-in-one solution with us
        </p>

        <p className="text-primaryTextColor dark:text-primaryDarkTextColor pb-10 lg:text-lg md:text-base text-sm font-light">
          From consultation to execution, we`ve got you covered. Streamline
          operations and maximize efficiency with our comprehensive all-in-one
          services
        </p>
        <IconButton text="Our services" />
      </div>
      <div className="flex justify-end w-1/2">
        <Image src={Hand2} alt="" />
      </div>
    </div>
  );
};

export default ServiceSection;
