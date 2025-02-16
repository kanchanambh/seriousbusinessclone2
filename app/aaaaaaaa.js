import Image from 'next/image'
import { useEffect, useRef } from "react";
import gsap from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function WaterStickVideo() {
  const textRef = useRef(null);

  useEffect(() => {

    const stickVideo_section = document.querySelectorAll(".StickVideo_section")
    const section_container = document.querySelectorAll(".StickVideo_section_container")
    
    const lines = textRef.current.querySelectorAll(".animated-line");


    gsap.fromTo(
      section_container,
      { opacity:0 ,

      },
        {
            opacity:1,
            duration: 0.5,
            scrollTrigger: {
                trigger: stickVideo_section,
                start: 'top 50%',
                end: 'top 20%',
                scrub: true,
                markers: true,
                toggleActions: 'play play reverse reverse'
            },
    })
    const bg = "#000";
    const fg =  "#ff5733";

    lines.forEach((line, index) => {
      
      const text = line.innerText.trim();
      line.innerHTML = "";

      // Split text into spans
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.classList.add("char");
        span.textContent = char === " " ? "\u00A0" : char;
        line.appendChild(span);
      });

 
    });

    gsap.fromTo(
      document.querySelectorAll(".char"),
      { color: bg },
      {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: stickVideo_section,
          start: "top 0%",
          end: "top -50%",
          scrub: true,
         // markers: true,
          pin:true,
          toggleActions: "play play reverse reverse",
      
        },
       
      }
    );

     // Add scale and opacity animation for .animated-line
  gsap.fromTo(
    lines,
    {
      scale: 0, // Start with scale 0
      opacity: 0, // Start with opacity 0
    },
    {
      scale: 1, // Scale to normal size
      opacity: 1, // Fade to opacity 1
      duration: 0.6,
      stagger: 0.1, // Add stagger to the lines
      scrollTrigger: {
        trigger: stickVideo_section,
        start: "top 0%",
        end: "top -50%",
        scrub: true,
        pin: true,
        toggleActions: "play play reverse reverse",
      },
    }
  );

   
  }, [])
  

  return (
    <div className='StickVideo_section '>
      <div className='StickVideo_section_container'>
        <div className='canvas__holder'>
           <Image className='WaterStickVideo_canvas01'
                    src="/team-working-1024x683.webp"
                     alt="The Fos"
                      width={1024}
                      height={576}
                      />
        </div>
        <div className=' video01__stage__out'>
          <div ref={textRef} className='reveal-text WaterStickVideo_splitedTextHolder__ZVds6 video01__stage__in loler'>
   
                <div className='animated-line'> sofi measures the impact </div>
                 <div className='animated-line'> of plants to improve the </div>
                <div className='animated-line'> way we feel & sleep </div>

         
           
          </div>
        </div>
      </div>
    </div>
  )
}






import Image from 'next/image'
import React from 'react'

function WorkSection() {
  return (
    <section className="works pt-32 w-[80%]">
        <h2 className="works__title mixed-title once-inview" >
    <span className="mixed-title__main">Where to inject Mounjaro&#8482;</span>
    <span className="mixed-title__sub">Injected same day once per week</span>
  </h2>

    <section className="works__list">

              
                <div className="works__list__item">
                <figure className="works__list__item__figure">
                    <Image
                    src="/workimage01.jpg"
                    width={1024}
                    height={576}
                    className="works__list__item__image wp-post-image"
                    alt="Next Button"
                 
                    />
                </figure>
                    
                <article className="works__list__item__article once-inview" data-anim="lines" data-anim-delay=".25" >
                        <h3 className="works__list__item__title underline-def">
                            <span>Choose an area: abdomen or upper legs.</span>
                            </h3>

                        

                    </article></div>
                  





                   
                <div className="works__list__item">
                <figure className="works__list__item__figure">
                    <Image
                    src="/workimage02.jpg"
                    width={1024}
                    height={576}
                    className="works__list__item__image wp-post-image"
                    alt="Next Button"
                 
                    />
                </figure>
                    
                <article className="works__list__item__article once-inview" data-anim="lines" data-anim-delay=".25" >
                        <h3 className="works__list__item__title underline-def">
                            <span>Select an injection site to start injecting. Switch ijection sites weekly.</span>
                            </h3>

            
                    </article></div>
                 




                 
                <div className="works__list__item">
                <figure className="works__list__item__figure">
                    <Image
                    src="/workimage03.jpg"
                    width={1024}
                    height={576}
                    className="works__list__item__image wp-post-image"
                    alt="Next Button"
                 
                    />
                </figure>
                    
                <article className="works__list__item__article once-inview" data-anim="lines" data-anim-delay=".25" >
                        <h3 className="works__list__item__title underline-def">
                            <span>Divide chosen area into four sections witch will be your injection sites.</span>
                            </h3>

                        
                       
                    </article></div>
                 





                   
                <div className="works__list__item">
                <figure className="works__list__item__figure">
                    <Image
                    src="/workimage04.jpg"
                    width={1024}
                    height={576}
                    className="works__list__item__image wp-post-image"
                    alt="Next Button"
                 
                    />
                </figure>
                    
                <article className="works__list__item__article once-inview" data-anim="lines" data-anim-delay=".25" >
                        <h3 className="works__list__item__title underline-def">
                            <span>Inject at least one finger width away from the last injection.
                                </span></h3>

                 
                    </article></div>
                


                        


            </section>

          

    </section>
  )
}

export default WorkSection