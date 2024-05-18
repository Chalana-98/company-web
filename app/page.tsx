import Image from "next/image";
import Navbar from "./components/utils/Navbar";
import MainBanner from "./homeSection/MainBanner";
import ProcessSection from "./homeSection/processSection";
import ServiceSection from "./homeSection/serviceSection";
import UniqueSection from "./homeSection/uniqueSection";
import Footer from "./components/utils/Footer";
import BottomBanner from "./homeSection/BottomBanner";
import Background from "./public/background4.png"; // Import the background image

export default function Home() {
  return (
    <main className="relative z-10">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="relative z-20 flex flex-col items-center justify-between min-h-screen px-6 pt-24">
        <Navbar />
        <MainBanner />
        <UniqueSection />
        <ProcessSection />
        <ServiceSection />
        <BottomBanner />
        <Footer />
      </div>
    </main>
  );
}
