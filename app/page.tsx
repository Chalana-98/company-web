import Image from "next/image";
import Navbar from "./components/utils/Navbar";
import MainBanner from "./homeSection/MainBanner";
import ProcessSection from "./homeSection/processSection";
import ServiceSection from "./homeSection/serviceSection";
import UniqueSection from "./homeSection/uniqueSection";
import Footer from "./components/utils/Footer";

export default function Home() {
  return (
    <main className="">
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-24 pt-24 bg-gradient-to-r from-[#0A0A27] to-[#151629]">
    <div className="absolute gradiant-1 top-20 right-16 -z-0  bg-gradient-to-r from-cyan-500 to-blue-500 w-full rotate-45 h-3 blur-3xl "/>
    <Navbar/>
    <MainBanner/>
    <ProcessSection/>
    <div className="absolute top-15 right-16 -z-0 bottom-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-10 blur-3xl "/>
    <ServiceSection/>
    <UniqueSection/>
    <Footer/>

    <div className="absolute rotate-60  top-96  -z-10  bg-gradient-to-r from-blue-900 to-blue-800 blur-3xl w-full h-4  "/>
    </div>

    </main>
  );
}
