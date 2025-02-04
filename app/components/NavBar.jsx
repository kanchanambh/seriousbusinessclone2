"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const rightIconRef = useRef(null);
  const rightIconSVGRef = useRef(null);
  const leftIconRef = useRef(null);
  const leftIconSVGRef = useRef(null);
   

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { opacity: 1, width: "100%", display: "flex", x: 0, duration: 0.4, y: 0 });
      gsap.to(toggleRef.current, { opacity: 0, duration: 0.1, display :"none" });
      gsap.to(rightIconRef.current, { opacity: 0,   width: "0px", height: "0px", duration: 0.3,  });
      gsap.to(rightIconSVGRef.current, { opacity: 0,  width: "0px", height: "0px", duration: 0.3, });
      gsap.to(leftIconRef.current, { opacity: 1,   width: "50px", height: "50px", duration: 0.3,  });
      gsap.to(leftIconSVGRef.current, { opacity: 1,  width: "30px", height: "30px", duration: 0.3, });

    } else {
      gsap.to(menuRef.current, { opacity: 0, width: "0%", duration: 0.3, x: 0, onComplete: () => (menuRef.current.style.display = "none") });
      gsap.to(toggleRef.current, { opacity: 1, display: "flex", duration: 0.3 });
      gsap.to(rightIconRef.current, { opacity: 1,   width: "50px", height: "50px", duration: 0.3,  });
      gsap.to(rightIconSVGRef.current, { opacity: 1,  width: "30px", height: "30px", duration: 0.3, });
      gsap.to(leftIconRef.current, { opacity: 0,   width: "0px", height: "0px", duration: 0.3,  });
      gsap.to(leftIconSVGRef.current, { opacity: 0,  width: "0px", height: "0px", duration: 0.3, });
    }
  }, [isMenuOpen]);
  return (
    <div className="navbar"
   
    >
      <div className="navbar__wrapper">
        <a
          className="navbar__work button"
          href="#contact"
          aria-label="Let’s work"
        >
          <div className="navbar__work__text rounded-bg">Let’s work</div>
          <div className="navbar__work__smile circle-bg">
            <svg viewBox="0 0 70 60">
              <use href="/smile-ic.svg#ic"></use>
            </svg>
          </div>
        </a>

        <div className="navbar__menu-container">
          <div ref={leftIconRef} className="navbar__circle navbar__circle--left circle-bg" >
            <svg ref={leftIconSVGRef} className="navbar__circle__arrow" viewBox="0 0 22 16" >
              <use href="/arrow.svg#arrow"></use>
            </svg>
          </div>

          <div className="navbar__menu-content"
           onMouseEnter={() => setIsMenuOpen(true)}
           onMouseLeave={() => setIsMenuOpen(false)}
          >
          <div ref={toggleRef} className="navbar__toggle rounded-bg split-text">
              <span className="parts-root">
                <span className="part-container">
                  <span className="word">
                    Menu
                  </span>
                </span>{" "}
              </span>
            </div>

            <div ref={menuRef} className="navbar__menu hidden opacity-0">
            <div className="navbar__menu__content">
              <div className="navbar__menu__container">
                <nav className="navbar__menu__links">
                  {["Work", "About", "Services", "Blog"].map((item, index) => (
                    <a key={index} className="split-text" href="#" target="_self">
                      <span className="parts-root">
                        <span className="part-container">
                          <span className="word">{item}</span>
                        </span>
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          </div>

      

          <div ref={rightIconRef}  className="navbar__circle navbar__circle--right circle-bg" >
            <svg ref={rightIconSVGRef} className="navbar__circle__arrow" viewBox="0 0 22 16" >
              <use href="/arrow.svg#arrow"></use>
            </svg>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default NavBar;
