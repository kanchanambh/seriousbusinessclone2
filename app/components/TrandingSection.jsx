import Image from "next/image";
import React from "react";

function TrandingSection() {
  return (
    <div className="trending">
      <header className="trending__header">
        <h2 className="trending__title ">
          What's trending
        </h2>

        <div data-anim="fadein-y" className="fadein-y once-inview">
          <div
            className="trending__header__visit fadein-y"
            data-anim="fadein-y"
          >
            <a
              href="https://serious.business/blog"
              className="button "
              aria-label="What’s trending."
            >
              <div className="circle-bg hide">
                <svg viewBox="0 0 22 16">
                  <use href="/arrow.svg#arrow"></use>
                </svg>
              </div>
              <div className="rounded-bg">What’s trending.</div>
              <div className="circle-bg">
                <svg viewBox="0 0 22 16">
                  <use href="/arrow.svg#arrow"></use>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </header>


      <section className="trending__swiper swiper" data-component="trending">

	<div className="trending__swiper__wrapper swiper-wrapper">

						<a href="#" 
            className="trending__swiper__slide swiper-slide once-inview" 
            aria-label="The Founders’ Guide to Rebranding">
              <div className="trending__swiper__container">
                <figure>

                    <Image
                    src="/trendingimage01.webp"
                    alt="The Founders Guide to Rebranding"
                    width={1024}
                    height={576}
                    className="trending__swiper__image"
                  />
              </figure>

                    <article  className="once-inview">
                      <h3 className="trending__swiper__title underline-def"><span>The Founders’ Guide to Rebranding</span></h3>
                      <p className="trending__swiper__tag">Knowledge</p>
                    </article>
              </div>
        </a>

				<a href="#" 
            className="trending__swiper__slide swiper-slide once-inview" 
            aria-label="The Founders’ Guide to Rebranding">
              <div className="trending__swiper__container">
                <figure>

                    <Image
                    src="/trendingimage02.png"
                    alt="The Founders Guide to Rebranding"
                    width={1024}
                    height={576}
                    className="trending__swiper__image"
                  />
              </figure>

                    <article  className="once-inview">
                      <h3 className="trending__swiper__title underline-def"><span>The Founders’ Guide to Rebranding</span></h3>
                      <p className="trending__swiper__tag">Knowledge</p>
                    </article>
              </div>
        </a>

        <a href="#" 
            className="trending__swiper__slide swiper-slide once-inview" 
            aria-label="The Founders’ Guide to Rebranding">
              <div className="trending__swiper__container">
                <figure>

                    <Image
                    src="/trendingimage03.webp"
                    alt="The Founders Guide to Rebranding"
                    width={1024}
                    height={576}
                    className="trending__swiper__image"
                  />
              </figure>

                    <article  className="once-inview">
                      <h3 className="trending__swiper__title underline-def"><span>The Founders’ Guide to Rebranding</span></h3>
                      <p className="trending__swiper__tag">Knowledge</p>
                    </article>
              </div>
        </a>

		
	</div>

</section>
    </div>
  );
}

export default TrandingSection;
