import gsap from "gsap"
import CustomEase from "gsap/CustomEase"

export const animatePageIn = () => {
  console.log('Page animation triggered')
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerThree = document.getElementById("banner-3")
    if (bannerOne && bannerTwo && bannerThree ) {
      const tl = gsap.timeline()
  
      tl.set([bannerThree,bannerTwo,bannerOne], {
        y:'-100%',
      
      });
      [bannerThree, bannerTwo, bannerOne].forEach((banner, index) => {
        tl.to(banner, {
          y: "100%",
          ease: "power3.out",
          duration: 1.7,
          onComplete: () => {
            banner.style.display = "none"; // Hides the banner when its animation is done
          },
        }, index * 0.2);
      })
      
    }
  }

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