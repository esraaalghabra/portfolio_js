import Github from '../assets/Github.svg';
import Facebook from '../assets/mdi_facebook.svg';
import Telegram from '../assets/Telegram.svg';

const SocialMediaIcons = () => {
    return (
    <div className="flex gap-4">
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="Github-link" src={Github} />
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="facebook-link" src={Facebook} />
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.telegram.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="telegram-link" src={Telegram} />
        </a>
    </div>
    );
};

export default SocialMediaIcons;
