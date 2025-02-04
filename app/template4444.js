"use client"

import React, { useEffect } from 'react'
import  {animatePageIn}  from "@/utils/animations"

function template( {children}) {

    useEffect(() => {
        animatePageIn()
      }, [])

  return (
    <div>
    <div
      id="banner-1"
      className="min-h-screen bg-red-900 z-10 fixed top-0 left-0 w-screen"
    />
    <div
      id="banner-2"
      className="min-h-screen bg-red-800 z-20 fixed top-0 left-0 w-screen"
    />
    <div
      id="banner-3"
      className="min-h-screen bg-red-600 z-20 fixed top-0 left-0 w-screen"
    />
    <div
      id="banner-4"
      className="min-h-screen bg-red-500 z-40 fixed top-0 left-0 w-screen"
    />
    {children}
  </div>
  )
}

export default template



   <section className="hero flex items-center flex-col justify-start relative z-[1]">
               

                <div  className="hero_center">

                    <h1 className="mixed-title" data-anim="title">
                      <span className="text-4xl font-normal">FOR ADULTS WITH TYPE 2 DIABETES</span>
                      <span className="text-6xl font-bold">Mounjaro is proven to help lower A1C*</span>
                    </h1>

                  <div   className="hero_hover">
                  <div ref={trackerRef} className="tracker"  >         
                    <div ref={sphere1Ref} className="sphere1"></div>
                    <div ref={sphere2Ref} className="sphere2"></div>        
                  </div>
                      </div>
                </div>
          

          <div ref={heroReelWrapperRef} className="hero_reel_wrapper flex items-end w-[90%] h-[85%] mb-10 ml-10"
            style={{
              margin: 'auto', // Set margin to auto to center the div horizontally
              padding:"50px"
            }}
            
            >


              <div ref={heroReelContainerRef} className="hero_reel_container w-[20%] h-[20%] flex justify-center items-center m-auto">
                  <div className="hero_reel_video"  >
                    <video 
                    ref={videoRef}
                    preload="none"
                    playsInline
                    muted
                    loop
                    src="/video1.mp4"
                    className="w-full h-full"
                    ></video>
                  </div>
                </div>
            </div>
                  
            </section>