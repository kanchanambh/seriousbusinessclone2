import gsap from "gsap"


export const animatePageIn = () => {
  return new Promise((resolve) => {
    console.log("Page animation triggered");

    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");

    if (bannerOne && bannerTwo && bannerThree) {
      const tl = gsap.timeline();

      // Set initial positions
      tl.set([bannerThree, bannerTwo, bannerOne], {
        y: "-100%",
      });

      // Create an array to track animation completion
      const animations = [bannerThree, bannerTwo, bannerOne].map(
        (banner, index) =>
          new Promise((animResolve) => {
            tl.to(
              banner,
              {
                y: "100%",
                ease: "power3.out",
                duration: 1.7,
                onComplete: () => {
                  banner.style.display = "none"; // Hide the banner after animation
                  animResolve(); // Resolve individual animation promise
                },
              },
              index * 0.2
            );
          })
      );

      // Resolve the main promise when all animations are complete
      Promise.all(animations).then(resolve);
    } else {
      resolve(); // Resolve immediately if no banners exist
    }
  });
};
  export const animatePageOut = (href, router) => {
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerThree = document.getElementById("banner-3")
  
    if (bannerOne && bannerTwo && bannerThree ) {
      const tl = gsap.timeline()
  
      tl.set([bannerOne, bannerTwo, bannerThree], {
        yPercent: -100,
      }).to([bannerOne, bannerTwo, bannerThree], {
        yPercent: 0,
        stagger: 0.2,
        onComplete: () => {
          router.push(href)
        },
      })
    }
    //router.push(href)
  }