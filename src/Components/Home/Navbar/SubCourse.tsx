import { navbar } from "../../../Data/navbarData";
import { useSidebarGlobalContext } from "./SidebarContextProvider";

export interface allCatMenuType{
    id: string,
    category: string
};

export interface subcourseType{
    id:string,
    sub_courses_arr: string[] | allCatMenuType[]
};

function SubCourse() {

    const {activeSubcourse, updateActiveGrandSubcourse, dispatch} = useSidebarGlobalContext();
    const {angle_left, angle_right} = navbar;
    const { sub_courses_arr} = activeSubcourse;

    const show_main_menu = ()=>{
        dispatch({type: "HIDE_SUBCOURSE"});
    };

    const show_grand_sub_course = ()=>{
        dispatch({type: "SHOW_GRAND_SUBCOURSE"});
    };

  return (
      <div id="sub-course-menu">

        <div className="back-to-main-menu" onClick={show_main_menu}>

            <span className="angle-arrow">
                {angle_left}
            </span>

            <span>
                Menu
            </span>
        </div>

        {/*subcourse list*/}
        {
            sub_courses_arr.map((subcourse,i)=>{
                
                if(typeof subcourse == typeof ""){

                    return (
                    <ul className="list" key={i}>
                        
                        <li className="list-item">
                            <span>
                                {subcourse as string}
                            </span>
                        </li>

                    </ul>
                    );
                }
                //all categories menu
                else {
                const {id,category} = subcourse  as allCatMenuType;

                    return (
                        <ul className="list" key={i} onClick={()=>{updateActiveGrandSubcourse(id)}}>
                            
                            <li className="list-item" onClick={show_grand_sub_course}>

                                <span>
                                    {category}
                                </span>

                                <span className="angle-arrow">
                                    {angle_right}
                                </span>

                            </li>
                        </ul>
                    )
                }
            })
        }

    </div>

  )
}

export default SubCourse