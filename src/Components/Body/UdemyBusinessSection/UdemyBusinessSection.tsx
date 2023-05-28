import { below_carousel_data } from "../../../Data/BelowCarouselData";
import "./UdemyBusinessSection.scss";

function UdemyBusinessSection() {
    const {business:{img_url , alt, logo_alt, logo_url, title, list, btn1_content, btn2_content}} = below_carousel_data;

  return (
    <section id="business">
      
      <img src={img_url} alt={alt} />

      <div>

        <img src={logo_url} alt={logo_alt} />
        {/*BI-head==== BI= BusinessInstructor*/}
        <h1 className="fs-md-1 BI-head">
            {title}
        </h1>

        <ul className="list-container">
            {
                list.map((item, i)=>{
                    return (
                        <li className="business-list-item fs-sm-1" key={i}>
                            {item}
                        </li>
                    )
                })
            }
        </ul>

        <div className="business-btns-container">

            <button className="fs-sm-3">{btn1_content}</button>
            <button className="fs-sm-3">{btn2_content}</button>

        </div>

      </div>
      
    </section>
  )
}

export default UdemyBusinessSection
