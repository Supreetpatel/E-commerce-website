import React from "react";

export default function Hero() {
  return (
    <>
    <div className="bg-white text-gray-900 font-serif mt-40 max-w-xl px-20 relative">
      <h1 className="text-5xl font-normal leading-normal">Find perfect plants for your home</h1>
      <p className="text-gray-800 leading-normal"> Beautiful plants that encourage you to get creative.</p>
      <div className="mt-10">
        <button className="bg-black py-3 px-8 text-white hover:bg-gray-900">SHOP NOW</button>
      </div>
    </div>
    <div className="flex justify-center mt-12">
    <img src="/image.jpeg" className="xl:absolute bottom-0 right-20"/>
    </div>
    
  </>
  );
}