import Home from './Components/Home/Home';
import SidebarContextProvider from './Components/Home/Navbar/SidebarContextProvider';
import Body from './Components/Body/Body';

function App() {

  return (
    <>
      <SidebarContextProvider>
        <Home />
      </SidebarContextProvider>

      <Body />
    </>
  )
}

export default App
