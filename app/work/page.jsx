"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react";
import BannerSection from "../components/BannerSection"; 
import { animatePageIn } from "@/utils/animations";
import PageInAnimation from "../components/PageInAnimation";

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
    
   <PageInAnimation/>
      <div
    
      >
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
       
      >
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
        <h1 className="text-4xl uppercase pb-5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit urna, iaculis sed fermentum non, finibus vitae arcu.</h1>
      </div>
   
    </>
  );
};

export default WorkPage;
