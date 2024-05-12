import React from "react";
import KeyImg1 from "../../../../app/public/projectsection/key1.svg";
import KeyImg2 from "../../../../app/public/projectsection/key2.svg";
import KeyImg3 from "../../../../app/public/projectsection/key3.svg";
import KeyFeatureCard from "@/app/components/ui/key-feature-card";

const KeyFeaturesSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:mx-auto md:mx-auto mt-12">
        <div className="flex lg:flex-row md:flex-row flex-col items-center">
          <p className="text-white font-semibold lg:text-3xl md:text-xl text-[20px] ">
            Key Features&nbsp;
          </p>
          <p className="text-[#666666] font-semibold lg:text-3xl md:text-xl text-[20px]  ">
            of Our Projects
          </p>
        </div>
        <p className="text-[#666666] text-center lg:px-20 py-5 lg:text-lg md:text-lg text-sm">

          Our Web Design service is all about creating visually stunning and
          user-friendly websites that leave a lasting impression on your
          audience. We blend creativity with functionality to deliver websites
          that showcase your brand`s identity while ensuring seamless navigation
          and optimal user experience.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col">

        <KeyFeatureCard
          img={KeyImg1}
          title="Strategic Planning"
          content="Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience."
        />

        <div className="w-[1px] h-72 bg-[#1F1F1F] hidden lg:block"></div>

        <KeyFeatureCard
          img={KeyImg2}
          title="Customized Solutions"
          content="We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities."
        />

        <div className="w-[1px] h-72 bg-[#1F1F1F] hidden lg:block" ></div>


        <KeyFeatureCard
          img={KeyImg3}
          title="User-Centric Approach"
          content="Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces."
        />
      </div>
    </>
  );
};

export default KeyFeaturesSection;
