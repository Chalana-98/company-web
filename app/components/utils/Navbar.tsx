"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Modal from "./ViewContactUs";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Listen for the global "open-contact-modal" event fired from any page button
  useEffect(() => {
    const handler = () => openModal();
    globalThis.addEventListener("open-contact-modal", handler);
    return () => globalThis.removeEventListener("open-contact-modal", handler);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/Services" },
    { label: "Projects", href: "/Projects" },
    { label: "Process", href: "/Process" },
  ];

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Container to center the floating pill */}
      <div className="fixed top-6 inset-x-0 mx-auto w-full max-w-[1000px] px-4 z-50 flex justify-center">
        <nav className="w-full flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-black/50 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full">
          
          {/* Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 text-foreground flex flex-col gap-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>
            <Link href="/" className="select-none flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                CX
              </span>
              <span className="font-extrabold text-foreground text-xl tracking-tighter hidden md:block">
                CoreDigit X
              </span>
            </Link>
          </div>

          {/* Desktop Links (Centered) */}
          <div className="hidden sm:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <Link
                key={`${item.label}-${index}`}
                href={item.href}
                className="relative px-5 py-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-foreground transition-all rounded-full hover:bg-zinc-100 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             <div className="hidden sm:block pl-2 border-l border-divider/50">
               <ThemeSwitcher />
             </div>
             <Button
               color="primary"
               onPress={openModal}
               className="font-bold px-6 py-2 h-auto rounded-full bg-foreground text-background hover:scale-105 transition-transform shadow-lg hidden sm:flex"
             >
               Let&apos;s Talk
             </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl sm:hidden pt-32 px-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <Link
                key={`${item.label}-${index}`}
                className="w-full text-foreground/80 text-3xl font-bold hover:text-primary transition-colors py-4 border-b border-divider/30 flex justify-between items-center"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <span className="text-xl opacity-50">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-lg font-medium">Theme</span>
            <ThemeSwitcher />
          </div>
          <Button
             color="primary"
             onPress={() => { openModal(); setIsMenuOpen(false); }}
             className="w-full font-bold py-6 text-lg rounded-full mt-4"
           >
             Contact Us Now
           </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
