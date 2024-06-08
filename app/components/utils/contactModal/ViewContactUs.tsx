"use client";
import React from "react";
import Image from "next/image";
import TopicComponent from "./TopicComponent";
import FBIcon from "../../../public/fb.svg";
import EmailIcon from "../../../public/email.svg";
import PhoneIcon from "../../../public/phone.svg";
import NetworkIcon from "../../../public/network.svg";
import LinkdinIcon from "../../../public/linkdin.svg";

interface ModalProps {
  handleShowModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ handleShowModal }) => {
  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed z-10 inset-0 overflow-y-auto flex items-center justify-center min-h-screen backdrop-filter backdrop-blur-md backdrop-brightness-75`}
    >
      <div className="flex flex-col items-center rounded-xl bg-[#363636] p-3">
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="crud-modal"
          onClick={handleShowModal}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="flex flex-row justify-between p-7">
          <form action="#" className="space-y-5 pr-10">
            <div className="flex flex-row">
              <div className="flex flex-col pr-10">
                <label
                  id="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jhon Doe"
                  className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  id="companyName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="shadow-sm border bg-transparent border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="CodeDigitX"
                />
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col pr-10">
                <label
                  id="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@codedigitX.com"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  id="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="07x-xxx xxxx"
                  className="shadow-sm border bg-transparent border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
            </div>
            <div>
              <label
                id="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                id="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>

              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border bg-transparent border-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="flex flex-row justify-end">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0094FF] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-between border rounded-xl border-[#757575] p-2">
            <div className="flex flex-col p-5">
              <div>
                <TopicComponent title="Our Email" img={EmailIcon} />

                <a
                  href="mailto:coredigitx.info@gmail.com"
                  className="text-white text-sm"
                >
                  coredigitx.info@gmail.com
                </a>
                <hr className="bg-[#EBEBEB] my-3" />
              </div>
              <div>
                <TopicComponent title="Give US a Call" img={PhoneIcon} />

                <p className="text-white text-sm">076-1234567</p>
                <hr className="bg-[#EBEBEB] my-3" />
              </div>
            </div>
            <div className="flex flex-col">
              <TopicComponent title="Connect with US" img={NetworkIcon} />
              <div className="flex flex-row bg-[#D9D9D9] bg-opacity-15 p-2 rounded-lg justify-evenly">
                <Image src={LinkdinIcon} alt={""} className="" />{" "}
                <Image src={FBIcon} alt={""} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
