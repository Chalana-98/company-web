"use client";

import React from "react";
import Navbar from "@/app/components/utils/Navbar";
import Footer from "@/app/components/utils/Footer";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights." },
  { num: "02", title: "Planning & Strategy", desc: "Creating a comprehensive project plan matching your milestones, deliverables, and resource allocation." },
  { num: "03", title: "Design", desc: "Translating requirements into captivating visuals. We build wireframes and interactive prototypes to showcase UX/UI." },
  { num: "04", title: "Development", desc: "Bringing designs to life using cutting-edge technologies and robust software architecture." },
  { num: "05", title: "QA & Testing", desc: "Rigorous testing to ensure flawless functionality across different browsers and operating systems." },
  { num: "06", title: "Deployment", desc: "Smooth transition from staging to production, handling all server configurations and technical launch aspects." },
];

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px] dark:bg-cyan-500/10"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen pt-32 pb-12 w-full max-w-screen-xl mx-auto px-6 lg:px-12">
        <Navbar />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md mb-6">
            <span className="text-sm font-semibold text-cyan-500 uppercase tracking-wider">How We Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Methodology</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium">
            We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="w-full relative"
        >
          {/* Vertical connecting line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-cyan-500/50 to-transparent hidden md:block -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-16 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <div key={step.num} className={`flex flex-col md:flex-row items-center gap-8 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start md:pl-16' : 'justify-end md:pr-16'} relative`}>
                    {/* Circle on the line */}
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10" style={{ [isEven ? 'left' : 'right']: '-8px' }}></div>
                    
                    <div className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-100/80 dark:bg-content1/50 border border-zinc-200 dark:border-white/5 backdrop-blur-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl max-w-lg w-full">
                      <div className="absolute right-0 -top-[0px] text-[120px] font-black text-primary/5 group-hover:text-primary/10 transition-colors select-none pointer-events-none leading-none">
                        {step.num}
                      </div>
                      <div className="relative z-10">
                        <span className="text-primary font-bold text-xl mb-2 block">{step.num}.</span>
                        <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                        <p className="text-foreground/70 text-lg leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <div className="relative z-20 w-full mt-24">
        <Footer />
      </div>
    </main>
  );
}
