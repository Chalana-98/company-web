import Image from "next/image";
import React from "react";

interface IconTextCardProps {
  img: string;
  title: string;
  content: string;
}

function KeyFeatureCard({ img, title, content }: IconTextCardProps) {
  return (
    <div className="flex flex-col items-center max-w-sm lg:p-6 md:p-6 ">
      <Image src={img} alt={""} className="pb-5" />

      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5 text-center">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
        {content}
      </p>
    </div>
  );
}

export default KeyFeatureCard;
