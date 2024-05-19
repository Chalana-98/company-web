import Image from "next/image";
import React from "react";
import Banner2 from "../public/bannersvg2.svg";

function BottomBanner() {
  return (
    <>
      <div className="max-w-screen-xl">
        <div className="flex flex-col rounded-[32px] border-2 border-bodercolor1  text-surface shadow-secondary-1 dark:text-white  lg:flex-row md:flex-row items-center  lg:my-16 my-8  lg:py-10 py-5">
          <div className="flex flex-col justify-start p-6 lg:mx-24 mx-5 ">
            <p className="mb-4 text-xl font-semibold tracking-wide">
              Like what you’ve seen?{" "}
            </p>
            <h3 className="text-2xl font-bold text-surface/75 dark:text-neutral-300  tracking-wide lg:text-start md:text-start text-center">
              Level up your Ideas with CoreDigit X
            </h3>
            <div className="border-2 max-w-48 text-center rounded-[40px] py-2 mb-2 mt-8">
              Get in touch
            </div>
          </div>
          <Image src={Banner2} alt="" className="lg:mx-36 mx-5 my-5 lg:h-60 md:h-52 h-40" width={270} />
        </div>
      </div>
    </>
  );
}

export default BottomBanner;
