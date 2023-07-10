import React, { useState } from "react";
import logo from "./images/logo.jpg";
import {
   AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const Header = () => {
   const [nav, setNav] = useState(false);
  return (
    <div>
      <div className="bg-mustard pt-1 md:py-2">
        <h1 className="text-center font-poppins text-white text-[7px] tracking-widest md:text-[9px] md:tracking-[0.3em] ">
          FREE SHIPPING ON ORDERS OVER $300
        </h1>
      </div>

      {/*layer 2*/}
      {nav? <div className=" bg-black/80 w-full fixed h-screen z-10 top-0 left-0"></div> : " "}
     
      <div className={nav ? "fixed top-0 left-0 w-[200px] h-screen bg-white z-10 duration-300" : " fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300"}>
         <AiOutlineClose className={"text-xl absolute right-4 top-4 cursor-pointer"} onClick ={()=>setNav(!nav)}/>
         <div className="">
          <img src={logo} alt="logo" className="w-1/2 mt-4" />
        </div>
       <div className="ml-4 mt-8">
        <select name="currency" className="border text-xs p-1 font-thin">
            <option value="dollar">USD $</option>
            <option value="naira">NGN #</option>
            <option value="cad">CAD $</option>
            <option value="euro">EUR €</option>
          </select>
          </div>

          <div className="flex flex-col justify-center space-y-8 mt-8 ml-4">
            <span className="text-xs font-poppins font-thin">READY TO WEAR</span>
            <span className="text-xs font-poppins font-thin">ACCESSORIES</span>
            <span className="text-xs font-poppins font-thin">MAKÁ MEN</span>
            <span className="text-xs font-poppins font-thin">HOME GOODS</span>
            <span className="text-xs font-poppins font-thin">COLLECTIONS</span>
      </div>

      </div>

      <div className="flex flex-row justify-between mx-2 mt-2  md:mx-16 md:mt-8">
        <div className="mt-3 md:hidden">
          <AiOutlineMenu className={"text-xl cursor-pointer"} onClick={()=>setNav(!nav)}/>
        </div>
        <div className="hidden md:block mt-4">
          <select name="currency" className="border border-gray-300 text-xs p-1 font-thin">
            <option value="dollar">USD $</option>
            <option value="naira">NGN #</option>
            <option value="cad">CAD $</option>
            <option value="euro">EUR €</option>
          </select>
        </div>

        <div className="">
          <img src={logo} alt="logo" className="w-1/2 mx-24" />
        </div>

        <div className="flex flex-row space-x-2 md:space-x-3 mt-4">
          <AiOutlineSearch className={"text-lg font-extralight lg:text-xl "} />
          <AiOutlineUser className={"text-lg lg:text-xl"} />
          <div className="relative h-[28px] w-[28px]">
            {" "}
            <span className="absolute top-[-15px] right-[10px] border rounded-full z-[1] text-[10px] w-3 text-white bg-black text-center">
              0
            </span>
            <AiOutlineShoppingCart className={"text-lg lg:text-xl"} />
          </div>
        </div>
      </div>


      <div className="hidden md:flex flex-row justify-center space-x-24 mt-10">
            <span className="text-xs font-poppins font-thin hover:scale-y-125">READY TO WEAR</span>
            <span className="text-xs font-poppins font-thin hover:scale-y-125">ACCESSORIES</span>
            <span className="text-xs font-poppins font-thin hover:scale-y-125">MAKÁ MEN</span>
            <span className="text-xs font-poppins font-thin hover:scale-y-125">HOME GOODS</span>
            <span className="text-xs font-poppins font-thin hover:scale-y-125">COLLECTIONS</span>
      </div>

    </div>
   
  );
};
export default Header;
