import React from "react";

function MainBanner() {
  return (
    <>
      <div className="flex flex-col rounded-[32px]  text-surface shadow-secondary-1 bg-gradient-to-t from-blue-700 to-blue-400 text-[#EBEBEB]  xl:flex-row max-w-screen-xl my-16 px-14 py-14">
        <div className="flex flex-col justify-start p-6 mx-5">
          <div className="border-2 max-w-48 text-center rounded-[40px] py-2 mb-8">
            Your Web Experts
          </div>
          <p className="mb-8 text-5xl font-semibold tracking-wide">Transform your vision <br />into reality</p>
          <h3 className="text-xl text-surface/75 dark:text-neutral-300 font-light tracking-wide">
            Welcome to CoreDigit X, where innovation meets simplicity. We craft
            digital dreams into reality, one line of code at a time. Join us and
            unlock endless possibilities.
          </h3>
        </div>
        <img src="./banner1.svg" alt="" />
      </div>
      <div className="my-20 text-[#EBEBEB]">
        <div className="text-center text-5xl">
          Make life easier with a little help from
          <div className="text-center text-5xl">our support</div>
        </div>
        <div className="flex flex-row items-center justify-center my-20">
          <button
            type="button"
            className="inline-block bg-blue-600 rounded-lg mx-4 bg-blue2 px-6 pb-2 pt-2.5 text-base font-medium uppercase leading-normal text-[#EBEBEB] shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            view our projects
          </button>
          <button
            type="button"
            className="inline-block mx-4 rounded-lg border-2 border-blue2 px-6 pb-[6px] pt-2 text-base font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
            data-twe-ripple-init
          >
            Get our support
          </button>
        </div>
      </div>
    </>
  );
}

export default MainBanner;
