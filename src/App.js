import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import Home from "./scenes/Home";
import Skills from "./scenes/Skills";
import Projects from "./scenes/Projects";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setSelectedPage("home");
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
      <Skills setSelctedPage={setSelectedPage}/>
      <Projects/>
    </div>
  );
}

export default App;
