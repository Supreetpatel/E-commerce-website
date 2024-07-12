import React from "react";

export default function Features(){
    return(
        <>
        <div className="bg-white text-gray-900 font-serif mt-36 max-w-xl px-20 relative">
            <h1 className="text-3xl font-medium">Features</h1>
            <p className="text-gray-600 leading-normal"><span className="mr-40"></span><span></span></p>
            <div className="mt-10">
                <button className="px-4 py-3 text-gray-500 text-sm border-[1.5px] border-[#D9D9D9] bg-white hover:bg-gray-100 shadow-md">Shop all Favourites</button>
            </div>
        </div>
        <div className="flex justify-center mt-12">
            <img src="/" className="xl:absolute bottom-10 right-10 h-[460px] w-[450px]"/>
            <img src="/" className="xl:absolute bottom-10 right-10 h-[460px] w-[450px]"/>
        </div>
        </>
    );
}