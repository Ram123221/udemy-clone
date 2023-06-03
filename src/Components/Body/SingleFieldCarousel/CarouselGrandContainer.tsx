import { useState, useRef, useEffect } from "react";
import { single_course_type } from "../../../Data/FieldsMenuData";
import { fields_menu } from "../../../Data/FieldsMenuData";
import SingleFieldCarousel from "./SingleFieldCarousel";
import { useWidthHeightContext } from "../../Responsiveness/WidthHeightProvider";

interface props_type extends single_course_type{
    containerIndex: number,
}
function CarouselGrandContainer(props: props_type) {
    const { id , containerIndex} = props;
    const { angle_down_icon, angle_left_icon, angle_right_icon, single_courses } = fields_menu;
    
    //contexts for single carousel-grand-container, works for all carousels

    //responsiveness
    const { width } = useWidthHeightContext();
    const [rightEndTestingIndex, setRightEndTestingIndex] = useState<number>(0);

    const updateInitialIndex = () => {
        const course = single_courses.filter((course, index) => index == containerIndex ? course : null);
        const [{ available_resources }] = course;
        const carousel_items_length = available_resources.length;

        if (width <= 600) {
            setRightEndTestingIndex(carousel_items_length - 1);
        }
        else if (width > 600 && width <= 700) {
            setRightEndTestingIndex(Math.floor(carousel_items_length / 2) - 1);
        }
        else if (width > 700 && width <= 980) {
            setRightEndTestingIndex(Math.floor(carousel_items_length / 3) - 1);
        }
        else if (width > 980 && width <= 1200) {
            setRightEndTestingIndex(Math.floor(carousel_items_length / 4) - 1);
        }
        else if (width > 1200) {
            setRightEndTestingIndex(Math.floor(carousel_items_length / 4) - 1);
        }
    };

    useEffect(() => {
        updateInitialIndex();
    }, []);

    useEffect(() => {
        updateInitialIndex();
    }, [width]);

    //indicates the number of times the buttons are clicked
    const [index, setIndex] = useState<number>(0);
    const leftArrow = useRef<HTMLSpanElement>(null);
    const rightArrow = useRef<HTMLSpanElement>(null);
    const [display, setDisplay] = useState<boolean>(containerIndex == 0 ? true : false);
    
    const updateDisplay = () => {
        setDisplay(!display);
    };

    const increase = () => {
        // if(width <= 600){
        //     setIndex(index+1);
        // }
        // else if(width>600 && width<=700){
        //     setIndex(index+1);
        // }
        // else if(width>700 && width<=980){
        //     setIndex(index+2);
        // }
        // else if(width > 980 && width <=1200 ){
        //     setIndex(index+3);
        // }
        // else if(width > 1200){
        //     setIndex(index+4);
        // }
        setIndex(index + 1);
    };

    const decrease = () => {

        // if(width <= 600){
        //     setIndex(index-1);
        // }
        // else if(width>600 && width<=700){
        //     setIndex(index-1);
        // }
        // else if(width>700 && width<=980){
        //     setIndex(index-2);
        // }
        // else if(width > 980 && width <=1200 ){
        //     setIndex(index-3);
        // }
        // else if(width > 1200){
        //     setIndex(index-4);
        // }
        setIndex(index - 1);
    };

    useEffect(() => {
        // hideShowArrow();
        const course = single_courses.filter((course, index) => index == containerIndex ? course : null);
        const [{ available_resources }] = course;
        const carousel_items_length = available_resources.length;

        if (index == carousel_items_length - 1) {
            
        }

        console.log(index);
        
    }, [index]);
    

  return (
    <div className="carousel-grand-container" key={id}>

        <h1 className="name-icon-container" onClick={updateDisplay}>
            <span className="course-name">{id}</span>
            <span className="icon">{angle_down_icon}</span>
        </h1>

        {/*arrows*/}
        <span className="left-arrow arrow" style={{display: (index>0 && display)?"grid":"none"}} ref={leftArrow} onClick={decrease}>
            {angle_left_icon}
        </span>

        <span className="right-arrow arrow" onClick={increase} style={{display: (index < rightEndTestingIndex && display)?"grid":"none"}} ref={rightArrow}>
            {angle_right_icon}
        </span>


        {/*actual carousel container*/}
        <div className="carousel-container" style={{display: display?"block":"none"}}>

            {
                //only show this carousel with all its items if it is meant to be displayed by the user
                // carouselContainerDisplayVal[index]?
                <SingleFieldCarousel index={index} {...props} />
                // :
                // <></>
            }

        </div>
    </div>
  )
}

export default CarouselGrandContainer
