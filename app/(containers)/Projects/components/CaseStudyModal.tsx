"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Chip } from "@nextui-org/react";
import { TrendingUp, Users, Zap, CheckCircle, ExternalLink, X } from "lucide-react";
import Image from "next/image";

interface CaseStudyModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  project: {
    title: string;
    desc: string;
    category?: string;
    img?: string;
  } | null;
}

const metrics = [
  { icon: <TrendingUp size={20} />, label: "Conversion Rate", value: "+35%", color: "text-emerald-500" },
  { icon: <Users size={20} />, label: "User Engagement", value: "+60%", color: "text-blue-500" },
  { icon: <Zap size={20} />, label: "Load Time", value: "-48%", color: "text-amber-500" },
];

const processSteps = [
  { title: "Discovery & Research", desc: "Stakeholder interviews, user surveys, and competitive benchmarking to define goals and success metrics." },
  { title: "Strategy & Architecture", desc: "Information architecture, technical stack selection, and sprint planning for agile delivery." },
  { title: "Design & Prototyping", desc: "High-fidelity wireframes and interactive prototypes with continuous user testing loops." },
  { title: "Development & Launch", desc: "Robust implementation, QA testing across devices, and seamless zero-downtime deployment." },
];

export default function CaseStudyModal({ isOpen, onOpenChange, project }: CaseStudyModalProps) {
  if (!project) return null;

  const categoryLabel = project.category === "design" ? "UI/UX Design" : "Web Development";
  const categoryColor = project.category === "design" ? "secondary" : "primary";

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      scrollBehavior="inside"
      classNames={{
        backdrop: "bg-black/60 backdrop-blur-sm",
        base: "bg-background border border-divider shadow-2xl",
        closeButton: "hidden",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            {/* Hero Header */}
            <ModalHeader className="p-0 flex-col">
              <div className="relative h-52 w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-primary/20 via-cyan-500/10 to-background">
                {project.img && (
                  <Image src={project.img} alt={project.title} fill className="object-cover opacity-40" unoptimized />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-divider flex items-center justify-center hover:bg-content2 transition-colors"
                >
                  <X size={16} className="text-foreground" />
                </button>
                <div className="absolute bottom-6 left-8 right-8">
                  <Chip
                    size="sm"
                    color={categoryColor}
                    variant="flat"
                    className="mb-3 font-semibold uppercase tracking-wider text-xs"
                  >
                    {categoryLabel}
                  </Chip>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    {project.title}
                  </h2>
                </div>
              </div>
            </ModalHeader>

            <ModalBody className="px-8 pt-6 pb-2">
              {/* Project Overview */}
              <p className="text-foreground/70 leading-relaxed text-base mb-8">
                {project.desc} Our team worked closely with the client to understand their unique challenges, delivering a solution that not only met but exceeded expectations in performance, usability, and business impact.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-content1 border border-divider text-center"
                  >
                    <span className={`${m.color}`}>{m.icon}</span>
                    <span className={`text-2xl font-extrabold ${m.color}`}>{m.value}</span>
                    <span className="text-xs text-foreground/50 font-medium">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Our Process */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary rounded-full inline-block"></span>
                  Our Process
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-content1 border border-divider">
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm mb-1">{step.title}</p>
                        <p className="text-xs text-foreground/60 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20">
                <h4 className="text-lg font-bold mb-2 text-primary">Outcome</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Post-launch analytics showed a dramatic improvement across all KPIs. The client reported a <strong>35% increase in conversions</strong>, a <strong>60% boost in user engagement</strong>, and significantly improved brand perception among their target audience within the first 90 days of going live.
                </p>
              </div>
            </ModalBody>

            <ModalFooter className="px-8 py-5 border-t border-divider gap-3">
              <Button variant="flat" onPress={onClose} className="rounded-full font-semibold">
                Close
              </Button>
              <Button
                color="primary"
                onPress={onClose}
                className="rounded-full font-semibold"
                startContent={<ExternalLink size={16} />}
              >
                View Live Project
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
