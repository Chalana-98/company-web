"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

import { motion } from "framer-motion";

const ProcessSection = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="flex lg:flex-row text-foreground lg:justify-between lg:text-start md:flex-row md:justify-between md:text-start flex-col items-center justify-center text-center max-w-screen-xl mx-auto w-full px-6 lg:px-12 gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center lg:justify-start relative"
        >
          {/* Decorative Backing */}
          <div className="absolute inset-x-4 inset-y-8 bg-gradient-to-tr from-primary/20 to-transparent rounded-[40px] blur-xl -z-10 transform -rotate-6"></div>
          <div className="relative p-8 rounded-[40px] bg-white/5 border border-white/10 dark:border-white/5 backdrop-blur-md shadow-2xl">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Digital Collaboration" width={400} height={400} className="w-full h-[400px] max-w-sm rounded-[2rem] drop-shadow-[0_0_30px_rgba(var(--nextui-primary),0.5)] object-cover" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center lg:items-start md:items-start w-full md:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Methodology</span>
          </div>
          
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-foreground tracking-tight pb-6 leading-tight">
            Dedicated Team <br/>for your needs
          </h2>

          <p className="text-foreground/70 pb-10 lg:text-lg md:text-base text-base font-medium max-w-lg leading-relaxed">
            We excel in sourcing, cultivating, and coordinating top-tier talent to
            seamlessly collaborate with you. With over 4 years of expertise, we
            curate teams with precision, matching your exact needs to build the
            perfect software solution.
          </p>
          
          <Button 
            color="primary" 
            size="lg" 
            className="font-semibold px-8 shadow-lg shadow-primary/30 rounded-full hover:scale-105 transition-transform"
          >
            Explore Our Process
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
