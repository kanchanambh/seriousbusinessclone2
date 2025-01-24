"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import BannerSection from "../components/BannerSection";
import { animatePageIn } from "@/utils/animations";
import PageInAnimation from "../components/PageInAnimation";
import Image from "next/image";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const textRef = useRef(null);
  const blackDivRef = useRef(null);
  const blackTextRef = useRef(null);
  const contentDivRef = useRef(null);
  const textfootRef = useRef(null);
  useEffect(() => {
    animatePageIn();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        } else {
          setIsVisible(false); // Optional: Remove animation when out of view
        }
      },
      { threshold: 0.8 } // Trigger when 80% of the element is visible
    );

    if (textfootRef.current) observer.observe(textfootRef.current);

    return () => {
      if (textfootRef.current) observer.unobserve(textfootRef.current);
    };
  }, []);

  return (
    <>
      <BannerSection />{" "}
      <div className="content">
        <PageInAnimation />
        <main className="root-section">
          <section className="hero-about">
            <h1 className="hero__title">
              <span data-anim="title" className="once-inview">
                Est<span className="hero__title__dot">.</span> 2015
              </span>
            </h1>

            <h2
              className="hero__subtitle mixed-title once-inview"
              data-anim="title"
              data-anim-delay=".35"
            >
              <span className="mixed-title__main">Crafting the future,</span>
              <span className="mixed-title__sub">
                while having serious fun.
              </span>
            </h2>

            <div className="hero__images"></div>
          </section>

          <section className="perspective">
            <section className="perspective__wrapper">
              <article
                className="perspective__article once-inview"
                data-anim="title"
                data-anim-stagger="18"
              >
                <div className="perspective__text">
                  SERIOUS.BUSINESS{" "}
                  <span className="nib-pro">started in 2015 as a</span> passion
                  project
                  <span className="nib-pro">
                    at Hyper Island, Stockholm by a diverse group of creatives
                    with the goal of re-defining what a serious business is
                    really about:
                  </span>
                  kindness and creativity.
                </div>
                <br />
                <br />
                <div className="perspective__text">
                  <span className="nib-pro">
                    That’s why we craft our future with kindness to
                  </span>{" "}
                  create brands that make people smile.
                </div>
                <br />
                <br />
                <div className="perspective__text">
                  <span className="nib-pro">Today our</span> dream team
                  <span className="nib-pro">
                    of 15 creatives with a global perspective has crafted a new
                    generation of brands with
                  </span>{" "}
                  over 100 change-making startups
                  <span className="nib-pro">
                    in Europe and the Americas – a living proof that it is
                    culture that drives a serious business.
                  </span>
                </div>
              </article>
            </section>

            <figure
              className="perspective__figure"
              data-component="lazy-video"
              data-video="autoplay"
            >
              <Image
                src="/team-working-1024x683.webp"
                alt="Next Button"
                width={1024}
                height={1024}
              />
            </figure>
          </section>

          <section className="secret">
            <section className="secret__list">
              <header className="secret__header secret__item">
                <div className="secret__item__wrapper">
                  <h2
                    className="secret__title once-inview"
                    data-anim="title"                 
                  >
                    We didn’t say it first, but we said it better
                  </h2>
                  <p
                    className="secret__text once-inview"
                    data-anim="lines"
                    data-anim-delay=".4s"
                  >
                    The secret to a great agency? Great people.
                  </p>
                </div>
              </header>

              <article
                className="secret__item secret__item--white once-inview"
              >
                <div className="secret__item__wrapper">
                  <h3 className="secret__item__title secret__item__title--big">
                    32
                  </h3>
                  <p className="secret__item__text">
                    That’s how many languages we speak if we all had 3 beers
                  </p>
                </div>
              </article>
              <article
                className="secret__item secret__item--pink once-inview"
              >
                <div className="secret__item__wrapper">
                  <h3 className="secret__item__title secret__item__title--mid">
                    100%
                    <br />
                    Remote
                  </h3>
                  <p className="secret__item__text">
                    Work is where you are,
                    <br />
                    and there is wifi
                  </p>
                </div>
              </article>
              <article
                className="secret__item secret__item--violet secret__item--center once-inview"
              >
                <div className="secret__item__wrapper">
                  <h3 className="secret__item__title secret__item__title--big">
                    1Y
                  </h3>
                  <p className="secret__item__text">
                    ~1 year for our startups to raise their next funding round
                    after working with us
                  </p>
                </div>
              </article>
              <article
                className="secret__item secret__item--yellow secret__item--center once-inview"
              >
                <div className="secret__item__wrapper">
                  <h3 className="secret__item__title secret__item__title--nib">
                    Team trips,
                    <br />
                    travel budgets,real love,
                    <br />
                    &amp; a flat structure
                  </h3>
                  <p className="secret__item__text">
                    ...a few perks our team enjoy
                  </p>
                </div>
              </article>
              <article
                className="secret__item secret__item--black once-inview"
              >
                <div className="secret__item__wrapper">
                  <h3 className="secret__item__title secret__item__title--small">
                    Culture over everything
                  </h3>
                  <p className="secret__item__text">
                    <s>Sacrificing culture over profit</s>
                    <br />
                    <s>Working overtime</s>
                    <br />
                    <s>Strict Hierarchy</s>
                    <br />
                    <s>Client is always right</s>
                  </p>
                </div>
              </article>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};
export default AboutPage;
