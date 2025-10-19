"use client";

import React from "react";

const MyCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden carousel-wrapper">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dpb42mz2q/image/upload/v1760882736/538049844_18283377064262339_389714377949078840_n_nwe8my.jpg"
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none" /> */}

      {/* Overlay Content */}
      {/* <div className="relative z-10 flex flex-col items-start justify-center h-full p-20 text-left text-white phoneP">
        <p className="text-[14px] mt-2 gothic mb-3 text-white">
          U.S imported supplements
        </p>
        <h1 className="font-bold uppercase text-white bannertitle">
          Wellness<br /> Vitality Advice
        </h1>

        <a href="/shop" style={{ padding: "1em" }} className="mt-10 myButton">
          Shop Now
        </a>
      </div> */}

      {/* Force square height on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .carousel-wrapper {
            height: 100vw !important; /* ALWAYS square */
          }
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
