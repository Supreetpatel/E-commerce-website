import React from "react";

export default function Categories(){
    return (
        <>
          <div className="w-[90%] my-9 flex flex-col mx-auto relative 2xl:w-[1536px]">
            <div className="flex justify-center items-center gap-4 mt-5 lg:mt-8">
                <h1 className="text-3xl font-serif font-medium">Categories</h1>
            </div>
            <div className="min-[1285px]:flex flex-wrap mt-8 gap-6 justify-center">
               <div className="flex flex-col p-6 w-72">
                    <img src="Forest.jpeg" /><h3 className="mt-2 font-serif font-light text-gray-600">Jungle Plants</h3>
                </div>
                <div className="flex flex-col p-6 w-72">
                    <img src="Outdoor.jpeg" /><h3 className="mt-2 font-serif font-light text-gray-600">Outdoor Plants</h3>
                </div>
                <div className="flex flex-col p-6 w-72">
                    <img src="Bedroom.jpeg" /><h3 className="mt-2 font-serif font-light text-gray-600">Bedroom Plants</h3>
                </div>
                <div className="flex flex-col p-6 w-72">
                    <img src="Indoor.jpeg"/><h3 className="mt-2 font-serif font-light text-gray-600">Indoor Plants</h3>
                </div>
            </div>
            <div>
                <h1 className="">Love and work are to people what water and sunshine to plants </h1>
            </div>
            </div>
        </>
    );

}