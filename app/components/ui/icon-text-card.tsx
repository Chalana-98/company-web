import React from "react";

interface IconTextCardProps {
  title: any;
  content: any;
  path: string;
}

function IconTextCard({ title, content, path }: IconTextCardProps) {
  return (
    <div className="flex bg-primarybgColor dark:bg-secondaryDarkbgColor rounded-[30px] p-7 border-primarystrokeColor border-[1px] m-3 lg:h-auto lg:w-[350px] md:w-80 md:h- sm:w-72 items-center">
      <div className="flex flex-col justify-between items-start">
        <img src={path} alt={title} className="pb-8" />
        <div>
          <p className="text-lg font-medium pb-4">{title}</p>
          <p className="text-md">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default IconTextCard;
