"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { openContactModal } from "../components/utils/openContactModal";

import BannerImg from "../../public/mainbannerimage.jpeg";

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
    <section className="relative w-full flex flex-col items-center pt-24 pb-32">
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
              onPress={openContactModal}
              className="w-full sm:w-auto px-10 py-7 text-lg font-semibold shadow-2xl shadow-primary/30 rounded-full hover:scale-105 transition-transform"
            >
              Get Started Now
            </Button>
            <Link href="/Projects">
              <Button 
                variant="bordered" 
                size="lg" 
                className="w-full sm:w-auto px-10 py-7 text-lg font-semibold rounded-full border-2 hover:bg-foreground/5 transition-colors"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>

         
        </div>

        <motion.div 
          variants={itemVariants}
          className="flex-1 relative w-full max-w-lg lg:max-w-none mt-12 lg:mt-0"
        >
          <div className="relative aspect-square w-full">
            {/* Subtle glow behind */}
            <div className="absolute inset-4 bg-gradient-to-tr from-primary/30 to-cyan-500/30 rounded-[2rem] blur-2xl opacity-60 pointer-events-none"></div>
            {/* Entire card floats as one unit — no border gap */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={BannerImg}
                alt="3D Abstract Tech Hero"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-cover block"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MainBanner;
