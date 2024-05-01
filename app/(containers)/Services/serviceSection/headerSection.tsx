import React from "react";

const HeaderSection = () => {
  return (
    <figure className="relative max-w-screen-2xl py-10">
      <img
        className=""
        src="./serviceIcons/service_sqaure.svg"
        alt="image description"
      />
      <div className="flex flex-col absolute top-0 lg:pt-32  pt-6 left-0 right-0 items-center">
        <p className="px-20 lg:pb-10 pb-5 text-center text-lg font-semibold lg:text-6xl md:text-4xl">
          Our Comprehensive Digital Solutions
        </p>
        <p className="dark:text-primarybgColor text-primaryTextColor text-center px-20 lg:text-lg md:text-lg text-xs">
          At CoreDigit X, we propel your business with comprehensive digital
          solutions. Skilled professionals, cutting-edge tech, and innovation
          ensure exceptional results in web design and development
        </p>
      </div>
    </figure>
  );
};

export default HeaderSection;
