import React from "react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <>
      <div className="flex flex-row justify-end items-end">
    
          <p className=" text-[#0094FF] lg:text-8xl md:text-7xl text-4xl font-bold text-end pr-3">{number}</p>
    
        <div className="flex flex-col">
          <p className="text-[#98989A] lg:text-lg md:text-lg pl-3">{title}</p>
          <div className="h-[1px] lg:w-60 md:w-52 w-40 bg-[#98989A] mt-3 mb-3"></div>
        </div>
      </div>
      <p className="text-[#98989A] pt-8 lg:text-start md:text-start text-center">
        {description}
      </p>
    </>
  );
};
