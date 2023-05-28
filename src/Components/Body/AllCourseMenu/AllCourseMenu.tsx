import { fields_menu } from "../../../Data/FieldsMenuData"
import SingleFieldCarousel from "../SingleFieldCarousel/SingleFieldCarousel";
import "./AllCourseMenu.scss";
import { useAllCourseMenuContext } from "../AllCourseMenuContextProvider/AllCourseMenuContextProvider";

function AllCourseMenu() {
    const {section_head, section_desc, single_courses, angle_left_icon, angle_right_icon, angle_down_icon} = fields_menu;
    const { increaseClickedNum, decreaseClickedNum, leftArrows, rightArrows, carouselContainerRefs, downArrows, updateCarouselContainerDisplayVal, carouselContainerDisplayVal} = useAllCourseMenuContext();
    // useEffect(()=>{
    //     console.log(carouselContainerDisplayVal);
    //     console.log(carouselContainerRefs.current)
    //     console.log(leftArrows.current);
    //     console.log(rightArrows.current);
    // }, []);  

  return (
    <section id="all-course-menu">
      
        <h1>{section_head}</h1>
        <p>{section_desc}</p>

        {/*arrows and carousel-container's container*/}
        <div className="whole-courses-carousel-container">

            {
                single_courses.map((course, index)=>{
                    const {id} = course;

                    return (
                        <div className="carousel-grand-container" key={id}>

                            <h1 className="name-icon-container" onClick={()=>{updateCarouselContainerDisplayVal(index);}}>
                                <span className="course-name">{id}</span>
                                <span className="icon" ref={(ele)=>downArrows.current?.push(ele as HTMLSpanElement)}>{angle_down_icon}</span>
                            </h1>

                            {/*arrows*/}
                            <span className="left-arrow arrow" ref={(ele)=>leftArrows.current?.push(ele as HTMLSpanElement)} onClick={()=>{decreaseClickedNum(index);}}>
                                {angle_left_icon}
                            </span>

                            <span className="right-arrow arrow" ref={ele=>rightArrows.current?.push(ele as HTMLSpanElement)} onClick={()=>{increaseClickedNum(index);}}>
                                {angle_right_icon}
                            </span>


                            {/*actual carousel container*/}
                            <div className="carousel-container" ref={div_ele=>carouselContainerRefs.current?.push(div_ele as HTMLDivElement)}>

                                {
                                    //only show this carousel with all its items if it is meant to be displayed by the user
                                    carouselContainerDisplayVal[index]?
                                    <SingleFieldCarousel course={course} index={index} />
                                    :
                                    <></>
                                }

                            </div>
                        </div>
                    );
                })
            }

        </div>

    </section>
  )
}

export default AllCourseMenu
