import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import Home from "./scenes/Home";
import Skiles from "./scenes/Skiles";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => { 
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home/>
      <Skiles/>
    </div>
  );
}

export default App;
