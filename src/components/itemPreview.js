import React from "react";
import { } from "react-router-dom";
import Clutch from "./images/clutch.jpg";

const ItemPreview = ()=>{
    return(
        <div className="flex ml-6 mt-10 space-x-10 lg:flex-row lg:justify-center lg:mt-20 lg:space-x-16">
            <div className="">
                <img src={Clutch} alt = "clutch" className=" w-[300px] h-[270px] lg:w-[268px] lg:h-[441px]"/>
            </div>

            <div className="lg:flex flex-col mt-6 mr-6 lg:mt-20 w-[268px]">
               <h1 className=" text-sm  lg:text-xl font-poppins lg:mt-4">The Ultimate Clutch</h1>
                <h1 className="text-xl font-poppins"> - $117.00 </h1>
                <span className="text-[7px] font-thin font-poppins">One clutch to rule them all</span>
                <div className="mt-10">
                    <button className="border bg-black text-white text-[8px] w-[40px] h-10">1</button>
                    <button className="border bg-black text-white text-[8px] w-[110px] h-10">ADD TO CART</button>
                </div>

                <span className="mt-3"><a href = "/product" className="text-[8px] underline text-mustard">view product details</a></span>

            </div>


        </div>
    )
}

export default ItemPreview