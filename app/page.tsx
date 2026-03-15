import Navbar from "./components/utils/Navbar";
import MainBanner from "./homeSection/MainBanner";
import ProcessSection from "./homeSection/processSection";
import ServiceSection from "./homeSection/serviceSection";
import UniqueSection from "./homeSection/uniqueSection";
import Footer from "./components/utils/Footer";
import BottomBanner from "./homeSection/BottomBanner";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background gradients — same approach as inner pages for consistency */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/15 blur-[140px] dark:bg-primary/10"></div>
        <div className="absolute top-[30%] right-[-15%] w-[40%] h-[40%] rounded-full bg-cyan-500/15 blur-[120px] dark:bg-cyan-500/10"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] dark:bg-secondary/5"></div>
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
