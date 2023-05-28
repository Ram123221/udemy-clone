import "../UdemyBusinessSection/UdemyBusinessSection.scss";
import { below_carousel_data } from "../../../Data/BelowCarouselData";

function Instructor() {
    const {be_instructor:{img_url, alt, title, desc, btn1_content}} = below_carousel_data;

  return (
    <section id="instructor-section">
      
      <img src={img_url} alt={alt} />

        <div>

            {/*BI-head==== BI= BusinessInstructor*/}
            <h1 className="fs-lg-3 BI-head">
                {title}
            </h1>

            <p className="fs-sm-1">
                {desc}
            </p>

            <div className="instructor-btns-container">

                <button className="fs-sm-3">{btn1_content}</button>

            </div>

        </div>

    </section>
  )
}

export default Instructor
