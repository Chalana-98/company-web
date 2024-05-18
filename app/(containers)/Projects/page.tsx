import Footer from "@/app/components/utils/Footer";
import Navbar from "@/app/components/utils/Navbar";
import React from "react";

import ProjectSelectionTabs from "./components/ProjectSelectionTabs";

import KeyFeaturesSection from "./projectSection/KeyFeaturesSection";

import BottomSection from "../Services/serviceSection/BottomSection";
import UpcomingSection from "./projectSection/UpcomingSection";
import { HeaderSection } from "./projectSection/HeaderSection";

const ProjectsPage = () => {
  return (
    <main className="">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between lg:px-24 md:px-24 px-12 pt-24 bg-gradient-to-r from-[#0A0A27] to-[#151629]">
        <div className="absolute gradiant-1 top-20 right-16 -z-0  bg-gradient-to-r from-cyan-500 to-blue-500 w-full rotate-45 h-3 blur-3xl " />
        <Navbar />
        <div className="absolute top-15 right-16 -z-0 bottom-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-10 blur-3xl " />

        <HeaderSection
          title="
            Empowering Your Digital Vision
            "
          description="
            At CoreDigit X, we propel your business with comprehensive digital
            solutions. Skilled professionals, cutting-edge tech, and innovation
            ensure exceptional results in web design and development At
            CoreDigit X, we propel your business with comprehensive digital
            solutions.
            
            "
        />
        <KeyFeaturesSection />
        <ProjectSelectionTabs />
        <UpcomingSection />
        <BottomSection />

        <Footer />

        <div className="absolute rotate-60  top-96  -z-10  bg-gradient-to-r from-blue-900 to-blue-800 blur-3xl w-full h-4  " />
      </div>
    </main>
  );
};

export default ProjectsPage;
