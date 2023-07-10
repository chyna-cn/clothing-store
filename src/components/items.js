import React, {useState} from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import cloth from "./images/cloth.jpg";
import cloth1 from "./images/cloth1.jpg";
import cloth2 from "./images/cloth2.jpg";
import cloth3 from "./images/cloth3.jpg"

const Items = () => {
    const [current, setCurrent] = useState(0);

    const images = [ 
        cloth,
        cloth1,
        cloth2,
        cloth3
       
    ];
    const next = ()=>{
        setCurrent(current === images.length - 1 ? 0 : current + 1 )
    }

    const previous = ()=>{
        setCurrent(current === 0 ? images.length -1 : current - 1 )
    }

  return (
    <div>
      <div className="text-center mt-20 lg:mt-40">
        <h1 className="text-2xl font-poppins">Latest in</h1>
        <p className="text-xs font-poppins font-light mt-4">
          Shop the freshest drop on StyleAmakaCo
        </p>
      </div>

      <div className="flex flex-row mx-5 lg:hidden">
        <AiOutlineArrowLeft size={25} className="my-auto" onClick={previous}/>
      <div className="grid grid-rows-1 mx-12 mt-8">
        {
            images.map ((image, index) => 
                current === index && (
                    <div key = {index}>
                       <img src={image} alt="dress"/>
                    </div>
                )
                )



        };
                
        </div>

        <AiOutlineArrowRight size={25} className="my-auto" onClick={next}/>
      </div>



      <div className="hidden lg:flex flex-row mt-10 mx-14 justify-around">
       
        <div>
          <img src={cloth} alt="dress"></img>
        </div>
        <div>
          <img src={cloth} alt="dress"></img>
        </div>
        <div>
          <img src={cloth} alt="dress"></img>
        </div>
        <div>
          <img src={cloth} alt="dress"></img>
        </div>
      
      </div>
    </div>
  );
};

export default Items;
