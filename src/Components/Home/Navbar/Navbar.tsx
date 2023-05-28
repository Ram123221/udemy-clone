import { navbar } from "../../../Data/navbarData";
import "./Navbar.scss";
import { useSidebarGlobalContext } from "./SidebarContextProvider";

export default function Navbar() {
    const {bars, img_url, globe_icon, search_icon, cart_icon, placeholder} = navbar;
    const {dispatch}= useSidebarGlobalContext();

    const show_sidebar = ()=>{
      dispatch({type: "SHOW_SIDEBAR"});
    };

  return (
    <div id="navbar">

        <span id="bars-icon" className="icon" onClick={show_sidebar}>
            {bars}
        </span>
      
      {/*main logo company*/}
      <div className="logo-wrapper">
        <img src={img_url} alt="" />
      </div>

        {/*menu shower*/}
      <span id="categories">
        Categories
      </span>

        {/*search bar*/}
      <div id="search-bar">
        
        <span className="search-icon icon">
            {search_icon}
        </span>

        <input type="text" name="search-name" placeholder={placeholder} />

      </div>

      <span id="business">
        Udemy Business
      </span>

      <span id="teach-on-udemy">
        Teach on Udemy
      </span>

      <span id="cart-icon" className="icon">
        {cart_icon}
      </span>

        {/*log sign info here*/}
      <div id="login-info">

        <button id="login" className="log-sign">
            Login
        </button>

        <button id="signup" className="log-sign">
            Sign up
        </button>

        <span id="globe-icon" className="icon">
            {globe_icon}
        </span>

      </div>

    </div>
  )
}
