import { below_carousel_data } from "../../Data/BelowCarouselData";
import "./Footer.scss";
import {BsGlobe} from "react-icons/bs";

function Footer() {
    const {footer:{lists}} = below_carousel_data;

  return (
    <section id="footer">
      
      <div id="foot-top-container">

        <button className="globe-eng">
            
            <span className="globe-icon">
                <BsGlobe />
            </span>

            <span className="eng">
                English
            </span>
        </button>

        <div id="foot-lists-container">

            {
                lists.map((list,i)=>{
                    return (
                        <ul className="foot-list" key={i}>

                            {list.map((itm,index)=>{
                                return (
                                    <li className="foot-list-item fs-sm-5" key={index}>
                                        {itm}
                                    </li>
                                )
                            })}
                        </ul>
                    )
                })
            }
        </div>

      </div>

      <div id="foot-bottom-container">

        <img src="./logo-udemy-inverted.svg" alt="udemy-logo" />

        <span className="fs-sm-5">
            &copy; 2023 Udemy, Inc.
        </span>
      </div>
    </section>
  )
}

export default Footer
