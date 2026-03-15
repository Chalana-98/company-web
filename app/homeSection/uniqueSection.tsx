"use client";
import React from "react";
import IconTextCard from "../components/ui/icon-text-card";
import { Rocket, Settings2, Infinity, Zap, ShieldCheck, Globe, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function UniqueSection() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-foreground mb-6"
          >
            Why we are <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">different</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-foreground/70 font-medium"
          >
            We combine strategic thinking with technical excellence to deliver products that redefine your industry standards.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr]"
        >
             <motion.div variants={itemVariants} className="lg:col-span-3">
            <IconTextCard
              title="Cloud Native & SaaS Development"
              content="We design and ship production-ready cloud platforms — from multi-tenant SaaS architectures to full DevOps pipelines on AWS, GCP, and Azure. Scale confidently from day one."
              icon={<Cloud size={40} />}
              className="h-full bg-gradient-to-br from-violet-500/10 to-transparent"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <IconTextCard
              title="Success Redefined"
              content="Transformative outcomes that elevate your business to new heights. We don't just build software, we build platforms for massive growth."
              icon={<Rocket size={40} />}
              className="h-full bg-gradient-to-br from-primary/10 to-transparent"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <IconTextCard
              title="Customized Solutions"
              content="Cutting-edge technology, individually tailored to your unique needs."
              icon={<Settings2 size={40} />}
              className="h-full"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <IconTextCard
              title="Solutions that Simplify"
              content="Solve complex problems with elegant, intuitive solutions."
              icon={<Infinity size={40} />}
              className="h-full"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <IconTextCard
              title="Efficiency Redefined"
              content="Streamlined processes and unmatched productivity tools designed specifically to cut costs and boost performance."
              icon={<Zap size={40} />}
              className="h-full bg-gradient-to-br from-cyan-500/10 to-transparent"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="lg:col-span-2">
             <IconTextCard
              title="Reliable Support Services"
              content="Seamless Support, Every Step Guaranteed. Our dedicated team is available 24/7."
              icon={<ShieldCheck size={40} />}
              className="h-full"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <IconTextCard
              title="Pushing Boundaries"
              content="Anticipating and exceeding industry standards with relentless innovation."
              icon={<Globe size={40} />}
              className="h-full bg-content2/80"
            />
          </motion.div>

       
          
        </motion.div>
      </div>
    </section>
  );
}

export default UniqueSection;
