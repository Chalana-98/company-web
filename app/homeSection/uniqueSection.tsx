
import React from "react";
import IconTextCard from "../components/ui/icon-text-card";
import Vector1 from '../public/vector1.svg'
import Vector2 from '../public/vector2.svg'
import Vector3 from '../public/vector3.svg'
import Vector4 from '../public/vector4.svg'
import Vector5 from '../public/vector5.svg'
import Vector6 from '../public/vector6.svg'

function UniqueSection() {
  return (
    <>
      <p className="text-4xl text-[#EBEBEB] dark:text-primaryDarkTextColor mb-10 text-center">
        Why make us different
      </p>
      <div className="lg:grid lg:grid-cols-3  md:grid md:grid-cols-1 sm:flex sm:flex-col pb-10 text-[#EBEBEB]">
        <div className="lg:flex lg:flex-col md:flex md:flex-row sm:grid sm:grid-cols-1 ">
          <IconTextCard
            title="Success Redefined"
            content="Transformative Outcomes"
            path={Vector1}
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
            path={Vector4}
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
            path={Vector2}
          />
          <IconTextCard
            title="Efficiency Redefined"
            content={
              <>
                Streamlined Processes,
                <br /> Unmatched Productivity
              </>
            }
            path={Vector5}
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
            path={Vector3}
          />
          <IconTextCard
            title="Pushing Boundaries"
            content={
              <>
                Anticipating, Exceeding Industry
                <br /> Standards with Innovation
              </>
            }
            path={Vector6}
          />
        </div>
      </div>
    </>
  );
}

export default UniqueSection;
