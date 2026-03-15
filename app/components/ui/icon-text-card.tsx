"use client";

import React from "react";
import { motion } from "framer-motion";

interface IconTextCardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  className?: string;
}

function IconTextCard({ title, content, icon, className = "" }: IconTextCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`group relative flex flex-col bg-zinc-100/80 dark:bg-content1/50 backdrop-blur-md rounded-[32px] p-8 md:p-10 border border-zinc-200 dark:border-white/10 overflow-hidden shadow-xl ${className}`}
    >
      {/* Decorative Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative z-10 flex flex-col justify-between items-start h-full">
        <div className="p-4 rounded-2xl bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 shadow-inner mb-8 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          {icon}
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-base text-foreground/70 leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default IconTextCard;
