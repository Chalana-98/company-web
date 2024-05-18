import React from "react";
import Image from "next/image";
import ServiceIcon1 from '../../../public/serviceIcons/bg1.svg'
import ServiceIcon2 from '../../../public/serviceIcons/webmobileicon.svg'
import SIcon1 from '../../../public/serviceIcons/Icon1.svg'
import SIcon2 from '../../../public/serviceIcons/Icon2.svg'
import SIcon3 from '../../../public/serviceIcons/Icon3.svg'
import SIcon4 from '../../../public/serviceIcons/Icon4.svg'
import SIcon5 from '../../../public/serviceIcons/Icon5.svg'
import SIcon6 from '../../../public/serviceIcons/Icon6.svg'
import SIcon7 from '../../../public/serviceIcons/Icon7.svg'
import SIcon8 from '../../../public/serviceIcons/Icon8.svg'
import SIcon9 from '../../../public/serviceIcons/Icon9.svg'
import SIcon10 from '../../../public/serviceIcons/Icon10.svg'
import SIcon11 from '../../../public/serviceIcons/Icon11.svg'
import SIcon12 from '../../../public/serviceIcons/Icon12.svg'

const DesignSection = () => {
  return (
    <>
      <div className="flex border flex-col lg:mx-24 md:mx-24 mx-12 rounded-2xl relative text-[#EBEBEB] max-w-screen ">
        <Image
          src={ServiceIcon1}
          alt=""
          className="h-96 lg:object-fill object-cover"
        />

        <div className="flex flex-col items-center justify-center right-0 left-0 mx-auto absolute mt-12">
          <Image
            src={ServiceIcon2}
            alt=""
            className=" lg:h-32 lg:w-32 md:h-28 h-24 object-cover"
          />
          <p className="dark:text-primarybgColor text-primaryTextColor font-semibold lg:text-3xl md:text-xl text-lg  ">
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

        <p className="text-[#98989A] dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5 border-t">
          User Experience (UX) Design
        </p>

        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 border-y text-sm text-[#EBEBEB]">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5 lg:border-b-0 border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg border-r dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon1}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="dark:text-secondaryDarkTextColor pt-8 text-[#EBEBEB] ">
                User Research and Persona Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b text-[#EBEBEB] lg:border-r border-gray-200 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon2}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Information Architecture and Wireframing
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5 border-r border-gray-200 md:border-b-0 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon3}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Interactive Prototyping and User Testing
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5 border-gray-200  md:rounded-se-lg dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon4}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                UI Design and Visual Branding
              </p>
            </blockquote>
          </figure>
        </div>
        <p className="text-[#98989A] dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5">
          User Interface (UI) Design
        </p>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 border-y text-sm">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5 lg:border-b-0 border-b border-gray-200 md:rounded-t-none md:rounded-ss-lg border-r dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon5}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Intuitive and Visually Appealing Interface Design
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b lg:border-r border-gray-200 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon6}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Custom Iconography and Illustration
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5 border-r border-gray-200 md:border-b-0 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon7}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Typography and Color Palette Selection
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5 border-gray-200  md:rounded-se-lg dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon8}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Responsive Design for Various Devices
              </p>
            </blockquote>
          </figure>
        </div>
        <p className="text-[#98989A] dark:text-secondaryDarkTextColor lg:p-10 md:p-10 p-5">
          Branding and Identity
        </p>
        <div className="grid border-gray-200 shadow-sm dark:border-gray-700 grid-cols-2 lg:grid-cols-4 border-t text-sm rounded-b-2xl ">
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5 lg:border-b-0 border-b border-gray-200 rounded-bl-2xl  md:rounded-ss-lg border-r dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon9}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Logo Design and Visual Identity Development
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   lg:border-b-0 border-b lg:border-r border-gray-200 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon10}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Brand Strategy and Positioning
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5   border-r border-gray-200 md:border-b-0 dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon11}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
                Brand Guidelines and Style Guides
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:p-10 md:p-10 p-5 border-gray-200  rounded-br-2xl dark:border-gray-700">
            <blockquote className="text-gray-500 dark:text-gray-400">
              <Image
                src={SIcon12}
                alt=""
                className="lg:h-auto md:h-auto h-16"
              />

              <p className="text-[#EBEBEB] dark:text-secondaryDarkTextColor pt-8 ">
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
