import React from "react";

export default function Categories(){
    return (
        <>
          <div className="w-[90%] my-9 flex flex-col mx-auto relative 2xl:w-[1536px]">
            <div className="flex justify-center items-center gap-4 mt-5 lg:mt-8">
                <h1 className="text-3xl font-serif font-medium">Categories</h1>
            </div>
            <div className="min-[1285px]:flex flex-wrap mt-3 gap-2 justify-center grid grid-flow-col">
               <div className="flex flex-col p-6 w-72">
                    <img src="Forest.jpeg" /><button className="mt-2 font-serif font-light text-gray-600">Jungle Plants</button>
                </div>
                <div className="flex flex-col p-6 w-72">
                    <img src="Outdoor.jpeg" /><button className="mt-2 font-serif font-light text-gray-600">Outdoor Plants</button>
                </div>
                <div className="flex flex-col p-6 w-72">
                    <img src="Bedroom.jpeg" /><button className="mt-2 font-serif font-light text-gray-600">Bedroom Plants</button>
                </div>
                <div className="flex flex-col p-6 w-72">
                    <img src="Indoor.jpeg"/><button className="mt-2 font-serif font-light text-gray-600">Indoor Plants</button>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="flex justify-center items-center text-2xl font-serif text-gray-700">Love and work are to people , </h2>
                <h2 className="flex justify-center items-center text-2xl font-serif text-gray-700">what water and sunlight are to plants . </h2>
            </div>
            </div>
        </>
    );
}