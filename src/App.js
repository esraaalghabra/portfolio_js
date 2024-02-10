import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import Home from "./scenes/Home";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
import { SelectedPage } from "./shared/data";
import Contact from "./scenes/Contact";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0){
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className="bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelctedPage={setSelectedPage}/>
      <Skills setSelectedPage={setSelectedPage}/>
      <Projects setSelectedPage={setSelectedPage}/>
      <Contact setSelctedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
