import { hero } from "../../../Data/heroData";
import "./Hero.scss";

function Hero() {
    const {img_url, heading, desc, search_icon, search_txt} = hero;

  return (
    <div id="hero">
      
      <img src={img_url} alt="hero-2" />

      <div id="hero-contents">

        <div id="hero-content">

            <p className="fs-md-1">{heading}</p>

            <p>{desc}</p>

        </div>

        <div id="search">

            <span id="search-txt">
                {search_txt}
            </span>

            <span className="icon">
                {search_icon}
            </span>
            
        </div>

      </div>

    </div>
  )
}

export default Hero
