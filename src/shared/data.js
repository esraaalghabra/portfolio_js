import cover1 from '../assets/cover 1.png'
import cover2 from '../assets/cover 2.png'
import cover3 from '../assets/cover 3.png'

import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
    RxGithubLogo,
    RxFigmaLogo,
} from "react-icons/rx";


export const SelectedPage = {
    Home: 'home',
    Skills: 'skills',
    Projects: 'projects',
    Contact: 'contact'
};

export const images = [cover1, cover2, cover3,cover1, cover2, cover3,cover1, cover2, cover3];


export const ServiceData = [
    {
    icon: RxGithubLogo,
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    bImage: cover1,
    },
    {
    icon: RxFigmaLogo,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bImage: cover2,
    },
    {
    icon: RxDesktop,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bImage: cover1,
    },
    {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bImage: cover3,
    },
    {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bImage: cover2,
    },
    {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bImage: cover1,
    },
];