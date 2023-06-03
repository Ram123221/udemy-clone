import { below_carousel_data } from "../../../Data/BelowCarouselData";
import "./TopCategories.scss";

function TopCategories() {
    const {top_categories:{title, categories}} = below_carousel_data;
  return (
    <section id="top-categories">
      
      <h1 className="fs-md-2">
        {title}
      </h1>

      <div id="categories-list">

        {categories.map((category, index)=>{
          const { img_url, field} = category;
            return (
              <div key={index}>

                <img src={img_url} alt={field} />

                <h5 className="category fs-sm-3" key={index}>
                    {field}
                </h5>
              </div>
            )
        })
        }
      </div>
    </section>
  )
}

export default TopCategories
