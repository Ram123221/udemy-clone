import { resources_type } from "../../../Data/FieldsMenuData";
import {BsStarFill, BsStarHalf} from "react-icons/bs";

function CarouselItem({tutorial}:{tutorial: resources_type}) {
    const {img_url, topic, instructor, ratings, raters_quantity, stars, price, original_price} = tutorial;

  return (
    <>
      
      <img className="carousel-item-img" src={img_url} alt="....jpg" />

      <h1 className="ci-head">
        {topic}
      </h1> 

      <p className="instructor-name">
        {instructor}
      </p> 

      <div className="ratings-container">
        <span className="rate-num">{ratings}</span>
        <span className="stars-container">
            {
                stars?.map((star, i)=>{

                    switch(star){
                        case "*":
                            return (
                                <span className="star-icon" key={i}>
                                    <BsStarFill />
                                </span>
                            );
                            break;

                        case "X":
                            return (
                                <span className="star-icon" key={i}>
                                    <BsStarHalf />
                                </span>
                            );
                            break;

                        default:
                            return (
                                <>Error!!</>
                            );
                    }
                })
            }
        </span>

        <span className="reviewers-quantity">
            ({raters_quantity})
        </span>

      </div>

      <h1 className="price">
        <span>${price}</span>
        <span>${original_price}</span>
      </h1>

    </>
  )
}

export default CarouselItem
