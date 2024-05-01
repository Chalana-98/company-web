import React from "react";

const DevelopmentSection = () => {
  return (
    <>
      <div className="flex border flex-col lg:mx-24 md:mx-24 mx-16  rounded-2xl relative mt-20 text-[#EBEBEB] max-w-screen">
        <img
          src="./serviceIcons/bg1.svg"
          alt=""
          className="h-96 lg:object-fill object-cover"
        />

        <div className="flex flex-col items-center justify-center top-0 pt-5 right-0 left-0 mx-auto absolute">
          <img
            src="./serviceIcons/webmobileicon2.svg"
            alt=""
            className=" lg:h-32 md:h-28 h-24 object-cover"
          />
          <p className="dark:text-primarybgColor text-primaryTextColor font-semibold lg:text-3xl md:text-xl text-lg">
            Web & Mobile Development
          </p>
          <p className="dark:text-primarybgColor text-primaryTextColor text-center px-20 py-5 lg:text-lg md:text-lg  text-xs">
            Our Web Development service is focused on turning your website into
            a powerful digital asset. We utilize the latest technologies and
            industry best practices to build dynamic and scalable websites that
            cater to your business objectives.
          </p>
        </div>

        <p className="text-gray-900 dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5 border-t">
          Web Development
        </p>

        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 bg-white dark:bg-gray-800 border-y text-sm">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5  bg-white lg:border-b-0 border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon13.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Front-End Development (ReactJS, NextJS, Angular, Vue )
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b bg-white lg:border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon14.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Back-End Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-r border-gray-200 md:border-b-0 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon15.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Content Management System (CMS) Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-gray-200  md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon16.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                E-Commerce Platform Development
              </p>
            </blockquote>
          </figure>
        </div>
        <p className="text-gray-900 dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5">
          Mobile App Development
        </p>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 bg-white dark:bg-gray-800 border-y text-sm">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5  bg-white lg:border-b-0 border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon17.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Native iOS and Android App Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b bg-white lg:border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon18.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Cross-Platform App Development ( Flutter)
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-r border-gray-200 md:border-b-0 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon19.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                App Prototyping and UI/UX Design Integration
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-gray-200  md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon20.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                App Testing, Deployment, and Maintenance Custom Software
                Development
              </p>
            </blockquote>
          </figure>
        </div>
        <p className="text-gray-900 dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5">
          Custom Software Development Enterprise Software Development
        </p>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 bg-white dark:bg-gray-800 border-t text-sm">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5  bg-white lg:border-b-0 border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon21.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Enterprise Software Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b bg-white lg:border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon22.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Custom Web Application Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-r border-gray-200 md:border-b-0 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon23.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Integration with Third-Party APIs and Systems
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-gray-200  md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon24.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Legacy System Modernization and Migration
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </>
  );
};

export default DevelopmentSection;
