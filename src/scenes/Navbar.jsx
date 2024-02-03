import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import SocialMediaIcons from "../components/SocialMediaIcons";


const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage }) => {
    const navBorder = isTopOfPage ? " border-b-2 border-blue" : "border-b-2 border-white";
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${
            selectedPage === lowerCasePage ? navBorder : ""
            } hover:opacity-50 transition duration-500 font-light font-poppins`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
        );
    };

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenueToggled, setIsMenueToggled] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const navBackground = isTopOfPage ? "" : "bg-blue";
    const flexBetween = "flex items-center justify-between";
return (
    <nav>
        <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-8`}>
            <div className={`${flexBetween} m-auto w-5/6`}>
                    <h4 className="font-playfair text-2xl font-bold">Osama Abd <span className={`${isTopOfPage ? "text-blue" : ""} `}>Al Malik</span> </h4>
                    {/* DESKTOP NAV */}
                    {isAboveMediumScreen ? (
                        <div className={`${flexBetween} gap-10`}>
                            <div className= {`${flexBetween} gap-16 font-poppins text-sm font-light`} >
                                <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isTopOfPage={isTopOfPage}
                                />
                                <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isTopOfPage={isTopOfPage}
                                />
                                <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isTopOfPage={isTopOfPage}
                                />
                                <Link
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isTopOfPage={isTopOfPage}
                                />
                                <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isTopOfPage={isTopOfPage}
                                />
                            </div>
                            <SocialMediaIcons/>
                        </div>
                    ) : (
                        <button
                        className="rounded-full bg-blue p-2"
                        onClick={() => setIsMenueToggled(!isMenueToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>                   
                        ) }
            </div>
        </div>

{/* MOBILE MENU POPUP */}
    {!isAboveMediumScreen && isMenueToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-dark-grey drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
            <button onClick={() => setIsMenueToggled(!isMenueToggled)}>
                <XMarkIcon className="h-6 w-6"/>
            </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] items-start text-2xl">
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
                                page="Testimonials"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
            </div>
        </div>
    )}
    </nav>
)
}

export default Navbar