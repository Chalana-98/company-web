
import React from "react";
import DesignSection from "./serviceSection/designSection";
import HeaderSection from "./serviceSection/headerSection";
import DevelopmentSection from "./serviceSection/developmentSection";
import Footer from "@/app/components/utils/Footer";
import BottomSection from "./serviceSection/BottomSection";

function ServicesPage() {
  return (
    <main className="">
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-24 pt-24 bg-gradient-to-r from-[#0A0A27] to-[#151629]">
    <div className="absolute gradiant-1 top-20 right-16 -z-0  bg-gradient-to-r from-cyan-500 to-blue-500 w-full rotate-45 h-3 blur-3xl "/>

   
        <HeaderSection/>
         
        <div className="absolute top-15 right-16 -z-0 bottom-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-10 blur-3xl "/>
        <DesignSection />
        <DevelopmentSection/>
        <BottomSection/>
        <Footer />
        <div className="absolute rotate-60  top-96  -z-10  bg-gradient-to-r from-blue-900 to-blue-800 blur-3xl w-full h-4  "/>
    </div>

    </main>
  );
}

export default ServicesPage;
