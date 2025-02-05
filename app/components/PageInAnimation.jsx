
"use client"
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import Image from 'next/image';
function PageInAnimation() {

    //  const textRef = useRef(null); 
      const blackDivRef = useRef(null);
      const blackTextRef = useRef(null);

      useEffect(() => {
       
    
        const t2 = gsap.timeline({ delay: 0.1});
    
        // Add animations to the timeline in sequence
        t2.to(
          blackDivRef.current,
          {
            y: "0%", // Move into the viewport
            duration: 0.8,
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
            blackTextRef.current,
            { y: 400, scale: 1.5 , display: "none"}, // Start position and scale
            {
              y: 0, // Move to center
              scale: 1, // Scale down
              duration: 1.5,
              ease: "power3.out",
              onStart: () => {
                blackTextRef.current.style.display = "flex";
              },
            },
            "<"
          );
    
    }, []);
  return (
    <>
    	  <div  ref={blackDivRef} className="  absolute right-0 h-[100vh] top-0 left-0  bg-black items-start justify-center z-10 translate-y-[-100%]"> </div>
  
        
               <Image className=" w-[250px] h-auto z-20 absolute top-0 right-1/2 translate-x-1/2 translate-y-1/2 "  src="/mounjaro_logo.svg"
              
               ref={blackTextRef}
               alt='ddd'
              width={30} height={30} />
    </>
  )
}

export default PageInAnimation