import Facebook from '../assets/fac.svg';
import Instagram from '../assets/insta.svg';
import LinkedIn from '../assets/in.svg';
import Behince from '../assets/Be.svg';

const SocialMediaIcons = () => {
    return (
    <div className="flex gap-4">
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="facebook-link" src={Facebook} className='w-[24px] h-[24px]'/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.Linkedin.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="LinkedIn-link" src={LinkedIn} className='w-[24px] h-[24px]'/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.behince.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="Behince-link" src={Behince} className='w-[24px] h-[24px]'/>
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instgram.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="instgram-link" src={Instagram} className='w-[24px] h-[24px]'/>
        </a>
    </div>
    );
};

export default SocialMediaIcons;
