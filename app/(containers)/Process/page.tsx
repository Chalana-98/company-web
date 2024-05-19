import Footer from "@/app/components/utils/Footer";
import Navbar from "@/app/components/utils/Navbar";
import { HeaderSection } from "../Projects/projectSection/HeaderSection";
import StepsSection from "./processSection/StepSection";

const ProcessPage = () => {
  return (
    <main className="">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between lg:px-24 md:px-24 px-12 pt-24 bg-gradient-to-r from-[#0A0A27] to-[#151629]">
        <div className="absolute gradiant-1 top-20 right-16 -z-0  bg-gradient-to-r from-cyan-500 to-blue-500 w-full rotate-45 h-3 blur-3xl " />
        <Navbar />
        <div className="absolute top-15 right-16 -z-0 bottom-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-10 blur-3xl " />
        <HeaderSection
          title="Process of starting the project"
          description=" At CoreDigit X, we propel your business with comprehensive digital solutions. Skilled professionals, cutting-edge tech, and innovation ensure exceptional results in web design and development At CoreDigit X, we propel your business with comprehensive digital solutions. Skilled professionals, "
        />
        <StepsSection/>
        <Footer />

        <div className="absolute rotate-60  top-96  -z-10  bg-gradient-to-r from-blue-900 to-blue-800 blur-3xl w-full h-4  " />
      </div>
    </main>
  );
};

export default ProcessPage;
