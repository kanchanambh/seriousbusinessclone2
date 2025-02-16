"use client";
import gsap from "gsap";
import BannerSection from "./components/BannerSection";
import { animatePageIn, animatePageOut } from "@/utils/animations";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import WorkSection from "./components/WorkSection";
import PageInAnimation from "./components/PageInAnimation";
import TrandingSection from "./components/TrandingSection";
import BrandsSection from "./components/BrandsSection";
import HeroSection from "./components/HeroSection";
import WaterStickVideo from "./components/WaterStickVideo";
import AboutUsSection from "./components/AboutUsSection";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const [dimensions, setDimensions] = useState({ width: "80%", height: "80%" });
  const [dimensions2, setDimensions2] = useState({
    width: "80%",
    height: "80%",
  });

  const sphere1Ref = useRef(null);
  const sphere2Ref = useRef(null);
  const trackerRef = useRef(null);
  const videoRef = useRef(null);
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const heroReelWrapperRef = useRef(null);
  const heroReelContainerRef = useRef(null);

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const runAnimation = async () => {
      await animatePageIn(); // Wait for banners to finish
      setIsAnimating(false); // Show content after animation
    };

    runAnimation();
    gsap.fromTo(
      "#hero-main",
      { opacity: 0, y: 220 }, // Start invisible & slightly lower
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power3.out" } // Fade in smoothly
    );

    videoRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.load();
        ref.current
          .play()
          .catch((error) => console.warn("Error playing video:", error));
      }
    });

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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <BannerSection />
      <PageInAnimation />
      <div className=" w-full">
        <div className="wrapper">
          <main className="root-section">
            <HeroSection />
            <WaterStickVideo />
            <AboutUsSection />

            {/* <section className="facts_section w-full z-10">
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


            </section> */}

            <section className="services w-full relative">
              <div className="full-services__wrapper">
                <div className="sectionmain-section">
                  <div className="sectionmain full-services_list relative">
                    <div className="section full-services_item" id="section1">
                      <div className="full-services_item_wrapper">
                        <div className="full-services_item_texts">
                          <header className="full-services_item_header">
                            <h2>Worried about self-injection?</h2>
                          </header>
                          <p
                            className="full-services__item__text-mid"
                            data-anim-delay=".2"
                          >
                            <span>
                              "Self-injecting medication may be an uncomfortable
                              idea for many people. But, Mounjaro injections are
                              not the same as ones that might be used for things
                              like vaccinations. Mounjaro comes in an
                              easy-to-use injection pen, which isn’t the same as
                              using a standard injection needle. Mounjaro uses a
                              much smaller needle than the one for vaccinations
                              and the liquid isn’t pushed by hand."{" "}
                              <b>– Dr Babak Ashrafi.</b>
                            </span>
                          </p>
                        </div>
                        <div className="full-services-video">
                          <figure
                            className="full-services_item_figure flex items-center justify-center"
                            data-anim=""
                          >
                            <div
                              className="full-services__item__image"
                              data-component="lazy-video"
                              style={{
                                width: dimensions2.width,
                                height: dimensions2.height,
                              }}
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
                        </div>
                      </div>
                    </div>

                    <div className="section full-services_item" id="section2">
                      <div className="full-services_item_wrapper">
                        <div className="full-services_item_texts">
                          <header className="full-services_item_header">
                            <h2>Where should I inject Mounjaro?</h2>
                          </header>
                          <p
                            className="full-services__item__text-mid"
                            data-anim-delay=".2"
                          >
                            <span>
                              Mounjaro can be injected either in the abdomen or
                              thigh. Select an injection site that you feel most
                              comfortable with. Switch injection sites weekly
                              and divide the chosen area into four sections
                              which will be your injection sites. Inject at
                              least one finger width away from the last
                              injection. If injecting in the abdomen, inject at
                              least 5cm away from the navel.
                            </span>
                          </p>
                        </div>
                        <div className="full-services-video">
                          <figure
                            className="full-services_item_figure flex items-center justify-center"
                            data-anim=""
                          >
                            <div
                              className="full-services__item__image"
                              data-component="lazy-video"
                              style={{
                                width: dimensions2.width,
                                height: dimensions2.height,
                              }}
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
                        </div>
                      </div>
                    </div>

                    <div className="section full-services_item" id="section3">
                      <div className="full-services_item_wrapper">
                        <div className="full-services_item_texts">
                          <header className="full-services_item_header">
                            <h2>How long do I have to stay on Mounjaro?</h2>
                          </header>
                          <p
                            className="full-services__item__text-mid"
                            data-anim-delay=".2"
                          >
                            <span>
                              How long you can stay on Mounjaro depends on how
                              much weight you need to lose to achieve a healthy
                              BMI and if you need help to maintain that weight.
                              If you are not able to lose weight on Mounjaro, a
                              doctor can recommend alternatives for you.
                            </span>
                          </p>
                        </div>
                        <div className="full-services-video">
                          <figure
                            className="full-services_item_figure flex items-center justify-center"
                            data-anim=""
                          >
                            <div
                              className="full-services__item__image"
                              data-component="lazy-video"
                              style={{
                                width: dimensions2.width,
                                height: dimensions2.height,
                              }}
                            >
                              <video
                                ref={videoRefs[2]}
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
                      </div>
                    </div>

                    <div className="section full-services_item" id="section4">
                      <div className="full-services_item_wrapper">
                        <div className="full-services_item_texts">
                          <header className="full-services_item_header">
                            <h2>What happens when you stop taking Mounjaro?</h2>
                          </header>
                          <p
                            className="full-services__item__text-mid"
                            data-anim-delay=".2"
                          >
                            <span>
                              When you stop taking Mounjaro for weight loss, you
                              may regain the weight you have lost if you don’t
                              stick to your weight loss plan. When you stop the
                              medication, you will get your appetite back, so
                              you won’t feel full for as long after a meal. This
                              means you might be tempted to eat more than you
                              did when taking Mounjaro, possibly causing you to
                              gain weight.
                            </span>
                          </p>
                        </div>
                        <div className="full-services-video">
                          <figure
                            className="full-services_item_figure flex items-center justify-center"
                            data-anim=""
                          >
                            <div
                              className="full-services__item__image"
                              data-component="lazy-video"
                              style={{
                                width: dimensions2.width,
                                height: dimensions2.height,
                              }}
                            >
                              <video
                                ref={videoRefs[3]}
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <WorkSection />
            <TrandingSection />
            <BrandsSection />
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
    </>
  );
}
