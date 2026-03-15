"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Mail, Phone, MapPin, Send, X, MessageSquare } from "lucide-react";

// Inline SVG icons — avoids deprecated lucide-react named exports
const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const FBIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const services = [
  { key: "web-design", label: "Web & Mobile Design" },
  { key: "web-dev", label: "Web & Mobile Development" },
  { key: "cloud-saas", label: "Cloud Native & SaaS Development" },
  { key: "ecommerce", label: "E-Commerce Solutions" },
  { key: "enterprise", label: "Enterprise Software" },
  { key: "mobile-app", label: "iOS / Android App" },
  { key: "other", label: "Other / Not Sure" },
];

const budgets = [
  { key: "under-5k", label: "Under $5,000" },
  { key: "5k-15k", label: "$5,000 – $15,000" },
  { key: "15k-50k", label: "$15,000 – $50,000" },
  { key: "50k-plus", label: "$50,000+" },
];

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email Us",
    value: "hello@coredigitx.com",
    href: "mailto:hello@coredigitx.com",
  },
  {
    icon: <Phone size={18} />,
    label: "Call Us",
    value: "+94 765745543",
    href: "tel:+94765745543",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Nugegoda, Sri Lanka",
    href: "#",
  },
];

const socialLinks = [
  { href: "https://linkedin.com", icon: <LinkedInIcon />, label: "LinkedIn" },
  { href: "https://facebook.com", icon: <FBIcon />, label: "Facebook" },
  { href: "https://wa.me/15550000000", icon: <MessageSquare size={16} />, label: "WhatsApp" },
  { href: "mailto:hello@coredigitx.com", icon: <Mail size={16} />, label: "Email" },
];

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Replace with your email service: EmailJS, Resend, SendGrid, etc.
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm(EMPTY_FORM);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={handleClose}
      size="4xl"
      scrollBehavior="inside"
      classNames={{
        backdrop: "bg-black/60 backdrop-blur-sm",
        base: "bg-background border border-divider shadow-2xl m-4",
        closeButton: "hidden",
      }}
    >
      <ModalContent>
        {() => (
          <ModalBody className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">

              {/* ── Left panel ──────────────────────────── */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary via-primary/90 to-cyan-600 p-8 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none flex flex-col justify-between">
                <div>
                  <button
                    onClick={handleClose}
                    className="mb-8 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X size={16} className="text-white" />
                  </button>

                  <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">
                    Get In Touch
                  </p>
                  <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    Let&apos;s build something great together.
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-10">
                    Fill in the form and our team will get back to you within 24 hours.
                    We&apos;re excited to hear about your project!
                  </p>

                  <div className="flex flex-col gap-5">
                    {contactInfo.map((item) => (
                      <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-white/25 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-white/60 text-xs font-medium">{item.label}</p>
                          <p className="text-white text-sm font-semibold">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Right panel ─────────────────────────── */}
              <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center gap-6 py-12">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center">
                      <Send size={32} className="text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent! 🎉</h3>
                      <p className="text-foreground/60 max-w-sm">
                        Thanks, <strong>{form.name}</strong>! We&apos;ve received your message and will
                        be in touch at <strong>{form.email}</strong> within 24 hours.
                      </p>
                    </div>
                    <Button
                      color="primary"
                      className="rounded-full px-8 font-semibold"
                      onPress={handleClose}
                    >
                      Close
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-1">Send us a message</h3>
                      <p className="text-foreground/50 text-sm">
                        We typically reply within one business day.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Full Name"
                          placeholder="John Smith"
                          value={form.name}
                          onValueChange={(v) => handleChange("name", v)}
                          isRequired
                          variant="bordered"
                          classNames={{ inputWrapper: "border-divider" }}
                        />
                        <Input
                          label="Email Address"
                          placeholder="john@example.com"
                          type="email"
                          value={form.email}
                          onValueChange={(v) => handleChange("email", v)}
                          isRequired
                          variant="bordered"
                          classNames={{ inputWrapper: "border-divider" }}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Phone (optional)"
                          placeholder="+1 555 000 0000"
                          type="tel"
                          value={form.phone}
                          onValueChange={(v) => handleChange("phone", v)}
                          variant="bordered"
                          classNames={{ inputWrapper: "border-divider" }}
                        />
                        <Select
                          label="Service Interested In"
                          placeholder="Select a service"
                          selectedKeys={form.service ? [form.service] : []}
                          onSelectionChange={(keys) =>
                            handleChange("service", Array.from(keys)[0] as string)
                          }
                          variant="bordered"
                          classNames={{ trigger: "border-divider" }}
                        >
                          {services.map((s) => (
                            <SelectItem key={s.key}>{s.label}</SelectItem>
                          ))}
                        </Select>
                      </div>

                      <Select
                        label="Estimated Budget"
                        placeholder="Select a budget range"
                        selectedKeys={form.budget ? [form.budget] : []}
                        onSelectionChange={(keys) =>
                          handleChange("budget", Array.from(keys)[0] as string)
                        }
                        variant="bordered"
                        classNames={{ trigger: "border-divider" }}
                      >
                        {budgets.map((b) => (
                          <SelectItem key={b.key}>{b.label}</SelectItem>
                        ))}
                      </Select>

                      <Textarea
                        label="Tell us about your project"
                        placeholder="Describe your project, goals, timeline, or any specific requirements…"
                        value={form.message}
                        onValueChange={(v) => handleChange("message", v)}
                        isRequired
                        minRows={4}
                        variant="bordered"
                        classNames={{ inputWrapper: "border-divider" }}
                      />

                      <Button
                        type="submit"
                        color="primary"
                        size="lg"
                        isLoading={loading}
                        className="w-full rounded-full font-bold text-base mt-1"
                        endContent={!loading && <Send size={16} />}
                      >
                        {loading ? "Sending…" : "Send Message"}
                      </Button>
                    </form>
                  </>
                )}
              </div>

            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
