"use client"
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full relative border-t border-divider/50 bg-background/60 backdrop-blur-3xl mt-24">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="mx-auto w-full max-w-screen-xl p-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col gap-2">
            <Link href="/">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 text-3xl tracking-tighter cursor-pointer">
                CoreDigit X
              </span>
            </Link>
            <p className="text-foreground/60 text-sm max-w-sm mt-2 font-medium">
              Transforming innovative ideas into seamless digital experiences through cutting-edge technology and design excellence.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-divider flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                title="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-divider flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                title="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-divider flex items-center justify-center text-foreground/40 hover:text-emerald-500 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300"
                title="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
              {/* Email */}
              <a href="mailto:hello@coredigitx.com"
                className="w-9 h-9 rounded-full border border-divider flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                title="Email">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="sr-only">Email</span>
              </a>
            </div>
            
            <span className="text-sm text-foreground/50 tracking-wide font-medium">
              © {new Date().getFullYear()} CoreDigit X™. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
