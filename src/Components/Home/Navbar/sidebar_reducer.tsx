import { sidebarStatesType } from "./Sidebar";
export interface action_type{
    type: string,
    payload?: string
};

function sidebar_reducer(state: sidebarStatesType, action: action_type):sidebarStatesType {
    const {type} = action;

    switch(type){
        case "HIDE_SIDEBAR":
            return {...state, sidebar_displayed: false, sub_course_displayed: false, grand_sub_course_displayed: false};
            break;
        case "SHOW_SIDEBAR":
            return {...state, sidebar_displayed: true};
            break;
        case "SHOW_SUBCOURSE":
            return {...state, sub_course_displayed: true};
            break;
        case "HIDE_SUBCOURSE":
            return {...state, sub_course_displayed: false, grand_sub_course_displayed: false};
            break;
        case "SHOW_GRAND_SUBCOURSE":
            return {...state, grand_sub_course_displayed: true};
            break;
        case "HIDE_GRAND_SUBCOURSE":
            return {...state, grand_sub_course_displayed: false};
            break;
    }
  return state;
}

export default sidebar_reducer
