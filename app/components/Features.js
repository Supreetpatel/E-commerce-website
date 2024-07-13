import React from "react";

export default function Features(){
    return(
        <>
        <div className="bg-white text-gray-900 font-serif mt-36 max-w-xl px-20 relative">
            <h1 className="text-3xl font-medium">Featured</h1>
            <span className="text-gray-600 leading-normal mt-3 text-sm"><p className="mr-40">Our plants are 100% organic,</p><p className="mr-40">we don't use pesticides or</p><p className="mr-40">harmful chemicals.</p></span>
            <span className="text-gray-600 leading-normal mt-3 text-sm"><p className="mr-40">But please don't eat them</p></span>
            <div className="mt-10">
                <button className="px-4 py-3 text-gray-500 text-sm border-[1.5px] border-[#D9D9D9] bg-white hover:bg-gray-100 shadow-md">Shop all Favourites</button>
            </div>
        </div>
        <div className="">
            <img src="" className=""/>
            <img src="" className=""/>
        </div>  
        </>
    );
}