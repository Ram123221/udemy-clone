import {Reducer, createContext, useContext, useReducer, useState} from "react";
import { navbar } from "../../../Data/navbarData";
import { subcourseType } from "./SubCourse";
import { sidebarStatesType } from "./Sidebar";
import sidebar_reducer, { action_type } from "./sidebar_reducer";

export interface grand_sub_course_type{
  id: string,
  courses_arr: string[]
};

interface sidebar_context_type{
  sidebarStates: sidebarStatesType,
  activeSubcourse: subcourseType,
  activeGrandSubcourse: grand_sub_course_type,
  updateActiveSubcourse: (_:string)=>void,
  updateActiveGrandSubcourse: (_:string)=>void,
  dispatch: (_:action_type) => void
};

const initialState={
    sidebar_displayed: false,
     sub_course_displayed: false,
     grand_sub_course_displayed: false
};

const sidebar_context = createContext<sidebar_context_type>({sidebarStates:initialState, activeSubcourse:{id: "", sub_courses_arr:[]}, activeGrandSubcourse:{id: "", courses_arr:[]}, updateActiveSubcourse: (_:string)=>{}, updateActiveGrandSubcourse: (_: string)=>{}, dispatch: (_:action_type)=>{}});

function SidebarContextProvider({children}:{children: JSX.Element}) {
      const {sub_courses, grand_sub_courses} = navbar;

      //sidebar state according to user's click event
      const [sidebarStates, dispatch] = useReducer<Reducer<sidebarStatesType, action_type>>(sidebar_reducer, initialState);

      //marks the id of subcourse which is to be displayed currently
      const [activeSubcourseId, setActiveSubcourseId] = useState<string>("web");
      //marks the id of grand_subcourse
      const [activeGrandSubcourseId, setActiveGrandSubcourseId] = useState<string>("development");
  
      const [activeSubcourse, setActiveSubcourse] = useState<subcourseType>(sub_courses[0]);
      const [activeGrandSubcourse, setActiveGrandSubcourse] = useState<grand_sub_course_type>(grand_sub_courses[0]);
  
      const updateActiveSubcourse = (id:string)=>{
          for(let i=0; i< sub_courses.length; i++){
              if(id == sub_courses[i].id && activeSubcourseId != id){
                  setActiveSubcourseId(sub_courses[i].id);
                  setActiveSubcourse(sub_courses[i]);
                  break;
              }
          }
      }; 
  
      const updateActiveGrandSubcourse = (id:string)=>{
          for(let i=0; i< grand_sub_courses.length; i++){
              if(id == grand_sub_courses[i].id && activeGrandSubcourseId != id){
                  setActiveGrandSubcourseId(grand_sub_courses[i].id);
                  setActiveGrandSubcourse(grand_sub_courses[i]);
                  break;
              }
          }
      };

  return (
    <sidebar_context.Provider value={{sidebarStates: sidebarStates, activeGrandSubcourse: activeGrandSubcourse, activeSubcourse: activeSubcourse, dispatch: dispatch, updateActiveSubcourse: updateActiveSubcourse, updateActiveGrandSubcourse: updateActiveGrandSubcourse }}>
      {children}
    </sidebar_context.Provider>
  )
}

export default SidebarContextProvider;

export const useSidebarGlobalContext = ()=>{
  return useContext(sidebar_context);
};

