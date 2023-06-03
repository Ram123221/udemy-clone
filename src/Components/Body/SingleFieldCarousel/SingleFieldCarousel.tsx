//when size is less than 600px, render all but shown on basis of display css property
//don't render this component for all the courses when size is greater than 600px 
//don't render here I don't mean to set its display to none, just pass nothing

import { single_course_type } from "../../../Data/FieldsMenuData";
import CarouselItem from "../CarouselItem/CarouselItem";
import LoadingCarouselItem from "../CarouselItem/LoadingCarouselItem";

interface props_type extends single_course_type{
    index: number,
}
function SingleFieldCarousel(props:props_type) {
    const {available_resources, index} = props;

    return (
    <div className="carousel" style={{transform: `translateX(-${index * 100}%)`}}>
      
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
