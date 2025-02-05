import Image from "next/image";

const BannerSection = () => {
    return (
        <div>
        <div
          id="banner-1"
          className=" bg-red-600 z-[502] absolute top-0 left-0 h-[100vh] right-0 translate-y-[100%]"
        />
        <div
          id="banner-2"
          className=" bg-blue-700 z-[501] absolute top-0 left-0 h-[100vh] right-0 translate-y-[100%]"
        />
        <div
          id="banner-3"
          className=" bg-pink-500 z-[500] absolute top-0 left-0 h-[100vh] right-0 translate-y-[100%]"
        />
      
    
      </div>
    );
  };
  
  export default BannerSection;
  