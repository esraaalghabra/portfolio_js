import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import WhatsApp from '../assets/WhatsApp.svg';
import Telegram from '../assets/Telegram.svg';

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

const Navbar = ({ selectedPage, setSelectedPage}) => {
    const [isMenueToggled, setIsMenueToggled] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const flexBetween = "flex items-center justify-between";
return (
    <nav>
        <div className={`${flexBetween} top-0 z-30 w-full py-6`}>
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
                            <div className="flex gap-4 border-l-2 border-white pl-8 py-2">
                                <a
                                className="hover:opacity-50 transition duration-500"
                                href="https://www.whatsapp.com"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <img alt="WhatsApp-link" src={WhatsApp} className='w-[24px] h-[24px]'/>
                                </a>
                                <a
                                className="hover:opacity-50 transition duration-500"
                                href="https://www.telegram.com"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <img alt="telegram-link" src={Telegram} className='w-[24px] h-[24px]'/>
                                </a>
                            </div>
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