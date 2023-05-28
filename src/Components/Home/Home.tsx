import Navbar from "./Navbar/Navbar";
import Popup from "./Popup/Popup";
import Hero from "./Hero/Hero";
import Sidebar from "./Navbar/Sidebar";

function Home() {
  return (
    <div id="home">

      <Popup />

      <Navbar />

      <Hero />

      <Sidebar />
      
    </div>
  )
}

export default Home
