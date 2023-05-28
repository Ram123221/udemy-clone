import {useState, useEffect, createContext, useRef, useContext, RefObject} from "react";
import { fields_menu } from "../../../Data/FieldsMenuData";
import { useWidthHeightContext } from "../../Responsiveness/WidthHeightProvider";

interface all_course_menu_context_type{
    clickedNum: number[],
    increaseClickedNum: (_:number)=>void,
    decreaseClickedNum: (_:number)=>void,
    leftArrows: RefObject<HTMLSpanElement[]>,
    rightArrows: RefObject<HTMLSpanElement[]>,
    carouselContainerDisplayVal: boolean[],
    carouselContainerRefs: RefObject<HTMLDivElement[]>,
    downArrows: RefObject<HTMLSpanElement[]>,
    updateCarouselContainerDisplayVal: (_:number)=>void,
    hide_show_carousel_container:()=>void,

};
const all_course_menu_context = createContext<all_course_menu_context_type>({
    clickedNum: [], 
    increaseClickedNum: (_:number)=>{}, 
    decreaseClickedNum: (_:number)=>{}, 
    leftArrows: {current: []}, 
    rightArrows: {current: []}, 
    carouselContainerDisplayVal: [],
    carouselContainerRefs: {current: []},
    downArrows: {current: []}, 
    updateCarouselContainerDisplayVal: (_:number)=>{},
    hide_show_carousel_container:()=>{},
});

function AllCourseMenuContextProvider({children}:{children: JSX.Element}) {

    const {single_courses} = fields_menu;
    const num_of_courses = single_courses.length;

    //initialize the clickedNum arr with all zeros
    const initializeClickedNum = ()=>{
        const initialArr:number[]=new Array();
        for(let i=0; i<num_of_courses; i++){
            initialArr.push(0);
        }
        return initialArr;
    }

    //number of times the button is clicked
    const [clickedNum, setClickedNum] = useState<number[]>(initializeClickedNum);

    //=========** never do this to initialize an array or anything like this because this will push as many zero's in each render, use a function inside hook argument instead * ==========//
    // useEffect(()=>{
    //     for(let i=0; i<num_of_courses; i++){
    //         clickedNum.push(0);
    //     }
    // },[]);

    //refs for left and right arrow of carousel
    const leftArrows = useRef<HTMLSpanElement[]>([]);
    const rightArrows = useRef<HTMLSpanElement[]>(new Array());
    const {width} = useWidthHeightContext();
            
    //initialize display values for each carousel container
    const initializeDisplayValues = ()=>{
        const display_arr:boolean[] = [];
        
        for(let i=0; i<num_of_courses; i++){
            if(i==0){
                display_arr.push(true);
            }
            else{
                display_arr.push(false);
            }
        }
        
        return display_arr;
    };
    
    //display none hide for whole individual carousel or say carousel-container
    const [carouselContainerDisplayVal, setCarouselContainerDisplayVal] = useState<boolean[]>(initializeDisplayValues);

    
    useEffect(()=>{
        // carouselContainerRefs.current = carouselContainerRefs.current.slice(0, num_of_courses);
        // leftArrows.current = leftArrows.current.slice(0, num_of_courses);
        // rightArrows.current = rightArrows.current.slice(0, num_of_courses);
    },[carouselContainerDisplayVal]);

    //handle the end reaching situation
    const checkEndReached = ()=>{
        
        for(let i=0; i<single_courses.length; i++){

            const {available_resources} = single_courses[i];
            const length = available_resources.length;
            
            let length_copy:number;
            
            //---------  //this logic only works if length is 15 otherwise doesn't //so look it later
            if(width <= 600 && width >=0)
            length_copy = length-1;
            else if(width>600 && width <=700)
            length_copy = length -2;
            else if(width>700 && width <=980)
            length_copy = 6;
            else if(width>980 && width<=1200)
            length_copy = 4;
            else
            length_copy = 2;
            
            if(carouselContainerDisplayVal[i] == true){
                if(clickedNum[i]==0){
                    leftArrows.current[i].style.display = "none";
                }
                else if(clickedNum[i]==length_copy){
                    rightArrows.current[i].style.display = "none";
                }
                else if(clickedNum[i]>0 && clickedNum[i]<length_copy){
                    leftArrows.current[i].style.display = "grid";
                    rightArrows.current[i].style.display = "grid";
                }
            }
            else if(carouselContainerDisplayVal[i] == false){
                leftArrows.current[i].style.display = "none";
                rightArrows.current[i].style.display = "none";
            }
        }
    };


    const increaseClickedNum = (index:number)=>{
        setClickedNum(nums=>{
            return nums.map((num, i)=>{
                if(i==index)
                    return num+1;
                return num;
            })
        });
    };

    const decreaseClickedNum = (index: number)=>{
        setClickedNum(nums=>{
            return nums.map((num, i)=>{
                if(i==index)
                    return num-1;
                return num;
            })
        });
    };


    //references for all carousel-container elements
    const carouselContainerRefs = useRef<HTMLDivElement[]>([]);

    //hide or show carousel containers
    const hide_show_carousel_container = ()=>{
        for(let i=0; i<num_of_courses; i++){
            //for padding-bottom updating
            const parent = carouselContainerRefs.current[i].parentElement as HTMLDivElement;

            //show case
            if(carouselContainerDisplayVal[i] == true){
                carouselContainerRefs.current[i].style.display= "block";
                //show or hide arrows acc. to clickeNum value
                leftArrows.current[i].style.display= "grid"; 
                rightArrows.current[i].style.display= "grid";
                parent.style.paddingBottom = "3rem";
            }
            //hide case
            else if(carouselContainerDisplayVal[i] == false){
                carouselContainerRefs.current[i].style.display= "none";
                leftArrows.current[i].style.display= "none";
                rightArrows.current[i].style.display= "none";
                parent.style.paddingBottom = "0"; 
            }
            checkEndReached();
        }
    };
    
    // useEffect(()=>{
    //     // console.log(carouselContainerDisplayVal);
    //     // console.log(carouselContainerRefs.current)
    //     console.log(leftArrows.current);
    //     console.log(rightArrows.current);
    //     checkEndReached();
    // }, []);  


    //updating the truth values of carouselContainerDisplayVal acc. to user click events
    const updateCarouselContainerDisplayVal = (index: number)=>{
        setCarouselContainerDisplayVal((truth_values)=>{
            return truth_values.map((truth_value,i)=>{
                if(i == index)
                    return !truth_value;
                return truth_value;
            })
        })
    };


    //check everytime the arrows left and right are clicked
    useEffect(()=>{
        checkEndReached();
    },[clickedNum]);

    useEffect(()=>{
        hide_show_carousel_container();
        rotate_down_arrows();
        console.log(carouselContainerDisplayVal)
    },[carouselContainerDisplayVal]);

    //references for down arrow, in the grand-carousel-container heading
    const downArrows = useRef<HTMLSpanElement[]>([]);

    //rotate arrows
    const rotate_down_arrows = ()=>{
        for(let i=0; i<num_of_courses; i++){
            if(carouselContainerDisplayVal[i]){
                downArrows.current[i].classList.add("rotate-180");
            }
            else{
                if(downArrows.current[i].classList.contains("rotate-180")){
                    downArrows.current[i].classList.remove("rotate-180");
                }
            }
        }
    };
 
  return (
    <all_course_menu_context.Provider value={{
        clickedNum: clickedNum, 
        increaseClickedNum: increaseClickedNum, 
        decreaseClickedNum: decreaseClickedNum, 
        leftArrows: leftArrows, 
        rightArrows: rightArrows,
        carouselContainerDisplayVal: carouselContainerDisplayVal,
        carouselContainerRefs: carouselContainerRefs,
        downArrows: downArrows,
        updateCarouselContainerDisplayVal: updateCarouselContainerDisplayVal,
        hide_show_carousel_container: hide_show_carousel_container,
        }}>

        {children}

    </all_course_menu_context.Provider>
  )
}

export default AllCourseMenuContextProvider;

export const useAllCourseMenuContext = ()=>{
    return useContext(all_course_menu_context);
};
