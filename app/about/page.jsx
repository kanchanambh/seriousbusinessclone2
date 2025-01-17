"use client"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react";
import BannerSection from "../components/BannerSection"; 
import { animatePageIn } from "@/utils/animations";
import PageInAnimation from "../components/PageInAnimation";

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
      <BannerSection /> <div className="content">
   
      <PageInAnimation/>
      <div >
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
      </div>
      <div
        ref={contentDivRef}
        className=" bg-red-500"
      >
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iabus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectSed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscingsed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipisciurna, iaculis sed fermentum non, finibus vitae arcu.</h1>
      </div>
      <footer>
      <h2 ref={textfootRef}
        className={isVisible ? "footer-text visible" : "footer-text"}>
        This is the Footer Text Animation
      </h2>
    </footer>
  </div>
  </>
  )
}
  export default AboutPage