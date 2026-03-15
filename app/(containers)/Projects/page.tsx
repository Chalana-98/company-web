"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/utils/Navbar";
import Footer from "@/app/components/utils/Footer";
import { motion } from "framer-motion";
import { Card, CardBody, Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CaseStudyModal from "./components/CaseStudyModal";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const projectsData = [
  {
    category: "design",
    title: "EcoSmart Landing Page",
    desc: "A stunning, highly-converting landing page for a sustainable energy company.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "design",
    title: "FinDash Dashboard",
    desc: "A sleek financial dashboard interface improving data visualization.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "dev",
    title: "HealthConnect App",
    desc: "A cross-platform mobile application for patient-doctor communication.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "dev",
    title: "RetailFlow E-Commerce",
    desc: "Scalable backend architecture and frontend for a massive retail store.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState<React.Key>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = selected === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === selected);

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <CaseStudyModal 
        isOpen={isModalOpen} 
        onOpenChange={() => setIsModalOpen(!isModalOpen)} 
        project={selectedProject} 
      />
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[30%] h-[30%] rounded-full bg-primary/20 blur-[100px] dark:bg-primary/10"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen pt-32 pb-12 w-full max-w-screen-xl mx-auto px-6 lg:px-12">
        <Navbar />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
            Empowering Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Digital Vision</span>
          </h1>
          <p className="text-lg text-foreground/70 font-medium">
            Discover how we have transformed businesses with cutting-edge technology, innovative design, and skilled execution.
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20"
        >
          {[
            { title: "Strategic Planning", desc: "Thorough research to ensure holistic understanding." },
            { title: "Customized Solutions", desc: "Tailored services perfectly aligned with brand identity." },
            { title: "User-Centric Approach", desc: "Designed with the end-user in mind for seamless experiences." }
          ].map((feature, i) => (
            <div key={feature.title} className="p-8 rounded-[2rem] bg-zinc-100/80 dark:bg-content1/50 border border-zinc-200 dark:border-white/5 backdrop-blur-sm">
              <CheckCircle2 className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Projects Tabs */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="w-full flex flex-col items-center"
        >
          <Tabs 
            selectedKey={selected as string} 
            onSelectionChange={setSelected}
            color="primary"
            variant="solid"
            radius="full"
            classNames={{
              tabList: "bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-2 shadow-inner",
              tab: "px-6 py-4",
            }}
          >
            <Tab key="all" title="All Projects" />
            <Tab key="design" title="Web & Mobile Design" />
            <Tab key="dev" title="Web & Mobile Dev" />
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12">
            {filteredProjects.map((project) => (
              <Card key={project.title} className="bg-zinc-100/50 dark:bg-content1/30 border border-zinc-200 dark:border-white/5 shadow-lg group overflow-hidden rounded-[2rem]">
                <CardBody className="p-0">
                  <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-foreground/70 mb-6">{project.desc}</p>
                    <button 
                      className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      onClick={() => handleOpenModal(project)}
                    >
                      Read Case Study <ArrowRight size={18} />
                    </button>
                  </div>
                </CardBody>
              </Card>
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
