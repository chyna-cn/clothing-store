import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import logo from "./images/logo.jpg"
 const Footer = ()=>{
    return(
        <div className="mt-12">
            <div className="bg-brown h-64 flex flex-col justify-center space-y-5">
                
                <h1 className="font-poppins text-white text-center text-[10px] lg:text-xs lg:tracking-widest">SUBSCRIBE TO OUR NEWSLETTER & GET 5% OFF YOUR FIRST ORDER</h1>
                <div className=" flex flex-row justify-center space-x-3">
                <input type="text" placeholder = "Enter your email" className="bg-brown border outline-none border-white w-[54%] lg:w-[25%] text-white text-[8px] pl-3"/>
                <input type="submit" value = "SUBSCRIBE" className="bg-mustard text-white text-[8px] h-7 w-20"/>
               </div>

            </div>

            <div className="flex flex-row ml-10 gap-[150px] lg:ml-12 lg:gap-[230px] mt-12 mb-[30px] lg:mb-[100px]">
                <div className="hidden lg:flex flex-col space-y-4">
                    <img src={logo} alt = "logo"/>
                    <div className="">
                        <div className="flex flex-row space-x-2 ">
                            <AiOutlineMail size={15} />
                            <span className="text-[10px] font-poppins font-light">info@styleamakaco.com</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-5">
                    <h1 className="text-xs font-poppins font-light">INFORMATION</h1>
                    <ul className="list-none text-[10px] space-y-3 font-light">
                        <li>Contact us</li>
                        <li>FAQs</li>
                        <li>Shipping & Refunds</li>
                        <li>Terms of use</li>
                    </ul>
                </div>

                <div className=" flex flex-col space-y-5">
                <h1 className="text-xs font-poppins font-light">SOCIALS</h1>
                <div className="flex flex-row space-x-3">
                    <AiOutlineFacebook size={15}/>
                    <AiOutlineInstagram size={15}/>
                </div>
            </div>
            </div>

            

        </div>
    )
 }
 export default Footer