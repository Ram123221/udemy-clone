import { navbar } from "../../../Data/navbarData";
import "./Sidebar.scss";
import SubCourse from "./SubCourse";
import GrandSubCourse from "./GrandSubCourse";
import { useSidebarGlobalContext } from "./SidebarContextProvider";

export interface sidebarStatesType{
    sidebar_displayed: boolean,
    sub_course_displayed: boolean,
    grand_sub_course_displayed: boolean
};


function Sidebar() {
    const {sidebar_top, sidebar_middle, sidebar_bottom, angle_right, remove, globe_icon} = navbar;
    const {heading, courses} = sidebar_middle;
    const { heading_sb, extra} = sidebar_bottom;

    const {updateActiveSubcourse, dispatch, sidebarStates:{sidebar_displayed, sub_course_displayed, grand_sub_course_displayed}} = useSidebarGlobalContext();

    const hide_sidebar = ()=>{
        dispatch({type: "HIDE_SIDEBAR"});
    };

    const show_subcourse = ()=>{
        dispatch({type: "SHOW_SUBCOURSE"});
    };

  return (
    <div id="sidebar" className={sidebar_displayed?"":"translate-100-hide"}>

        <div id="sidebar-left-container" className={sidebar_displayed?"":"translate-100-hide"}>

            <div id="sidebar-left">

                {/*remove icon*/}
                <div id="side-remove-icon" onClick={hide_sidebar} className={sidebar_displayed?"":"scale-0"}>
                    {remove}
                </div>

                {/*main courses and other login, sign up container*/}
                <div id="main-menu" className="grid-left">
                    
                    {/*login signup ||| main top*/}
                    <div id="log-sign">

                        {sidebar_top.map((item,i)=>{
                            return (
                                <a href="" key={i}>
                                    {item}
                                </a>
                            );
                        })}

                    </div>

                    {/*main middle part*/}
                    <div id="main-courses-container">

                        <h4>{heading}</h4>

                        <ul className="list">

                            {courses.map(course=>{
                                const {id, name} = course;

                                return (
                                    <li className="list-item" key={id} onClick={()=>{updateActiveSubcourse(id); show_subcourse();}}>
                                        
                                        <span className="item-name">
                                            {name}
                                        </span>

                                        <span className="angle-arrow">
                                            {angle_right}
                                        </span>

                                    </li>
                                );
                            })}

                        </ul>
                    </div>

                    {/*main bottom part*/}
                    <div id="main-menu-bottom">

                        <h4>
                            {heading_sb}
                        </h4>

                        <ul className="list">

                            {
                                extra.map((item,i)=>{
                                    return (
                                        <li className="list-item" key={i}>
                                            
                                            <span className="item-name">
                                                {item}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <button>
                            <span>
                                {globe_icon}
                            </span>
                            <span>
                                English
                            </span>
                        </button>
                    </div>

                </div>

                <div id="grid-right" className={sub_course_displayed? "translate-50-show":""}>

                    {/*sub courses container*/}
                    <div id="sub-courses-menu">

                        {/*displaying only the active ones*/}
                        <SubCourse />

                    </div>

                    {/*grand sub course container for "all categories" sub menu in above section*/}
                    <div id="grand-sub-course-menu" className={grand_sub_course_displayed? "translate-100-hide":""}>
                        
                        <GrandSubCourse />
                    </div>


                </div>

            </div>

        </div>

        {/*empty transparent black overlay*/}
        <div id="sidebar-right">

        </div>

    </div>
  )
}

export default Sidebar
