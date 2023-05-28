//when size is less than 600px, render all but shown on basis of display css property
//don't render this component for all the courses when size is greater than 600px 
//don't render here I don't mean to set its display to none, just pass nothing

import { single_course_type } from "../../../Data/FieldsMenuData";
import CarouselItem from "../CarouselItem/CarouselItem";
import { useAllCourseMenuContext } from "../AllCourseMenuContextProvider/AllCourseMenuContextProvider";
import { useWidthHeightContext } from "../../Responsiveness/WidthHeightProvider";
import { useEffect, useState } from "react";
import LoadingCarouselItem from "../CarouselItem/LoadingCarouselItem";

function SingleFieldCarousel({course, index}:{course: single_course_type, index: number}) {
    const {available_resources} = course;
    const {clickedNum} = useAllCourseMenuContext();
    const {width} = useWidthHeightContext();

    const [offsetPercent, setOffsetPercent] = useState<number>(0);

    useEffect(()=>{
        if(width <= 600){
            setOffsetPercent(100);
        }
        else if(width>600 && width<=700){
            setOffsetPercent(50);
        }
        else if(width>700 && width<=980){
            setOffsetPercent(2*100/3);
        }
        else if(width > 980 && width <=1200 ){
            setOffsetPercent(75);
        }
        else if(width > 1200){
            setOffsetPercent(100/5*4);
        }
    },[width])

  return (
    <div className="carousel" style={{transform: `translateX(-${clickedNum[index] * offsetPercent}%)`}}>
      
      {available_resources.map((tutorial, index)=>{
        return (
            <div className="carousel-item" key={index}>
                
                {(!tutorial.loading)?
                // {/*single carousel item */}
                <CarouselItem tutorial={tutorial} />
                :
                <LoadingCarouselItem />
            }

            </div>
        );
      })}
    </div>
  )
}

export default SingleFieldCarousel
