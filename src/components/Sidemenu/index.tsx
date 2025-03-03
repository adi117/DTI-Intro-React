import { FC } from "react";
import CloseIcon from "../../assets/close.svg";

interface SideMenuProps{
    isOpen : boolean;
    onClose : () => void;
}

const SideMenu : FC<SideMenuProps> = ({isOpen, onClose}) => {
    return (
        <div>
            <div 
                className={`fixed inset-0 bg-gray-950 transition-opacity ${isOpen ? "opacity-40 visible z-10" : "opacity-0 invisible z-10"}`} 
                onClick={onClose} 
            ></div>

            <div className={`fixed top-0 right-0 h-full w-1/2 bg-gray-950 p-6 pl-24 flex flex-col justify-center gap-28 transform ${isOpen ? "translate-x-0 z-10" : "translate-x-full z-10"} transition-transform duration-500 ease-in-out`}>
                <button 
                    onClick={onClose} 
                    className="absolute top-0 right-0"
                >
                    <img src={CloseIcon} alt="" className="w-20 top-14 right-14 p-3 bg-white rounded-full"/>
                </button>

                <ul className="text-6xl text-white font-medium flex flex-col gap-7">
                    <li className="list-disc"><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <ul className="flex gap-8">
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Webflow</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SideMenu;