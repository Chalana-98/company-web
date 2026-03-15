"use client";
import React from "react";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function MainBanner() {
  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-32 overflow-hidden">
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-50 dark:opacity-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50 dark:opacity-30 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-screen-xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center gap-16 relative z-10"
      >
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pioneering Digital Solutions</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-tighter leading-[1.1] mb-8 text-foreground">
            Transform your <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">vision</span> into reality.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/70 font-medium max-w-xl mb-10 leading-relaxed">
            Welcome to CoreDigit X, where innovation meets simplicity. We craft digital dreams into reality, unlocking endless possibilities for your business.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button 
              color="primary" 
              size="lg" 
              className="w-full sm:w-auto px-10 py-7 text-lg font-semibold shadow-2xl shadow-primary/30 rounded-full hover:scale-105 transition-transform"
            >
              Get Started Now
            </Button>
            <Button 
              variant="bordered" 
              size="lg" 
              className="w-full sm:w-auto px-10 py-7 text-lg font-semibold rounded-full border-2 hover:bg-foreground/5 transition-colors"
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4 text-foreground/50 text-sm font-medium">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-content2 flex items-center justify-center overflow-hidden">
                  <span className="text-xs font-bold text-foreground/40">{i}</span>
                </div>
              ))}
            </div>
            <span>Trusted by 100+ innovative companies</span>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="flex-1 relative w-full max-w-lg lg:max-w-none mt-12 lg:mt-0"
        >
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-cyan-500/20 rounded-[4rem] rotate-6 scale-105 blur-xl"></div>
            <div className="absolute inset-0 bg-zinc-100/50 dark:bg-content1 border border-zinc-200 dark:border-divider rounded-[4rem] shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
               {/* 3D or Graphic Element Placeholder */}
               <motion.div
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               >
                 <Image src="/abstract_tech_hero.png" alt="3D Abstract Tech Hero" width={500} height={500} priority className="w-full max-w-lg drop-shadow-[0_0_30px_rgba(var(--nextui-primary),0.8)] rounded-[2rem] object-cover" />
               </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MainBanner;
