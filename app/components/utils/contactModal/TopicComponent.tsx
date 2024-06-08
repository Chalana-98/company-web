import Image from "next/image";
import React from "react";

interface TopicComponentProps {
  title: string;
  img: string;
}

const TopicComponent = ({ title, img }: TopicComponentProps) => {
  return (
    <div className="flex flex-row py-3">
      <Image src={img} alt={""} className="" />
      <p className="text-[#C6C6C6] text-sm pl-3">{title}</p>
    </div>
  );
};

export default TopicComponent;
