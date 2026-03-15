"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="flex lg:flex-row-reverse text-foreground lg:justify-between lg:text-start md:flex-row-reverse md:justify-between md:text-start flex-col items-center justify-center text-center max-w-screen-xl mx-auto w-full px-6 lg:px-12 gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center lg:justify-end relative"
        >
          {/* Decorative Backing */}
          <div className="absolute inset-x-4 inset-y-8 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-[40px] blur-xl -z-10 transform rotate-6"></div>
          <div className="relative p-8 rounded-[40px] bg-white/5 border border-white/10 dark:border-white/5 backdrop-blur-md shadow-2xl">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Image src="/tech_solutions.png" alt="All in one solution" width={400} height={400} className="w-full max-w-sm rounded-[2rem] drop-shadow-[0_0_30px_rgba(var(--nextui-secondary),0.5)] object-cover" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center lg:items-start md:items-start w-full md:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Comprehensive Solutions</span>
          </div>
          
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-foreground tracking-tight pb-6 leading-tight">
            Your all-in-one <br/>solution with us
          </h2>

          <p className="text-foreground/70 pb-10 lg:text-lg md:text-base text-base font-medium max-w-lg leading-relaxed">
            From initial consultation to final execution, we&apos;ve got you covered. Streamline
            your operations and maximize efficiency with our comprehensive all-in-one
            services tailored for modern businesses.
          </p>
          
          <Button 
            color="primary" 
            variant="flat"
            size="lg" 
            className="font-semibold px-8 border border-primary/50 shadow-lg shadow-primary/20 rounded-full hover:scale-105 transition-transform"
          >
            Discover Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
