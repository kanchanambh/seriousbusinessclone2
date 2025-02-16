import Image from 'next/image'
import { useEffect, useRef } from "react";
import gsap from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function WaterStickVideo() {
  const textRef = useRef(null);

  useEffect(() => {

    const stickVideo_section = document.querySelectorAll(".StickVideo_section")
    const section_container = document.querySelectorAll(".StickVideo_section_container")
    const reveal_text = document.querySelectorAll(".reveal-text")
    const lines = textRef.current.querySelectorAll(".animated-line");
    const canvas__holder = document.querySelectorAll(".canvas__holder");
    const WaterStickVideo_canvas01 = document.querySelectorAll(".WaterStickVideo_canvas01");
    const WaterStickVideo_canvas01_text = document.querySelectorAll(".WaterStickVideo_canvas01_text");
    

     const tl = gsap.timeline({
    scrollTrigger: {
      trigger: stickVideo_section,
      start: "top 0%",
      end: "top -155%",
      scrub: true,
      pin: true,
      toggleActions: "play play reverse reverse",
    },
  });

    gsap.fromTo(
      section_container,
      { opacity:0 ,
        y:50

      },
        {
            opacity:1,
            y:0,
            duration: 0.5,
            scrollTrigger: {
                trigger: stickVideo_section,
                start: 'top 30%',
                end: 'top 10%',
                scrub: true,
              //  markers: true,
                toggleActions: 'play play reverse reverse'
            },
    })
    const bg = "#333";
    const fg = "#fff";
  
    // Split text into spans
    lines.forEach((line, index) => {
      const text = line.innerText.trim();
      line.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.classList.add("char");
        span.textContent = char === " " ? "\u00A0" : char;
        line.appendChild(span);
      });
    });
  
    // Add the animations to the timeline
  
    // Animate text color change (chars) and scale/opacity of lines at the same time
    tl.fromTo(
      document.querySelectorAll(".char"),
      { color: bg },
      {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
      }
    )
    .fromTo(
      reveal_text,
      { scale: 1, opacity: 1 },
      {
        scale: 1.3,
        opacity: 0,
        duration: 0.6,
      },
    // Starts the scale/opacity animation 0.3s after the text color change
    )
    .to(
      canvas__holder,
      { width: "25vw", 
        height: "110vh", 
        duration: 0.6,
      }, "<0.3")
      .to(
        WaterStickVideo_canvas01,
        { opacity:1,
          duration: 1,
        }, "<0.3")
        .to(
          canvas__holder,
          { width: "100vw", 
            height: "130vh", 
            borderRadius: "0px",

            duration: 1,
          }, "<0.3")
          .fromTo(WaterStickVideo_canvas01_text,{
            opacity : 0,

          },{
            opacity:1,
          duration: 0.3,
          })

   
  }, [])
  

  return (
    <div className='StickVideo_section '>
      <div className='StickVideo_section_container'>
        <div className='canvas__holder'>
          <div className='WaterStickVideo_canvas01_text'>
            <p>Mounjaro mimics hormones that naturally occur in the gut after eating, 
              called incretins. Incretins have many functions, such as:</p>
          <ul>
            <li>slowing down the emptying of the stomach</li>
            <li>sending signals to your brain that you’re full after eating</li>
            <li> increasing insulin levels</li>
          </ul>
          </div>
         
           <Image className='WaterStickVideo_canvas01'
                    src="/team-working-1024x683.jpg"
                     alt="The Fos"
                      width={1024}
                      height={576}
                      />
        </div>
        <div className=' video01__stage__out'>
          <div ref={textRef} className='reveal-text WaterStickVideo_splitedTextHolder__ZVds6 video01__stage__in loler'>
   
                <div className='animated-line'> Mounjaro mimics hormones that naturally occur </div>
                 <div className='animated-line'> in the gut after eating, called incretins.</div>
                <div className='animated-line'>  Incretins have many functions such as:</div>

         
           
          </div>
        </div>
      </div>
    </div>
  )
}
