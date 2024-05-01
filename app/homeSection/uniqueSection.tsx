
import React from "react";
import IconTextCard from "../components/ui/icon-text-card";

function UniqueSection() {
  return (
    <>
      <p className="text-4xl text-white dark:text-primaryDarkTextColor mb-10 text-center">
        Why make us different
      </p>
      <div className="lg:grid lg:grid-cols-3  md:grid md:grid-cols-1 sm:flex sm:flex-col pb-10 text-[#EBEBEB]">
        <div className="lg:flex lg:flex-col md:flex md:flex-row sm:grid sm:grid-cols-1 ">
          <IconTextCard
            title="Success Redefined"
            content="Transformative Outcomes"
            path="./vector1.svg"
          />
          <IconTextCard
            title={
              <>
                Customized Technology
                <br /> Solutions
              </>
            }
            content={
              <>
                Cutting-edge technology
                <br /> tailored to your unique needs
              </>
            }
            path="./vector4.svg"
          />
        </div>
        <div className="lg:flex lg:flex-col md:flex md:flex-row sm:grid sm:grid-cols-1">
          <IconTextCard
            title="Solutions that Simplify"
            content={
              <>
                Solve complex problems with <br /> elegant, intuitive solutions
              </>
            }
            path="./vector2.svg"
          />
          <IconTextCard
            title="Efficiency Redefined"
            content={
              <>
                Streamlined Processes,
                <br /> Unmatched Productivity
              </>
            }
            path="./vector5.svg"
          />
        </div>
        <div className="lg:flex lg:flex-col md:flex md:flex-row sm:grid sm:grid-cols-1">
          <IconTextCard
            title="Reliable Support Services"
            content={
              <>
                Seamless Support, Every Step
                <br /> Guaranteed
              </>
            }
            path="./vector3.svg"
          />
          <IconTextCard
            title="Pushing Boundaries"
            content={
              <>
                Anticipating, Exceeding Industry
                <br /> Standards with Innovation
              </>
            }
            path="./vector6.svg"
          />
        </div>
      </div>
    </>
  );
}

export default UniqueSection;
