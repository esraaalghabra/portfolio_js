import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';

const SocialMediaIcons = () => {
    return (
    <div className="flex gap-4">
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="linkedin-link" src={LinkedIn} />
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="twitter-link" src={Twitter} />
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
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        >
        <img alt="instagram-link" src={Instagram} />
        </a>
    </div>
    );
};

export default SocialMediaIcons;
