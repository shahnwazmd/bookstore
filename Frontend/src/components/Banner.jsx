import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
            Your Gateway to Knowledge{" "}
              <div className="text-blue-500">get set study</div>
            </h1>
            <p className="text-sm md:text-xl">
            Access a curated collection of books and study materials exclusively for registered users. Sign up, log in, and explore educational resources tailored for your learning needs—all through a secure and user-friendly platform. Join today to start your journey!
            </p>
            
              
  
          </div>
        
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
