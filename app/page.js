"use client"
import gsap from "gsap"
import BannerSection from "./components/BannerSection";  
import { animatePageIn , animatePageOut} from "@/utils/animations";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from 'lenis/react'
import Image from 'next/image'
import WorkSection from "./components/WorkSection";
import PageInAnimation from "./components/PageInAnimation";
import TrandingSection from "./components/TrandingSection";
import BrandsSection from "./components/BrandsSection";
import HeroSection from "./components/HeroSection";


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
	animatePageIn();



	videoRefs.forEach((ref) => {
		if (ref.current) {
		  ref.current.load();
		  ref.current
			.play()
			.catch((error) => console.warn('Error playing video:', error));
		}
	  
  }
  
)

const speeds = [3, 2.5, 2, 1.5];
const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {

      gsap.to(section, {
		y: -200 * speeds[index], 
        ease: "none", 
        scrollTrigger: {
          trigger: section,
          start: "top 30%", 
		  endTrigger: "#section4",
		  end: "bottom 60%", 
          scrub: true, 
          pin: true, 
          pinSpacing: false, 
         //  markers: true, 
		  
        },
      });
    });

	ScrollTrigger.refresh(); 

	return () => {
	 ScrollTrigger.getAll().forEach(trigger => trigger.kill());
   };  


}, []);




   
  return (
    <> 
    <ReactLenis root options={lenisOptions}>
	<BannerSection />
      <div className=" w-full">
		<PageInAnimation/>
        <div className="wrapper">
          <main  className="root-section">
         
		 <HeroSection/>
			
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
					

					

		<div className="sectionmain-section">
 
			<div className="sectionmain full-services_list relative">
					<div className="section full-services_item" id="section1">
						<header className="full-services_item_header">
						<h2>Visual Identity</h2>
						</header>
					
						<div className="full-services_item_wrapper">
							<did className="full-services_item_texts">	
									<p className="full-services__item__text-mid" data-anim-delay=".2">
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
							</did>
							<did className="full-services-video">
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
												src="/video4.mp4"
												className="w-full h-full"
												></video>
												</div>
								</figure>
							</did>
						</div>
					</div>
				<div className="section full-services_item" id="section2">
				<header className="full-services_item_header">
						<h2>Visual Identity</h2>
						</header>
					
						<div className="full-services_item_wrapper">
							<did className="full-services_item_texts">	
									<p className="full-services__item__text-mid" data-anim-delay=".2">
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
							</did>
							<did className="full-services-video">
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
												src="/video2.mp4"
												className="w-full h-full"
												></video>
												</div>
								</figure>
							</did>
						</div>
				</div>
				<div className="section full-services_item" id="section3"><header className="full-services_item_header">
						<h2>Visual Identity</h2>
						</header>
					
						<div className="full-services_item_wrapper">
							<did className="full-services_item_texts">	
									<p className="full-services__item__text-mid" data-anim-delay=".2">
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
							</did>
							<did className="full-services-video">
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
							</did>
						</div></div>
				<div className="section full-services_item" id="section4"><header className="full-services_item_header">
						<h2>Visual Identity</h2>
						</header>
					
						<div className="full-services_item_wrapper">
							<did className="full-services_item_texts">	
									<p className="full-services__item__text-mid" data-anim-delay=".2">
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
							</did>
							<did className="full-services-video">
								<figure className="full-services_item_figure flex items-center justify-center" data-anim="" >
												<div className="full-services__item__image" data-component="lazy-video"
												style={{ width: dimensions2.width, height: dimensions2.height }}
												>
												<video 
												ref={videoRefs[3]}
												preload="none"
												playsInline
												muted
												loop
												src="/video2.mp4"
												className="w-full h-full"
												></video>
												</div>
								</figure>
							</did>
						</div></div>
			</div>
		</div>
		</div>
		</section>
		<WorkSection/>
		<TrandingSection/>
		<BrandsSection/>
								{/* <div className="sectionmain-sectionnew">
					
								<div className="sectionmainnew relative">
									<div className="sectionnew" id="section14">Section 1</div>
									<div className="sectionnew" id="section24">Section 2</div>
									<div className="sectionnew" id="section34">Section 3</div>
									<div className="sectionnew" id="section44">Section 4</div>
								</div>
								</div> */}

          </main>

        </div>
    </div>
  </ReactLenis>
  </>
  )
}
