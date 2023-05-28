import { navbar } from "../../../Data/navbarData";
import { useSidebarGlobalContext } from "./SidebarContextProvider";

function GrandSubCourse() {
    const {activeGrandSubcourse, dispatch} = useSidebarGlobalContext();
    const { courses_arr} = activeGrandSubcourse;
    const {angle_left} = navbar;

    const show_main_menu = ()=>{
        dispatch({type: "HIDE_SUBCOURSE"});
    };

    const show_all_cat = ()=>{
        dispatch({type: "HIDE_GRAND_SUBCOURSE"});
    };

  return (
    <div id="grand-subcourse">
      
      <div className="back-to-main-menu" onClick={show_main_menu}>

            <span className="angle-arrow">
                {angle_left}
            </span>

            <span>
                Menu
            </span>
        </div>

        <div className="back-to-all-cat" onClick={show_all_cat}>

            <span className="angle-arrow">
                {angle_left}
            </span>

            <span>
                All categories
            </span>
        </div>

        {
            courses_arr.map((grand_sub_course, index)=>{
                return (
                    <ul className="list" key={index}>
                        
                        <li className="list-item">
                            <span>
                                {grand_sub_course}
                            </span>
                        </li>

                    </ul>
                )
            })
        }
    </div>
  )
}

export default GrandSubCourse
