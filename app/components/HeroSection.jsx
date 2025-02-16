import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HeroSection() {

  const HeroSectionRef = useRef(null)


  useEffect(() => {
    if (HeroSectionRef.current) {
      gsap.to(HeroSectionRef.current, {
        y: 200, 
        ease: "none", 
        scrollTrigger: {
          trigger: HeroSectionRef.current,
          start: "11% 10%",   
          end: "bottom 0%", 
          scrub: 0.1,
          pin: true, 
        },
      });
    }
  }, []);

      
  return (
    <div id="hero-main" ref={HeroSectionRef} className="flex items-center w-full h-full justify-start mt[-100px] relative z-[-1] opacity-0">
      <section className="Hero_hero__EW3HD hero">
        <div className="Hero_heroHolder__dKj3Y">
          <div className="Hero_heroTitle__dzWAx">
            <h1 className="hero__title">What is  Mounjaro</h1>
            <p>Mounjaro is a prescription-only treatment for weight loss and type 2 diabetes. It comes as a weekly self-injectable pen and contains the active ingredient tirzepatide. It works by suppressing appetite, making you feel less hungry.</p>
            <div className="Hero_heroImg__XUqEV hero__img">
                     <Image
                                    src="/hand_white_pod.webp"
                                    alt="The Fos"
                                    width={1024}
                                    height={576}
                                  />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
