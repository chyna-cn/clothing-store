import React from "react";
import { AiOutlineCreditCard, AiOutlineShopping } from "react-icons/ai";
const Products = ()=>{
    return(
        <div>
            <div className="flex  flex-row justify-center mt-12">
                <div className=" flex flex-row  h-36 w-72 ">
                    <div className=" ml-2 lg:ml-1 mt-16"><AiOutlineShopping size={25}/></div>
                    <div className="flex flex-col mt-16 ml-3 lg:ml-6">
                        <span className="text-poppins text-xs">Free Worldwide Shipping</span>
                        <span className="text-poppins text-[8px] font-thin">on all orders above $300</span>
                    </div>

                </div>

                <div className="flex flex-row border-l h-36 w-72">
                <div className="ml-5 lg:ml-10 mt-16"><AiOutlineCreditCard size={25}/></div>
                    <div className="flex flex-col mt-16 ml-2 lg:ml-6">
                        <span className="text-poppins text-xs">100% Secure Checkout</span>
                        <span className="text-poppins text-[8px] font-thin">Paypal / Visa / Master Card</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Products