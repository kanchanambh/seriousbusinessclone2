import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutUsSection() {
  const textRef01 = useRef(null);
  const textRef02 = useRef(null);

  useEffect(() => {
    const sicky_AboutUs_Section = document.querySelectorAll(
      ".sicky_AboutUs_Section"
    );
    const stick_circleBackground = document.querySelectorAll(
      ".Stick_circleBackground"
    );
    const text_paragraph_bottom_01 = document.querySelectorAll(
      ".text_paragraph_bottom_01"
    );
    const text_paragraph_top_01 = document.querySelectorAll(
      ".text_paragraph_top_01"
    );
    const text_paragraph_bottom_02 = document.querySelectorAll(
      ".text_paragraph_bottom_02"
    );
    const text_paragraph_top_02 = document.querySelectorAll(
      ".text_paragraph_top_02"
    );

    const feature__one__divider_01 = document.querySelectorAll(
      ".feature__one__divider_01"
    );

    const feature__one__divider_02 = document.querySelectorAll(
      ".feature__one__divider_02"
    );
    const feature__one__stage = document.querySelectorAll(
      ".feature__one__stage"
    );
    const feature__two__stage = document.querySelectorAll(
      ".feature__two__stage"
    );
    
    const feature__one__dot = document.querySelectorAll(
      ".feature__one__dot"
    );
    

    
    const lines01 = textRef01.current;
    const lines02 = textRef02.current;

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: sicky_AboutUs_Section,
        start: "top 0%",
        end: "top -255%",
        scrub: 1,
        pin: true,
        toggleActions: "play play reverse reverse",
        markers: true,
      },
    });

    const text = lines01.innerText.trim();
    lines01.innerHTML = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.classList.add("charabout");
      span.textContent = char === " " ? "\u00A0" : char;
      lines01.appendChild(span);
    });

    gsap.fromTo(
      document.querySelectorAll(".charabout"),
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        scrollTrigger: {
          trigger: sicky_AboutUs_Section,
          start: "top 40%",
          end: "top 20%",
          scrub: true,

          toggleActions: "play play reverse reverse",
        },
      }
    );

    t2.to(lines01, {
      x: "-102%",
      duration: 1,
    })
      .fromTo(
        text_paragraph_top_01,
        {
          y: "-50",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 0.2,
        },
        "<"
      )
      .fromTo(
        text_paragraph_bottom_01,
        {
          y: "50",
          opacity: 0,
        },

        {
          y: "0",
          opacity: 1,
          duration: 0.2,
        },
        "<"
      )
      .to(
        stick_circleBackground,
        {
          scale: 1.1,
          duration: 1,
        },
        "<0.4"
      )
      .to(
        text_paragraph_top_01,
        {
          y: "-50",
          opacity: 0,
          duration: 0.2,
        },
        "<"
      )
      .to(
        text_paragraph_bottom_01,
        {
          y: "50",
          opacity: 0,
          duration: 0.2,
        },
        "<"
      )
      .to(
        lines02,
        {
          x: "-200%",
          duration: 1,
        },
        "<0.4"
      )
      .fromTo(feature__one__dot,{
          opacity:0,
      },{
        opacity:1,
        duration:0.5
      },
    "<")
      .fromTo( feature__one__divider_01 , {
        scaleX: 0,

      },{
        scaleX: 1,
        duration:0.5

      },"<")
      .fromTo( feature__one__divider_02 , {
        scaleX: 0,

      },{
        scaleX: 1,
        duration:0.5

      },"<")
      .fromTo(["svg.feature__element.feature__one__stage", 
        "h2.feature__element.feature__one__stage", 
        "p.feature__element.feature__one__stage"],{
          y: 150, 
        }, { 
      y: 0, 
      duration: 0.3, 
      ease: "power2.out"
      },
    "<")
    .fromTo(["svg.feature__element.feature__two__stage", 
      "h2.feature__element.feature__two__stage", 
      "p.feature__element.feature__two__stage"],{
        y: 150, 
      }, { 
    y: 0, 
    duration: 0.3, 
    ease: "power2.out"
    },
  "<")
    .fromTo(["svg.feature__element.feature__one__stage", 
      "h2.feature__element.feature__one__stage", 
      "p.feature__element.feature__one__stage"],{
        y: 0, 
      }, { 
    y: 150, 
    duration: 0.3, 
    ease: "power2.out"
    },
  "<1")
  .fromTo(["svg.feature__element.feature__two__stage", 
    "h2.feature__element.feature__two__stage", 
    "p.feature__element.feature__two__stage"],{
      y: 0, 
    }, { 
  y: 150, 
  duration: 0.3, 
  ease: "power2.out"
  },
  "<")
.fromTo( feature__one__divider_01 , {
  scaleX: 1,

},{
  scaleX: 0,
  duration:0.1

},"<")
.fromTo( feature__one__divider_02 , {
  scaleX: 1,

},{
  scaleX: 0,
  duration:0.1

},"<")
.fromTo(feature__one__dot,{
  opacity:1,
},{
opacity:0,
duration:0.1
},
"<0.1")
      // .fromTo(
      //   text_paragraph_top_02,
      //   {
      //     y: "-50",
      //     display: "none",
      //     opacity: 0,
      //   },
      //   {
      //     y: "0",
      //     opacity: 1,
      //     display: "grid",
      //     duration: 0.2,
      //   },
      //   "<"
      // )
      // .fromTo(
      //   text_paragraph_bottom_02,
      //   {
      //     y: "50",
      //     display: "none",
      //     opacity: 0,
      //   },

      //   {
      //     y: "0",
      //     opacity: 1,
      //     display: "grid",
      //     duration: 0.2,
      //   },
      //   "<"
      // )
      // .to(stick_circleBackground, {
      //   opacity: 0,
      //   duration: 0.05,
      // });
  }, []);

  return (
    <section className="sicky_AboutUs_Section">
      <div className="text_container">
        <div className="text_container_holder">
          <div className="text_paragraph_top_01">
            <p className="stick__paragraph__one">
              a BMI (body mass index) of 30 kg/m² or over (obese)
            </p>
          </div>

          <div className="text_paragraph_title_01">
            <div className="stick__black__title__holder">
              <h2 ref={textRef01}>Who is eligible for Mounjaro?</h2>
            </div>
            <div className="stick__white__title__holder">
              <h2 ref={textRef02}>Mounjaro self-injection</h2>
            </div>
          </div>
          <div className="text_paragraph_bottom_01">
            <p className="stick__paragraph__one">
              a BMI between 27 and 30 kg/m² (overweight), and a weight-related
              health condition such as high cholesterol, high blood pressure,
              pre-diabetes or heart problems
            </p>
          </div>
        </div>
        <div className="text_container_holder_02">
          <article className="stick__feature__one">
            <div className="Stick_stckFeatureElements__Mbtar">
              <div className="Stick_iconHolder__bX2Ma">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="feature__element feature__one__stage"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.42464V23.3327C0 25.5418 1.79086 27.3327 4 27.3327H14.6667C16.8758 27.3327 18.6667 25.5418 18.6667 23.3327V7.42464C18.6667 5.2155 16.8758 3.42464 14.6667 3.42464L13.0667 3.42464V2.66602C13.0667 1.56145 12.1712 0.666016 11.0667 0.666016H7.6C6.49543 0.666016 5.6 1.56145 5.6 2.66602V3.42464H4C1.79086 3.42464 0 5.2155 0 7.42464ZM3.00391 22.2337C3.00391 23.3383 3.89934 24.2337 5.00391 24.2337H13.6628C14.7673 24.2337 15.6628 23.3383 15.6628 22.2337V15.9993C15.6628 14.8948 14.7673 13.9993 13.6628 13.9993H5.00391C3.89934 13.9993 3.00391 14.8948 3.00391 15.9993V22.2337Z"
                    fill="#F7F7F7"
                  ></path>
                </svg>
              </div>

              <div className="Stick_featureDivider__NV_he">
                <div className="Stick_featureDividerLine__snOUK feature__one__divider_01"></div>
                <div className="Stick_featureDividerDot__hxivu feature__one__dot"></div>
              </div>

              <div className="Stick_titleHolder__CkHoN">
                <h2 className="feature__element feature__one__stage">
                How does Mounjaro work in the body?
                </h2>
              </div>

              <div className="Stick_paragraphHolder__z_r9D">
                <p className="feature__element feature__one__stage">
                The active ingredient tirzepatide works by activating the receptors of 2 natural incretin hormones: 
                GIP and GLP-1. Both of these hormones affect your appetite by slowing down the emptying 
                of the stomach after a meal. They also send signals to your brain to reduce your appetite 
                after eating. This action creates a feeling of being full and so makes you feel less hungry, 
                even when you have eaten less, which can aid in weight loss.
                </p>
              </div>
            </div>

            {/* <div className="Stick_stckFeatureElements__Mbtar">
                        <div class="Stick_iconHolder__bX2Ma">
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="feature__element feature__one__stage">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 7.42464V23.3327C0 25.5418 1.79086 27.3327 4 27.3327H14.6667C16.8758 27.3327 18.6667 25.5418 18.6667 23.3327V7.42464C18.6667 5.2155 16.8758 3.42464 14.6667 3.42464L13.0667 3.42464V2.66602C13.0667 1.56145 12.1712 0.666016 11.0667 0.666016H7.6C6.49543 0.666016 5.6 1.56145 5.6 2.66602V3.42464H4C1.79086 3.42464 0 5.2155 0 7.42464ZM3.00391 22.2337C3.00391 23.3383 3.89934 24.2337 5.00391 24.2337H13.6628C14.7673 24.2337 15.6628 23.3383 15.6628 22.2337V15.9993C15.6628 14.8948 14.7673 13.9993 13.6628 13.9993H5.00391C3.89934 13.9993 3.00391 14.8948 3.00391 15.9993V22.2337Z" fill="#F7F7F7">
                              </path></svg>
                          </div>

                          <div className="Stick_featureDivider__NV_he">
                            <div className="Stick_featureDividerLine__snOUK feature__one__divider">
                            </div>
                            <div className="Stick_featureDividerDot__hxivu feature__one__dot">
                            </div>
                          </div>
                            
                          <div className="Stick_titleHolder__CkHoN">
                            <h2 className="feature__element feature__one__stage">personal + portable</h2>
                            </div>
                          
                          <div className="Stick_paragraphHolder__z_r9D">
                            <p className="feature__element feature__one__stage">
                            simple, minimal, pocket-sized, and discrete, with ‘lock’ technology to 
                            prevent accidental sprays, an easy companion anywhere you go
                            </p>
                          </div>
                </div> */}
          </article>
          <article className="stick__feature__two">
            <div className="Stick_stckFeatureElements__Mbtar">
              <div className="Stick_iconHolder__bX2Ma">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="feature__element feature__two__stage"
                >
                 <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7.42464V23.3327C0 25.5418 1.79086 27.3327 4 27.3327H14.6667C16.8758 27.3327 18.6667 25.5418 18.6667 23.3327V7.42464C18.6667 5.2155 16.8758 3.42464 14.6667 3.42464L13.0667 3.42464V2.66602C13.0667 1.56145 12.1712 0.666016 11.0667 0.666016H7.6C6.49543 0.666016 5.6 1.56145 5.6 2.66602V3.42464H4C1.79086 3.42464 0 5.2155 0 7.42464ZM3.00391 22.2337C3.00391 23.3383 3.89934 24.2337 5.00391 24.2337H13.6628C14.7673 24.2337 15.6628 23.3383 15.6628 22.2337V15.9993C15.6628 14.8948 14.7673 13.9993 13.6628 13.9993H5.00391C3.89934 13.9993 3.00391 14.8948 3.00391 15.9993V22.2337Z"
                    fill="#F7F7F7"
                  ></path>
                </svg>
              </div>


              <div className="Stick_featureDivider__NV_he">
                <div
                  className="Stick_featureDividerLine__snOUK feature__one__divider_02"
                ></div>
                <div
                  className="Stick_featureDividerDot__hxivu feature__one__dot"
                ></div>
              </div>


              <div className="Stick_titleHolder__CkHoN">
                <h2
                  className="feature__element feature__two__stage"     
                >
                  How effective is Mounjaro?
                </h2>
              </div>

              <div className="Stick_paragraphHolder__z_r9D">
                <p
                  className="feature__element feature__two__stage"           
                >
                  Mounjaro is an effective treatment for both weight loss and regulating blood sugar 
                  levels. A recent clinical trial has shown that people who used Mounjaro lost up 
                  to 22.5% of their body weight on the highest maintenance dose (15mg tirzepatide,
                   once per week) within 72 weeks.
                </p>
              </div>

            </div>
          </article>
        </div>
        <div className="Stick_circleBackgroundHolder">
          <div className="Stick_circleBackground circle__background"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
