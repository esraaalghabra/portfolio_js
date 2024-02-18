import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import SocialMenue from "../components/SocialMenue";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const navBorder = " border-b-2 border-blue" ;
    const lowerCasePage = page.toLowerCase().replace(/ /g,"");

    return (
        <AnchorLink
            className={`${
            selectedPage === lowerCasePage ? navBorder : ""
            } hover:text-blue-50 transition duration-500 font-light font-poppins`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
        );
    };

const Navbar = ({ selectedPage, isTopOfPage, setSelectedPage}) => {
    const [isMenueToggled, setIsMenueToggled] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const flexBetween = "flex items-center justify-between";
    const navBackground = isTopOfPage ? "" : "bg-slate-800 opacity-900 drop-shadow";
return (
    <nav className="relative">
        <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} m-auto w-5/6`}>
                    <h4 className="font-playfair text-2xl font-bold">Osama Abd <span className="text-blue">Al Malik</span> </h4>
                    {/* DESKTOP NAV */}
                    {isAboveMediumScreen ? (
                        <div className={`${flexBetween} gap-10`}>
                            <div className= {`${flexBetween} gap-16 font-poppins text-sm font-light`} >
                                <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            </div>
                            <SocialMenue border={true}/>
                        </div>
                    ) : (
                        <button
                        className=""
                        onClick={() => setIsMenueToggled(!isMenueToggled)}
                        >
                            {
                                isMenueToggled ? (<XMarkIcon  className="h-6 w-6 text-white"/>) 
                                :(<Bars3Icon className="h-6 w-6"/>)
                            }
                        </button>                   
                        ) }
            </div>
        </div>

{/* MOBILE MENU POPUP */}
    {!isAboveMediumScreen && (
        <div className={`space-y-4 px-4 mt-16 z-[60] py-7 bg-slate-800 ${isMenueToggled ? "block fixed top-0 right-0 left-0":"hidden"}`}>
            {/* CLOSE ICON */}
            {/* <div className="flex justify-end p-12">
            <button onClick={() => setIsMenueToggled(!isMenueToggled)}>
                <XMarkIcon className="h-6 w-6"/>
            </button>
            </div> */}
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 items-center text-2xl">
                <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <div className='mt-10 py-4 border-t-2 border-white flex flex-col items-center gap-6 justify-center text-sm'>
                <SocialMenue border={false}/>
                    © 2024 osama abd al malik. All right reserved</div>
            </div>
        </div>
    )}
    </nav>
)
}

export default Navbar