import WhatsApp from '../assets/WhatsApp.svg';
import Telegram from '../assets/Telegram.svg';

const SocialMediaIcons = () => {
    return (
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
    );
};

export default SocialMediaIcons;
