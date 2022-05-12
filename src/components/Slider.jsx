import {useState} from "react";
import { sliderItems } from "../constants/data";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleSlider = (direction) => {

      if(direction === "right"){
         setSlideIndex(slideIndex > 1 ? 0 : slideIndex + 1)
      }else{
        setSlideIndex(slideIndex === 0 ? sliderItems.length - 1 : slideIndex - 1)
      }

    }

  
    


  return (
    <>
      <div className="container hidden md:flex w-[95vw] h-[60vh] mx-auto mt-[10vh] relative overflow-hidden rounded ">
         <div onClick={()=>{handleSlider("left")}} className="arrow-container absolute top-1/2 left-[10px] cursor-pointer z-10">
            <AiOutlineArrowLeft className="w-[50px] h-[40px]  text-zinc-400"  />
         </div>
         <div onClick={()=>{handleSlider("right")}} className="arrow-container absolute top-1/2 right-[10px] cursor-pointer z-10">
            <AiOutlineArrowRight className="w-[50px] h-[40px]  text-zinc-400"  />
         </div>
         <div style={{transform: `translateX(${slideIndex * -1536}px)`}} className={`wrapper w-full h-full flex transition-all duration-1000`}>
           {sliderItems.map((item, index)=> {
             return(
               
                <div className="slide w-[1536px] h-[562px] shrink-0 flex " key={item.id}>
                    <div className="w-1/2 h-full image-container ">
                       <img className="w-full h-full " src={item.img} />
                    </div>
                    <div className={`text-container flex flex-col justify-around items-center grow ${item.bg}`}>
                      <h3 className="px-4 py-8 font-medium text-8xl">{item.title}</h3>
                      <p className="text-xl font-medium break-words">{item.desc}</p>
                    
                    </div>
                </div>

               
             )
           })}


         </div>


      </div>
    </>
  );
};

export default Slider;
