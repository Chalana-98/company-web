import Image from "next/image";
import React from "react";
import Frame1 from "../../../public/Frame 1.png";

const BottomSection = () => {
  return (
    <figure className="relative max-w-screen text-[#EBEBEB]">
      <Image
        className="bg-[#1e1e1eaf] rounded-2xl lg:h-96 md:h-80 h-72"
        src={Frame1}
        alt="image description"
        
      />
      <div className="flex flex-col absolute top-0  pt-6 left-0 right-0 items-center  ">
        <p className="lg:px-20 md:px-14 px-5 lg:pb-10 pb-5 text-center font-semibold lg:text-4xl md:text-2xl">
          Join us in your digital journey and be the next success story!
        </p>
        <p className="text-center lg:px-20 md:px-14 px-5 lg:text-lg md:text-sm text-xs">
          These success stories are a testament to the dedication and expertise
          of our team at CoreDigit X. We are driven by a commitment to
          delivering outstanding results and helping businesses flourish in the
          digital landscape.
        </p>
        <p className="dark:text-primarybgColor text-primaryTextColor text-center lg:px-20 md:px-14 px-5 lg:text-lg md:text-sm text-xs lg:mt-10 md:mt-8 mt-5">
          Unlock Your Digital Potential Today{" "}
        </p>
        <div className="flex flex-row items-center justify-center lg:my-8 md:my-7 my-5">
          <button
            type="button"
            className="inline-block bg-blue-600 rounded-lg lg:mx-4 md:mx-3 mx-2 bg-blue2 lg:px-6 md:px-4 px-2 pb-2 pt-2.5 lg:text-base md:text-base text-sm font-medium uppercase leading-normal text-[#EBEBEB] shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Get Started
          </button>
          <button
            type="button"
            className="inline-block mx-4 rounded-lg border-2 border-blue2 px-6 pb-[6px] pt-2 lg:text-base md:text-base text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
            data-twe-ripple-init
          >
            Contact Us
          </button>
        </div>
      </div>
    </figure>
  );
};

export default BottomSection;
