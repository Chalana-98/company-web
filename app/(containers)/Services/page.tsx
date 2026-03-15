"use client";

import React from "react";
import Navbar from "@/app/components/utils/Navbar";
import Footer from "@/app/components/utils/Footer";
import { motion } from "framer-motion";
import { MonitorSmartphone, LayoutTemplate, PenTool, Layers, Code2, Server, Database, ShoppingCart, Smartphone, AppWindow, GitBranch, TerminalSquare, Cloud, PackageOpen, RefreshCcw, ShieldCheck, BarChart3, Boxes } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const designServices = [
  { icon: <LayoutTemplate size={24} />, title: "User Research & Personas", desc: "Understanding behavior to form powerful strategies." },
  { icon: <Layers size={24} />, title: "Information Architecture", desc: "Structured flow for seamless navigation." },
  { icon: <AppWindow size={24} />, title: "Interactive Prototyping", desc: "Interactive wireframes and user testing." },
  { icon: <PenTool size={24} />, title: "UI & Visual Branding", desc: "Stunning interfaces that speak to your audience." },
];

const devServices = [
  { icon: <MonitorSmartphone size={24} />, title: "Front-End Development", desc: "React, Next.js, and modern web frameworks." },
  { icon: <Server size={24} />, title: "Back-End Architecture", desc: "Scalable APIs and server-side processing." },
  { icon: <Database size={24} />, title: "CMS Integration", desc: "Custom WordPress, Sanity, or Headless CMS." },
  { icon: <ShoppingCart size={24} />, title: "E-Commerce Solutions", desc: "Shopify, Shopify Plus, and custom storefronts." },
  { icon: <Smartphone size={24} />, title: "iOS & Android Apps", desc: "Native experiences for modern mobile platforms." },
  { icon: <TerminalSquare size={24} />, title: "Cross-Platform Mobile", desc: "Flutter & React Native for unified codebases." },
  { icon: <Code2 size={24} />, title: "Enterprise Software", desc: "Large-scale internal tools and portals." },
  { icon: <GitBranch size={24} />, title: "Third-Party APIs", desc: "Seamless integration with existing ecosystems." },
];

const cloudServices = [
  { icon: <Cloud size={24} />, title: "Cloud Infrastructure", desc: "AWS, GCP, and Azure architecture designed for scale and reliability." },
  { icon: <PackageOpen size={24} />, title: "SaaS Product Development", desc: "End-to-end multi-tenant SaaS platforms from architecture to launch." },
  { icon: <Boxes size={24} />, title: "Microservices & Containers", desc: "Docker and Kubernetes-based deployments for resilient workloads." },
  { icon: <RefreshCcw size={24} />, title: "CI/CD & DevOps", desc: "Automated pipelines, GitOps workflows, and zero-downtime releases." },
  { icon: <ShieldCheck size={24} />, title: "Cloud Security & Compliance", desc: "Security-first design with SOC 2, GDPR, and ISO-ready posture." },
  { icon: <BarChart3 size={24} />, title: "Observability & Analytics", desc: "Real-time monitoring, logging, and performance dashboards." },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px] dark:bg-cyan-500/10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px] dark:bg-blue-500/10"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen pt-32 pb-12 w-full max-w-screen-xl mx-auto px-6 lg:px-12">
        <Navbar />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
            Our Comprehensive <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Digital Solutions</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium">
            At CoreDigit X, we propel your business with comprehensive digital solutions. Skilled professionals, cutting-edge tech, and innovation ensure exceptional results.
          </p>
        </motion.div>

        {/* Design Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="w-full mb-24 relative"
        >
          <div className="absolute inset-0 bg-zinc-100/50 dark:bg-content1/30 rounded-[3rem] border border-zinc-200 dark:border-white/5 -z-10"></div>
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-divider pb-10 mb-10">
              <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                <PenTool size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Web & Mobile Design</h2>
                <p className="text-foreground/70 max-w-2xl">
                  Creating visually stunning and user-friendly interfaces that leave a lasting impression. We blend creativity with optimal user experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designServices.map((service) => (
                <div key={service.title} className="flex flex-col items-start text-left group">
                  <div className="w-12 h-12 rounded-xl bg-background border border-divider flex items-center justify-center text-primary mb-4 shadow-sm group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/60">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Development Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="w-full mb-24 relative"
        >
          <div className="absolute inset-0 bg-zinc-100/50 dark:bg-content1/30 rounded-[3rem] border border-zinc-200 dark:border-white/5 -z-10"></div>
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-divider pb-10 mb-10">
              <div className="p-4 bg-cyan-500/10 text-cyan-500 rounded-2xl">
                <Code2 size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Engineering & Development</h2>
                <p className="text-foreground/70 max-w-2xl">
                  Turning designs into powerful digital assets. We utilize the latest technologies to build dynamic, scalable, and secure applications.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
              {devServices.map((service) => (
                <div key={service.title} className="flex flex-col items-start text-left group">
                  <div className="w-12 h-12 rounded-xl bg-background border border-divider flex items-center justify-center text-cyan-500 mb-4 shadow-sm group-hover:bg-cyan-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/60">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Cloud Native & SaaS Section */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="w-full mb-24 relative"
        >
          <div className="absolute inset-0 bg-zinc-100/50 dark:bg-content1/30 rounded-[3rem] border border-zinc-200 dark:border-white/5 -z-10"></div>
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-divider pb-10 mb-10">
              <div className="p-4 bg-violet-500/10 text-violet-500 rounded-2xl">
                <Cloud size={40} />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/5 mb-3">
                  <span className="text-xs font-bold text-violet-500 uppercase tracking-widest">New Offering</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">Cloud Native & SaaS Product Development</h2>
                <p className="text-foreground/70 max-w-2xl">
                  We architect and build cloud-native platforms that are elastic, secure, and production-ready from day one. Whether you&apos;re launching a new SaaS product or migrating legacy systems to the cloud, our team delivers end-to-end solutions on AWS, GCP, and Azure.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {cloudServices.map((service) => (
                <div key={service.title} className="flex flex-col items-start text-left group">
                  <div className="w-12 h-12 rounded-xl bg-background border border-divider flex items-center justify-center text-violet-500 mb-4 shadow-sm group-hover:bg-violet-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/60">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
      <div className="relative z-20 w-full">
        <Footer />
      </div>
    </main>
  );
}
