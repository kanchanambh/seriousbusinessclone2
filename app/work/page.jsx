"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import BannerSection from "../components/BannerSection";
import { animatePageIn } from "@/utils/animations";
import PageInAnimation from "../components/PageInAnimation";
import WorkSection from "../components/WorkSection";

const WorkPage = () => {
  const textRef = useRef(null);
  const blackDivRef = useRef(null);
  const blackTextRef = useRef(null);
  const contentDivRef = useRef(null);

  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <BannerSection />
      <PageInAnimation />
      <main className="root-section">
        <section className="nav">
          <div className="nav__links">
            <div
              className="nav__links__wrapper once-inview"
              data-anim="show"
              data-anim-stagger=".15"
              data-cursor="none"
            >
              <a
                className="nav__link nav__link--active show"
                href="#featured"
                aria-label="Featured Works"
              >
                <span className="nav__link__anim">
                  <span
                    className="nav__big split-text typeface-hover"
                    data-component="hover-typeface"
                    data-typeface="nib-pro"
                  >
                    <span className="parts-root">
                      <span className="part-container">
                        <span className="word">Featured</span>
                      </span>
                    </span>
                    <span className="nib-pro parts-root-clone">
                      <span className="part-container">
                        <span className="word">Featured</span>
                      </span>
                    </span>
                  </span>
                  <span className="nav__small">06</span>
                </span>
              </a>

              <a
                className="nav__link show"
                href="#all-work"
                aria-label="All Works"
              >
                <span className="nav__link__anim">
                  <span
                    className="nav__big split-text typeface-hover"
                    data-component="hover-typeface"
                    data-typeface="nib-pro"
                  >
                    <span className="parts-root">
                      <span className="part-container">
                        <span className="word">All</span>
                      </span>
                      <span className="part-container">
                        <span className="word" >
                          projects
                        </span>
                      </span>
                    </span>
                    <span className="nib-pro parts-root-clone">
                      <span className="part-container">
                        <span className="word" >
                          All
                        </span>
                      </span>
                      <span className="part-container">
                        <span className="word">
                          projects
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="nav__small">20</span>
                </span>
              </a>

              <a
                className="nav__link show"
                href="#industries"
              >
                <span className="nav__link__anim">
                  <span
                    className="nav__big split-text typeface-hover"
                    data-component="hover-typeface"
                    data-typeface="nib-pro"
                  >
                    <span className="parts-root" >
                      <span
                        className="part-container">
                        <span className="word">
                          Industries
                        </span>
                      </span>
                    </span>
                    <span
                      className="nib-pro parts-root-clone">
                      <span
                        className="part-container">
                        <span className="word">
                          Industries
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="nav__small">09</span>
                </span>
              </a>
            </div>
          </div>

       
   
        </section>

        <WorkSection />
      </main>
    </>
  );
};

export default WorkPage;
