"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { opacity: 1, display: "flex", x: 0, duration: 0.3, y: 0 });
      gsap.to(toggleRef.current, { opacity: 0, duration: 0.3, onComplete: () => (toggleRef.current.style.display = "none") });
    } else {
      gsap.to(menuRef.current, { opacity: 0, duration: 0.3, x: 50, onComplete: () => (menuRef.current.style.display = "none") });
      gsap.to(toggleRef.current, { opacity: 1, display: "flex", duration: 0.3 });
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
          {/* <div className="navbar__circle navbar__circle--left circle-bg" >
            <svg className="navbar__circle__arrow" viewBox="0 0 22 16" >
              <use href="/arrow.svg#arrow"></use>
            </svg>
          </div> */}

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

          {isMenuOpen && (

          <div className="navbar__circle navbar__circle--right circle-bg" >
            <svg className="navbar__circle__arrow" viewBox="0 0 22 16" >
              <use href="/arrow.svg#arrow"></use>
            </svg>
          </div>
             )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
