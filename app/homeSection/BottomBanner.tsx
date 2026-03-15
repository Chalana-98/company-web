"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Banner2 from '../../public/bannersvg2.svg';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { openContactModal } from '../components/utils/openContactModal';

function BottomBanner() {
    return (
        <section className='w-full max-w-screen-xl mx-auto px-6 lg:px-12 py-24'>
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col xl:flex-row items-center justify-between rounded-[3rem] border border-white/10 dark:border-white/5 shadow-2xl overflow-hidden bg-zinc-950 dark:bg-zinc-950/80"
            >
                {/* Animated Glowing Orbs */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute -top-32 -left-32 w-96 h-96 bg-primary/40 rounded-full blur-[100px]"
                />
                <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-cyan-500/30 rounded-full blur-[120px]"
                />

                <div className="relative z-10 flex flex-col justify-center p-10 md:p-16 lg:p-20 w-full xl:w-3/5 text-center xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block mx-auto xl:mx-0 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Like what you&apos;ve seen?</span>
                    </motion.div>
                    
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]">
                        Level up your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Ideas</span><br className="hidden md:block"/> with CoreDigit X.
                    </h3>
                    
                    <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto xl:mx-0 font-medium">
                        Ready to transform your business with cutting-edge digital solutions? Let&apos;s build something extraordinary together.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                        <Button 
                            color="primary" 
                            size="lg"
                            onPress={openContactModal}
                            className="font-bold px-10 py-7 text-lg shadow-xl shadow-primary/40 rounded-full hover:scale-105 transition-transform"
                        >
                            Get In Touch
                        </Button>
                        <Link href="/Projects">
                          <Button 
                              variant="flat" 
                              size="lg" 
                              className="font-bold px-10 py-7 text-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full hover:scale-105 transition-transform"
                          >
                              View Portfolio
                          </Button>
                        </Link>
                    </div>
                </div>

                <div className="relative z-10 flex justify-center items-center w-full xl:w-2/5 p-10 xl:p-0">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <Image src={Banner2} alt="Get in touch banner" className='w-full max-w-[350px] drop-shadow-2xl' />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default BottomBanner;