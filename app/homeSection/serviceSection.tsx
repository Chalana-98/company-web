"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Cloud, Code2, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  { icon: <PenTool size={16} />, label: "Web & Mobile Design" },
  { icon: <Code2 size={16} />, label: "Engineering & Development" },
  { icon: <Cloud size={16} />, label: "Cloud Native & SaaS" },
];

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
              <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" alt="All in one solution" width={400} height={400} className="w-full h-[400px] max-w-sm rounded-[2rem] drop-shadow-[0_0_30px_rgba(var(--nextui-secondary),0.5)] object-cover" />
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

          <p className="text-foreground/70 pb-6 lg:text-lg md:text-base text-base font-medium max-w-lg leading-relaxed">
            From initial consultation to final execution, we&apos;ve got you covered. Streamline
            your operations and maximize efficiency with our comprehensive all-in-one
            services tailored for modern businesses.
          </p>

          {/* Service pillars */}
          <div className="flex flex-wrap gap-3 pb-10">
            {pillars.map((p) => (
              <div key={p.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-divider text-sm font-semibold text-foreground/70 shadow-sm">
                <span className="text-primary">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>
          
          <Link href="/Services">
            <Button 
              color="primary" 
              variant="flat"
              size="lg" 
              className="font-semibold px-8 border border-primary/50 shadow-lg shadow-primary/20 rounded-full hover:scale-105 transition-transform"
            >
              Discover Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
