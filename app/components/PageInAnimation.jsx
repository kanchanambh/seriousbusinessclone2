
"use client"
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
function PageInAnimation() {

      const textRef = useRef(null); 
      const blackDivRef = useRef(null);
      const blackTextRef = useRef(null);

      useEffect(() => {
       
    
        const t2 = gsap.timeline({ delay: 0.1});
    
        // Add animations to the timeline in sequence
        t2.to(
          blackDivRef.current,
          {
            y: "0%", // Move into the viewport
            duration: 1,
            ease: "power3.in",
          }
        )
        t2.to(
            blackDivRef.current,
            {
              y: "100%", // Move into the viewport
              duration: 1.5,
              ease: "none",
              onComplete:()=>{
                  blackDivRef.current.style.display = "none";
                }
            }
            
          )
    
          .fromTo(
            textRef.current,
            { y: 430, scale: 1.5}, // Start position and scale
            {
              y: 400, // Move to center
              scale: 1.5, // Scale down
              duration: 0.3,
              ease: "power3.out",
              onStart: () => {
                textRef.current.style.display = "flex";
              },
              
            },
            "-=1.5"
            
          )
          .fromTo(
            textRef.current,
            { y: 400, scale: 1.5}, // Start position and scale
            {
              y: 0, // Move to center
              scale: 1, // Scale down
              duration: 1,
              ease: "power3.out",
              onStart: () => {
                textRef.current.style.display = "flex";
              },
              onComplete:()=>{
                textRef.current.style.display = "none";
              }
            },
            "<0.5"
            
          )
          .fromTo(
            blackTextRef.current,
            { y: 400, scale: 1.5 , display: "none"}, // Start position and scale
            {
              y: 0, // Move to center
              scale: 1, // Scale down
              duration: 1,
              ease: "power3.out",
              onStart: () => {
                blackTextRef.current.style.display = "flex";
              },
              onUpdate: () => {
                if (gsap.getProperty(blackTextRef.current, "y") < 250) {
                  textRef.current.style.display = "none";
                }
              },
            },
            "<"
          );
    
    }, []);
  return (
    <>
    	  <div  ref={blackDivRef} className="  absolute w-screen h-[100vh] top-0 left-0  bg-black items-start justify-center z-10 translate-y-[-100%]"> </div>
    <h1
        ref={blackTextRef}
        className="text-[60px]  fixed top-0 right-1/2 translate-x-1/2 translate-y-1/2 font-bold text-black uppercase z-20"
        style={{ display: "none" }} // Start by hiding the black text
      >
         Main Logo
      </h1>

      {/* White text */}
      <h1
        ref={textRef}
        className="text-[60px] hidden fixed top-0 right-1/2 translate-x-1/2 translate-y-1/2 font-bold text-white uppercase z-30"
      >
        Main Logo
      </h1>
    </>
  )
}

export default PageInAnimation