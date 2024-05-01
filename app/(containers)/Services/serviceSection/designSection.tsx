import React from "react";

const DesignSection = () => {
  return (
    <>
      <div className="flex border flex-col lg:mx-24 md:mx-24 mx-12 rounded-2xl relative">
        <img
          src="./serviceIcons/bg1.svg"
          alt=""
          className="h-96 lg:object-fill object-cover"
        />

        <div className="flex flex-col items-center justify-center top-0 pt-5 right-0 left-0 mx-auto absolute">
          <img
            src="./serviceIcons/webmobileicon.svg"
            alt=""
            className=" lg:h-32 md:h-28 h-24 object-cover"
          />
          <p className="dark:text-primarybgColor text-primaryTextColor font-semibold lg:text-3xl md:text-xl text-lg">
            Web & Mobile Design
          </p>
          <p className="dark:text-primarybgColor text-primaryTextColor text-center px-20 py-5 lg:text-lg md:text-lg  text-xs">
            Our Web Design service is all about creating visually stunning and
            user-friendly websites that leave a lasting impression on your
            audience. We blend creativity with functionality to deliver websites
            that showcase your brand`s identity while ensuring seamless
            navigation and optimal user experience.
          </p>
        </div>

        <p className="text-gray-900 dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5 border-t">
          User Experience (UX) Design
        </p>

        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 bg-white dark:bg-gray-800 border-y text-sm">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5  bg-white lg:border-b-0 border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon1.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                User Research and Persona Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b bg-white lg:border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon2.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Information Architecture and Wireframing
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-r border-gray-200 md:border-b-0 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon3.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Interactive Prototyping and User Testing
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-gray-200  md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon4.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                UI Design and Visual Branding
              </p>
            </blockquote>
          </figure>
        </div>
        <p className="text-gray-900 dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5">
          User Interface (UI) Design
        </p>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 bg-white dark:bg-gray-800 border-y text-sm">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5  bg-white lg:border-b-0 border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon5.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Intuitive and Visually Appealing Interface Design
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b bg-white lg:border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon6.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Custom Iconography and Illustration
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-r border-gray-200 md:border-b-0 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon7.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Typography and Color Palette Selection
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-gray-200  md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon8.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Responsive Design for Various Devices
              </p>
            </blockquote>
          </figure>
        </div>
        <p className="text-gray-900 dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5">
          Branding and Identity
        </p>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 bg-white dark:bg-gray-800 border-t text-sm">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5  bg-white lg:border-b-0 border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon9.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Logo Design and Visual Identity Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b bg-white lg:border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon10.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Brand Strategy and Positioning
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-r border-gray-200 md:border-b-0 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon11.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Brand Guidelines and Style Guides
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   bg-white border-gray-200  md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <img
                src="./serviceIcons/icon12.svg"
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-gray-900 dark:text-secondaryDarkTextColor pt-8 ">
                Marketing Collateral Design (Brochures, Business Cards, etc.)
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </>
  );
};

export default DesignSection;
