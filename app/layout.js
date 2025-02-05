"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { animatePageIn } from "@/utils/animations"; // Ensure correct path
import gsap from "gsap";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [isAnimating, setIsAnimating] = useState(true);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <main  className="wrapper ">
         
          <NavBar />

      
        
          {children}
          <Footer/>
        </main>
        
      </body>
    </html>
  );
}
