"use client"
import gsap from "gsap"
import BannerSection from "./components/BannerSection";  
import { animatePageIn } from "@/utils/animations";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from 'lenis/react'
import Image from 'next/image'

export default function Home() {

  

  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };

  gsap.registerPlugin(ScrollTrigger);


  const [dimensions, setDimensions] = useState({ width: "80%", height: "80%" });
  const [dimensions2, setDimensions2] = useState({ width: "80%", height: "80%" });


  const sphere1Ref = useRef(null);
  const sphere2Ref = useRef(null);
  const trackerRef = useRef(null)
  const videoRef = useRef(null)
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const heroReelWrapperRef = useRef(null);
  const heroReelContainerRef = useRef(null);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
	videoRefs.forEach((ref) => {
		if (ref.current) {
		  ref.current.load();
		  ref.current
			.play()
			.catch((error) => console.warn('Error playing video:', error));
		}
	  
  }

  
)}, []);

useEffect(() => {
    const sections = document.querySelectorAll(".section");
	const endPoint = document.getElementById("section4").getBoundingClientRect().bottom;
	// const endPoint = document.getElementById("section4").getBoundingClientRect().bottom + document.querySelector("#section4").offsetHeight ;
	console.log(endPoint)
	const speeds = [3, 2.5, 2, 1.5];
    sections.forEach((section, index) => {

      gsap.to(section, {
		y: -200 * speeds[index], // Scale movement by the speed factor
        ease: "none", // Linear movement for natural scroll effect
        scrollTrigger: {
          trigger: section,
          start: "top 20%", // Animation starts when the section reaches the top of the viewport
		  endTrigger: "#section4", // End based on section4's position
		  end: "bottom 60%", 
          scrub: true, // Smooth animation tied to scroll
          pin: true, // Pin the section while scrolling
          pinSpacing: false, // Prevent spacing issues
          markers: true, // Debug markers to see the triggers
		  
        },
      });
    });
  }, []);


   
  return (
    <> 
    <ReactLenis root options={lenisOptions}>

      <div className=" w-full">
        <div className="wrapper">
          <main className="root-section">
            <section className="hero flex items-center flex-col justify-start relative z-[1]">
                <div  className=" flex relative w-full items-center justify-center h-auto">
                  <h1 className=" text-black text-[50px] font-extrabold ">LOGO SECTION</h1>
                </div>

                <div className="hero_center">

                    <h1 className="mixed-title" data-anim="title">
                      <span className="text-2xl font-normal">Branding and Digital Design</span>
                      <span className="text-2xl font-light">Agency for Startups &amp; Scaleups</span>
                    </h1>

                  <div className="hero_hover">
                  <div ref={trackerRef} className=" tracker" >         
                    <div ref={sphere1Ref} className="sphere1"></div>
                    <div ref={sphere2Ref} className="sphere2"></div>        
                  </div>
                      </div>
	              </div>
                <div className="hero_reel "
                style={{ width: dimensions.width, height: dimensions.height }}
                >
		                <div className="hero_reel_wrapper  once-inview" data-anim="" >
						             
                          <div ref={heroReelContainerRef} 
                          className="hero_reel_container m-0 w-[20%] h-[20%] flex justify-center items-center"
                          
                          >
                            <div className="hero_reel_video"  >
                                <video 
                                ref={videoRef}
                                preload="none"
                                playsInline
                                muted
                                loop
                                src="/video1.mp4"
                                className="w-full h-full"
                                ></video>
                            </div>
                          </div>
									
						          
	                  </div>
	              </div>
                
            </section>
            <section className="facts_section w-full z-10">
              <section className="swiper_section">
              <section className="facts_swiper swiper swiper-initialized swiper-horizontal swiper-backface-hidden once-inview" 
              data-anim="" data-component="serious-facts" >

		<div className="facts_swiper_header">
			<h2 className="facts_swiper_header_title">Serious Facts</h2>

			<div className="facts_swiper_header_paging-info"><span>02</span>/<span>03</span></div>
		</div>

		<h3 className="facts_swiper_title">
			<span className="number">40</span>
			<span className=");">+</span>
		</h3>
		<div className="facts_swiper_wrapper swiper-wrapper">
			
        <div className="facts_swiper_slide " data-title="40+" data-swiper-slide-index="1">
					
          <p className="facts_swiper_slide_text">global media features, including the New York Times, Forbes, TechCrunch, Bloomberg, 
            nd Hypebeast.</p>
				</div></div>

		<div className="facts_swiper_paging">
			<div className="circle-bg button prev-bt" data-cursor="none" data-component="arrow-button">
      <Image src="/nextbtn.svg" alt="Next Button" width={30} height={30} />

			</div>
      <div className="circle-bg button next-bt" data-cursor="none" data-component="arrow-button">

      <Image src="/nextbtn.svg" alt="Next Button" width={30} height={30} />
      
     

			</div>
		</div>

	</section>
              </section>
              <section className="facts_about_section">
              <h2 className="facts__about__title once-inview" data-anim="title" >Crafting premium brands for startups that make people smile</h2>
                  <div data-anim="fadein-y">

                 <div className="rounded-bg">About us</div>
               </div>
              </section>


            </section>

            		<section className="services w-full relative">
					<div className="full-services__wrapper" >
					<h2 className="full-services__title once-inview" data-anim="words" >Services</h2>
		
					
					<ul className="full-services__list">

					<li className="full-services__item" data-component="service-item" >
					<header className="full-services__item__header">
						<h3 className="full-services__item__title once-inview" data-anim="title" >Brand Strategy</h3>
					</header>
							<article className="full-services__item__info">
									<div className="full-services__item__wrapper">
									<div className="full-services__item__texts">
								<p className="full-services__item__text-mid once-inview" data-anim-delay=".2">
									<span>Its the core of your companys identity. It guides all business decisions, ensuring a consistent and 
										impactful presence in the market.</span></p>
									<p className="full-services__item__text-small once-inview" data-anim="lines" >
										Research &amp; Insights<br/>
										Unique Ways<br/>
										Purpose, Mission, Vision<br/>
										Value Proposition<br/>
										Personality Traits<br/>
										Verbal Identity<br/>
										Naming</p>
											</div>
											<figure className="full-services_item_figure flex items-center justify-center" data-anim="" >
												<div className="full-services__item__image" data-component="lazy-video"
												style={{ width: dimensions2.width, height: dimensions2.height }}
												>
												<video 
												ref={videoRefs[0]}
												preload="none"
												playsInline
												muted
												loop
												src="/video2.mp4"
												className="w-full h-full"
												></video>
												</div>
											</figure>
												</div>
											</article>
									</li>

												<li className="full-services__item" data-component="service-item" >
					<header className="full-services__item__header">
						<h3 className="full-services__item__title once-inview" data-anim="title" >Brand Strategy</h3>
					</header>
							<article className="full-services__item__info">
									<div className="full-services__item__wrapper">
									<div className="full-services__item__texts">
								<p className="full-services__item__text-mid once-inview" data-anim-delay=".2">
									<span>Its the core of your companys identity. It guides all business decisions, ensuring a consistent and 
										impactful presence in the market.</span></p>
									<p className="full-services__item__text-small once-inview" data-anim="lines" >
										Research &amp; Insights<br/>
										Unique Ways<br/>
										Purpose, Mission, Vision<br/>
										Value Proposition<br/>
										Personality Traits<br/>
										Verbal Identity<br/>
										Naming</p>
											</div>
											<figure className="full-services_item_figure flex items-center justify-center" data-anim="" >
												<div className="full-services__item__image" data-component="lazy-video"
												style={{ width: dimensions2.width, height: dimensions2.height }}
												>
												<video 
												ref={videoRefs[1]}
												preload="none"
												playsInline
												muted
												loop
												src="/video3.mp4"
												className="w-full h-full"
												></video>
												</div>
											</figure>
												</div>
											</article>
									</li>
									<li className="full-services__item" data-component="service-item" >
					<header className="full-services__item__header">
						<h3 className="full-services__item__title once-inview" data-anim="title" >Brand Strategy</h3>
					</header>
							<article className="full-services__item__info">
									<div className="full-services__item__wrapper">
									<div className="full-services__item__texts">
								<p className="full-services__item__text-mid once-inview" data-anim-delay=".2">
									<span>Is the core of your identity. It guides all business decisions, ensuring a consistent and 
										impactful presence in the market.</span></p>
									<p className="full-services__item__text-small once-inview" data-anim="lines" >
										Research &amp; Insights<br/>
										Unique Ways<br/>
										Purpose, Mission, Vision<br/>
										Value Proposition<br/>
										Personality Traits<br/>
										Verbal Identity<br/>
										Naming</p>
											</div>
											<figure className="full-services_item_figure flex items-center justify-center" data-anim="" >
												<div className="full-services__item__image" data-component="lazy-video"
												style={{ width: dimensions2.width, height: dimensions2.height }}
												>
												<video 
												ref={videoRefs[2]}
												preload="none"
												playsInline
												muted
												loop
												src="/video4.mp4"
												className="w-full h-full"
												></video>
												</div>
											</figure>
												</div>
											</article>
									</li>	
								</ul>
							</div>

						</section>

						<div className="sectionmain-section">
 
					<div className="sectionmain relative">
					<div className="section" id="section1">

					<div className="full-services__item" data-component="service-item" >
					<header className="full-services__item__header">
						<h3 className="full-services__item__title once-inview" data-anim="title" >Brand Strategy</h3>
					</header>
							<article className="full-services__item__info">
									<div className="full-services__item__wrapper">
									<div className="full-services__item__texts">
								<p className="full-services__item__text-mid once-inview" data-anim-delay=".2">
									<span>Its the core of your companys identity. It guides all business decisions, ensuring a consistent and 
										impactful presence in the market.</span></p>
									<p className="full-services__item__text-small once-inview" data-anim="lines" >
										Research &amp; Insights<br/>
										Unique Ways<br/>
										Purpose, Mission, Vision<br/>
										Value Proposition<br/>
										Personality Traits<br/>
										Verbal Identity<br/>
										Naming</p>
											</div>
											<figure className="full-services_item_figure flex items-center justify-center" data-anim="" >
												<div className="full-services__item__image" data-component="lazy-video"
												style={{ width: dimensions2.width, height: dimensions2.height }}
												>
												<video 
												ref={videoRefs[0]}
												preload="none"
												playsInline
												muted
												loop
												src="/video2.mp4"
												className="w-full h-full"
												></video>
												</div>
											</figure>
												</div>
											</article>
									</div>
					</div>
					<div className="section" id="section2">Section 2</div>
					<div className="section" id="section3">Section 3</div>
					<div className="section" id="section4">Section 4</div>
					</div>
					</div>


								<div className="sectionmain-sectionnew">
					
								<div className="sectionmainnew relative">
									<div className="sectionnew" id="section14">Section 1</div>
									<div className="sectionnew" id="section24">Section 2</div>
									<div className="sectionnew" id="section34">Section 3</div>
									<div className="sectionnew" id="section44">Section 4</div>
								</div>
								</div>

          </main>

        </div>
    </div>
  </ReactLenis>
  </>
  )
}
