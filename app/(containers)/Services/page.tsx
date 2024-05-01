import Footer from "@/components/utils/Footer";
import Navbar from "@/components/utils/Navbar";
import React from "react";
import DesignSection from "./serviceSection/designSection";
import HeaderSection from "./serviceSection/headerSection";
import DevelopmentSection from "./serviceSection/developmentSection";

function ServicesPage() {
  return (
    <main className="flex relative h-screen flex-col items-center justify-between py-24">

        <Navbar />
        <HeaderSection/>
         
    <div className="absolute top-20 right-50 -z-10 bottom-5 dark:bg-gradient-to-r from-blue4 to-blue1 w-96 h-96 blur-3xl "/>
        <DesignSection />
        <DevelopmentSection/>
        <Footer />

    </main>
  );
}

export default ServicesPage;
