import React from "react";

const Allsemester = () => {
  return (
    <div className="pt-24"> {/* Padding applied here */}
      <div className="relative flex items-center justify-center h-screen md:p-10 ">
        {/* Overlay Images - Background Layer */}
        <img
          src="/image1.png"
          alt="Image 1"
          className="absolute z-0 transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
          style={{
            left: "11.5vw",  // Use vw for responsiveness
            bottom: "12.5vh", // Use vh for responsiveness
          }}
        /> 
        <img
          src="/image2.png"
          alt="Image 2"
          className="absolute z-0 transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
          style={{
            left: "16vw",
            top: "7.5vh",
          }}
        />
        <img
          src="/image3.png"
          alt="Image 3"
          className="absolute z-0 transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
          style={{
            left: "31.3vw",
            bottom: "65vh",
          }}
        />
        <img
          src="/image4.png"
          alt="Image 4"
          className="absolute z-0 transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
          style={{
            right: "31vw",
            bottom: "64vh",
          }}
        />
        <img
          src="/image5.png"
          alt="Image 5"
          className="absolute z-0 transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
          style={{
            right: "18.7vw",
            top: "5vh",
          }}
        />
        <img
          src="/image6.png"
          alt="Image 6"
          className="absolute z-0  transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
          style={{
            right: "12.5vw",
            bottom: "11.5vh",
          }}
        />
        
        {/* Main Image - Top Layer */}
        <img
          src="/allsemesters.png"
          alt="All Semester"
          className="relative z-10 max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Allsemester;
