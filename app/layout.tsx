"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { useState } from "react";
import Modal from "./components/utils/contactModal/ViewContactUs";
import Navbar from "./components/utils/Navbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar handleShowModal={handleShowModal}/>
        {children}
        {showModal &&  <Modal handleShowModal={handleShowModal} />}
        
       
      </body>
    </html>
  );
}
