import Home from './Components/Home/Home';
import SidebarContextProvider from './Components/Home/Navbar/SidebarContextProvider';
import Body from './Components/Body/Body';
import WidthHeightProvider from './Components/Responsiveness/WidthHeightProvider';

function App() {

  return (
    <WidthHeightProvider>
      <>
        <SidebarContextProvider>
          <Home />
        </SidebarContextProvider>

        <Body />
      </>

    </WidthHeightProvider>
  )
}

export default App
