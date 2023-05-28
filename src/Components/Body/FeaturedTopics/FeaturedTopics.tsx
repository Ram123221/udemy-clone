import { below_carousel_data } from "../../../Data/BelowCarouselData";
import "./FeaturedTopics.scss";

function FeaturedTopics() {
    const {featured_topics:{title, topics}} = below_carousel_data;
  return (
    <section id="featured-topics">
      
      <h1 className="fs-md-3">
        {title}
      </h1>

      <div className="topics-container">

        {
            topics.map(item=>{
                const {id, topic, sub_topics} = item;

                return (
                    <div className="featured-item-wrapper" key={id}>
                        
                        <h3 className="fs-sm-4">
                            {topic}
                        </h3>

                        <div className="featured-items">

                            {sub_topics.map(item=>{
                                const {id, sub_topic, students_num} = item;

                                return (
                                    <div className="featured-item" key={id}>
                                        
                                        <h3><a href="" className="fs-sm-5">{sub_topic}</a></h3>

                                        <p className="student-quantity fs-sm-6">{students_num} students</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })
        }
      </div>

      <button className="fs-sm-5 explore-more">
        Explore more topics
      </button>
    </section>
  )
}

export default FeaturedTopics
