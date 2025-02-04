import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="flex items-center w-full h-full justify-start mt[-100px] relative z-[1]">
      <section className="Hero_hero__EW3HD hero">
        <div className="Hero_heroHolder__dKj3Y">
          <div className="Hero_heroTitle__dzWAx">
            <h1 className="hero__title">Mounjaro <br/> injections</h1>
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
