import React from "react";
import HeaderImg from "../../../../app/public/projectsection/header_img.svg";
import Image from "next/image";

function HeaderSection() {
  return (
    <>
      <div className="flex flex-col text-surface  text-[#EBEBEB] xl:flex-row lg:flex-row md:flex-row max-w-screen-xl py-5 items-center">
        <div className="flex flex-col justify-start lg:text-start md:text-start text-center  p-6 mx-5">
          <p className="mb-8 text-5xl bg-gradient-to-r from-[#006EFF] to-[#A98C8C] font-semibold tracking-wide inline-block text-transparent bg-clip-text">
            Empowering Your Digital Vision
          </p>
          <h3 className="text-surface/75 dark:text-neutral-300 font-light tracking-wide">
            At CoreDigit X, we propel your business with comprehensive digital
            solutions. Skilled professionals, cutting-edge tech, and innovation
            ensure exceptional results in web design and development At
            CoreDigit X, we propel your business with comprehensive digital
            solutions. Skilled professionals,
          </h3>
        </div>
        <Image src={HeaderImg} alt={""} className="lg:h-96 md:h-72 hidden md:block lg:block" />
      </div>
    </>
  );
}

export default HeaderSection;
