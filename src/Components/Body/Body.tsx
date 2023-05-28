import AllCourseMenu from "./AllCourseMenu/AllCourseMenu"
import AllCourseMenuContextProvider from "./AllCourseMenuContextProvider/AllCourseMenuContextProvider";
import TopCategories from "./TopCategories/TopCategories";
import FeaturedTopics from "./FeaturedTopics/FeaturedTopics";
import Trusted from "./Trusted/Trusted";
import UdemyBusinessSection from "./UdemyBusinessSection/UdemyBusinessSection";
import Instructor from "./Instructor/Instructor";
import Footer from "../Footer/Footer";

function Body() {
  return (
    <>
        <AllCourseMenuContextProvider>
            <AllCourseMenu />
        </AllCourseMenuContextProvider>
        
        <TopCategories />

        <FeaturedTopics />

        <Trusted />

        {/*carousel here now*/}


        <UdemyBusinessSection />

        <Instructor />

        <Footer />
    </>
  )
}

export default Body
