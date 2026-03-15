import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // Add Providers import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoreDigit X | Web Experts",
  description: "Transform your vision into reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen text-foreground bg-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
