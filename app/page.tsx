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
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background layer with theme-aware opacity */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-40 dark:opacity-5 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      {/* Background gradients for modern effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] dark:bg-secondary/10"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen px-4 md:px-6 pt-24 pb-12 w-full max-w-[100vw]">
        <Navbar />
        <MainBanner />
        <UniqueSection />
        <ProcessSection />
        <ServiceSection />
        <BottomBanner />
      </div>
      <div className="relative z-20 w-full">
        <Footer />
      </div>
    </main>
  );
}
