"use client";

import React from "react";
import Navbar from "@/app/components/utils/Navbar";
import Footer from "@/app/components/utils/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, Code, HeartHandshake, Zap } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Ongoing Support" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[150px] dark:bg-primary/10"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen pt-32 pb-12 w-full max-w-screen-xl mx-auto px-6 lg:px-12">
        <Navbar />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="w-full flex flex-col lg:flex-row items-center gap-16 mb-32"
        >
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
              Where Innovation Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Simplicity.</span>
            </h1>
            <p className="text-lg text-foreground/70 font-medium leading-relaxed mb-8">
              CoreDigit X was founded with a single mission: to craft highly scalable, beautiful digital experiences that make a lasting impact. Our team is passionate about solving complex problems with elegant code and intuitive design.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary pl-4">
                  <h4 className="text-3xl font-black">{stat.value}</h4>
                  <p className="text-foreground/60 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Our Team" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="w-full text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Code size={32} />, title: "Clean Code", desc: "We believe in writing readable, maintainable, and scalable code." },
              { icon: <HeartHandshake size={32} />, title: "Collaboration", desc: "We work closely with clients to ensure their vision comes to life." },
              { icon: <Zap size={32} />, title: "Performance", desc: "Speed and reliability are non-negotiable in our digital products." },
              { icon: <Coffee size={32} />, title: "Passion", desc: "We love what we do, and it shows in the quality of our work." },
            ].map((val) => (
              <div key={val.title} className="flex flex-col items-center bg-zinc-100/50 dark:bg-content1/30 border border-zinc-200 dark:border-white/5 p-8 rounded-[2rem] shadow-lg">
                <div className="p-4 bg-background text-primary border border-divider rounded-2xl mb-4">
                  {val.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{val.title}</h3>
                <p className="text-foreground/70">{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 w-full">
        <Footer />
      </div>
    </main>
  );
}
