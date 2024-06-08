import React from "react";
import { StepCard } from "./StepCard";

const StepsSection = () => {
  return (
    <>
      <div className="flex border flex-col lg:mx-24 md:mx-24 rounded-2xl text-[#EBEBEB] max-w-screen-xl">
        <div className="flex flex-col items-center lg:items-start md:items-start ijustify-center mx-auto lg:mt-12 md:mt-10 my-8 lg:px-20 md:px-16 px-10 lg:py-5 md:py-8">
          <p className="dark:text-primarybgColor text-primaryTextColor font-semibold lg:text-2xl md:text-2xl text-xl  ">
            At Square Up
          </p>
          <p className="text-[#E6E6E6] lg:py-5 md:py-3 py-2 lg:text-sm md:text-sm lg:pr-60 md:pr-48 lg:text-start md:text-start text-center">
            We follow a structured and collaborative process to ensure the
            successful delivery of exceptional digital products. Our process
            combines industry best practices, creative thinking, and a
            client-centric approach.
          </p>
          <div className="p-3 bg-[#7E7E7E] bg-opacity-20 rounded-lg">
            <p>Here`s an overview of our typical process:</p>
          </div>
        </div>

        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-1 lg:grid-cols-2 border-y text-sm text-[#EBEBEB]">
          <figure className="flex flex-col items-start justify-center lg:py-14 md:py-14 p-5 border-gray-200 md:border-b-0 lg:border-b-0 border-b lg:border-r dark:border-gray-700">
            <StepCard
              number="01"
              title="Discovery"
              description="
                 We begin by thoroughly understanding your business goals, target
                 audience, and project requirements. We conduct in-depth research
                 to gather insights and define project objectives, allowing us to
                 develop a tailored strategy.
            "
            />
          </figure>
          <figure className="flex flex-col items-start justify-center lg:py-14 md:py-14 p-5 border-gray-200  md:rounded-se-lg dark:border-gray-700">
            <StepCard
              number="02"
              title="Planning and Strategy"
              description="
              Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.
            "
            />
          </figure>
        </div>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-1 lg:grid-cols-2 border-y text-sm">
          <figure className="flex flex-col items-start justify-center lg:py-14 md:py-14 p-5 border-gray-200 border-b lg:border-r lg:border-b-0 dark:border-gray-700">
            <StepCard
              number="03"
              title="Design"
              description="
              Our expert designers translate the project requirements into captivating visual designs. We create wire frames, mock-ups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.
            "
            />
          </figure>
          <figure className="flex flex-col items-start justify-center lg:py-14 md:py-14 p-5 border-gray-200  md:rounded-se-lg dark:border-gray-700">
            <StepCard
              number="04"
              title="Development"
              description="
              Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.
            "
            />
          </figure>
        </div>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-1 lg:grid-cols-2 border-y text-sm">
          <figure className="flex flex-col items-start justify-center lg:py-14 md:py-14 p-5 border-r border-gray-200 border-b lg:border-r lg:border-b-0 dark:border-gray-700">
            <StepCard
              number="05"
              title="Testing and Quality Assurance"
              description="
              We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.
            "
            />
          </figure>
          <figure className="flex flex-col items-start justify-center lg:py-14 md:py-14 p-5 border-gray-200  md:rounded-se-lg dark:border-gray-700">
            <StepCard
              number="06"
              title="Deployment and Launch"
              description="
              When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.
             "
            />
          </figure>
        </div>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-1 lg:grid-cols-2 border-t text-sm rounded-b-2xl ">
          <figure className="flex flex-col items-start justify-center lg:py-14 md:py-14 p-5  border-gray-200  border-b lg:border-b-0 lg:border-r dark:border-gray-700">
            <StepCard
              number="07"
              title="Post-Launch Support"
              description="
              Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.
             "
            />
          </figure>
          <figure className="flex flex-col items-start justify-center lg:py-14 md:py-14 p-5 border-gray-200  rounded-br-2xl dark:border-gray-700">
            <StepCard
              number="08"
              title="Continuous Improvement"
              description="
              We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.
             "
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default StepsSection;
