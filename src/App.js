import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/data";


import Navbar from "./scenes/Navbar";
import Home from "./scenes/Home";
import Skills from "./scenes/Skills";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Portfolio from "./scenes/Portfolio";



function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0){
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  },[])


  return (
    <div className=" bg-deep-blue">
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelctedPage={setSelectedPage}/>
      <Skills setSelectedPage={setSelectedPage}/>
      <Portfolio setSelectedPage={setSelectedPage}/>
      <Contact setSelctedPage={setSelectedPage}/>
      <Footer/>
    </div>
  );
}

export default App;
