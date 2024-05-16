import React from "react";
import Image from "next/image";
import UpcomingImg1 from "../../../../app/public/projectsection/upcoming1.svg";

const UpcomingSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto mt-12">
        <div className="flex flex-row">
          <p className="text-white font-semibold lg:text-3xl md:text-xl text-lg  ">
            Upcoming&nbsp;
          </p>
          <p className="text-[#666666] font-semibold lg:text-3xl md:text-xl text-lg  ">
            Projects
          </p>
        </div>
        <p className="text-[#666666] text-center lg:px-20 md:px-10 py-5 lg:text-lg md:text-lg  text-sm">
          At DigitX, we are continually working on exciting new projects to push
          the boundaries of digital innovation and deliver exceptional solutions
          to our valued clients. While we are thrilled to share our upcoming
          projects with you, we understand the importance of confidentiality and
          safeguarding sensitive information. Therefore, we will provide a brief
          overview of the upcoming projects while keeping specific details
          concealed.
        </p>
      </div>

      <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row justify-around items-center pb-5">
          <Image src={UpcomingImg1} alt={""} className="" />

          <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white pl-3">
            Healthcare Platform Enhancement
          </p>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col border-[1px] border-[#666666] rounded-xl justify-around px-5 py-5">
          <div className="flex flex-col items-start">
            <p className="text-[#666666] text-center lg:text-sm md:text-sm  text-xs">
              Category
            </p>
            <p className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Web{" "}
              <>
                <br />
              </>
              Development
            </p>
          </div>

          <div className="w-[1px] h-20 bg-[#666666] mx-5 lg:block md:block hidden"></div>
          <div className="w-28 h-[1px] bg-[#666666] lg:hidden md:hidden block"></div>
          <div className="flex flex-row justify-start items-start">
            <div className="flex flex-col items-start">
              <p className="text-[#666666] text-center lg:text-sm md:text-sm  text-xs">
                Expected
              </p>
              <p className="text-[#666666] text-center lg:text-sm md:text-sm  text-xs">
                Completion
              </p>
              <p className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Q4 2023
              </p>
            </div>
          </div>
        </div>

        <div className="block max-w-lg p-6 bg-[#0F0F0F] rounded-xl shadow my-5">
          <h5 className="mb-2 lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-gray-900 dark:text-white lg:text-start md:text-start text-center">
            Project Description
          </h5>
          <p className=" text-[#666666] lg:text-start md:text-start text-center">
            Our team is collaborating with a leading healthcare provider to
            enhance their existing platform. The project aims to streamline user
            experiences, optimize database performance, and implement advanced
            security measures to safeguard patient data. This ambitious
            undertaking will elevate the platform`s capabilities and
            revolutionize healthcare accessibility for users.
          </p>
        </div>
      </div>
    </>
  );
};

export default UpcomingSection;
