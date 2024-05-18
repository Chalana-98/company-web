import React from "react";
import HeaderImg from "../../../../app/public/projectsection/header_img.svg";
import Image from "next/image";

interface HeaderSectionProps {
  title: string;
  description: string;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <div className="flex flex-col text-surface  text-[#EBEBEB] xl:flex-row lg:flex-row md:flex-row max-w-screen-xl py-5 items-center">
        <div className="flex flex-col justify-start lg:text-start md:text-start text-center  lg:p-6 md:p-6 p-2 lg:mx-5 md:mx-5 ">
          <p className="mb-8 lg:text-5xl md:text-4xl  text-2xl bg-gradient-to-r from-[#006EFF] to-[#A98C8C] font-semibold tracking-wide inline-block text-transparent bg-clip-text">
            {title}
          </p>
          <h3 className="text-surface/75 dark:text-neutral-300 font-light tracking-wide">
            {description}
          </h3>
        </div>
        <Image
          src={HeaderImg}
          alt={""}
          className="lg:h-96 md:h-72 hidden md:block lg:block"
        />
      </div>
    </>
  );
};
