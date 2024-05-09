import React from "react";
import Image from "next/image";
import ServiceIcon1 from '../../../public/serviceIcons/bg1.svg'
import ServiceIcon2 from '../../../public/serviceIcons/webmobileicon2.svg'
import SIcon13 from '../../../public/serviceIcons/Icon13.svg'
import SIcon14 from '../../../public/serviceIcons/Icon14.svg'
import SIcon15 from '../../../public/serviceIcons/Icon15.svg'
import SIcon16 from '../../../public/serviceIcons/Icon16.svg'
import SIcon17 from '../../../public/serviceIcons/Icon17.svg'
import SIcon18 from '../../../public/serviceIcons/Icon18.svg'
import SIcon19 from '../../../public/serviceIcons/Icon19.svg'
import SIcon20 from '../../../public/serviceIcons/Icon20.svg'
import SIcon21 from '../../../public/serviceIcons/Icon21.svg'
import SIcon22 from '../../../public/serviceIcons/Icon22.svg'
import SIcon23 from '../../../public/serviceIcons/Icon23.svg'
import SIcon24 from '../../../public/serviceIcons/Icon24.svg'
const DevelopmentSection = () => {
  return (
    <>
      <div className="flex border flex-col lg:mx-24 md:mx-24 mx-16  rounded-2xl relative mt-20 text-[#EBEBEB] max-w-screen">
        <Image
          src={ServiceIcon1}
          alt=""
          className="h-96 lg:object-fill object-cover"
        />

        <div className="flex flex-col items-center justify-center top-0 pt-5 right-0 left-0 mx-auto absolute">
          <Image
            src={ServiceIcon2}
            alt=""
            className="lg:h-32 lg:w-32 md:h-28 h-24 object-cover"
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
              <Image
                src={SIcon13}
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
              <Image
                src={SIcon14}
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
              <Image
                src={SIcon15}
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
              <Image
                src={SIcon16}
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
              <Image
                src={SIcon17}
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
              <Image
                src={SIcon18}
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
              <Image
                src={SIcon19}
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
              <Image
                src={SIcon20}
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
              <Image
                src={SIcon21}
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
              <Image
                src={SIcon22}
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
              <Image
                src={SIcon23}
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
              <Image
                src={SIcon24}
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
