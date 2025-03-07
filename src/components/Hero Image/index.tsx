import { FC, useState } from "react";
import "../../global.css";
import Header from "../Header";
import heroImagePhoto from "../../assets/Hero-Image-Photo.webp";
import SlidingContent from "../Sliding Content";
import SideMenu from "../Sidemenu";

const HeroImage: FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex bg-[#c7d0d9] flex-col items-center h-screen relative overflow-x-hidden">
            <Header>
            </Header>
            <SlidingContent></SlidingContent>
            <img src={heroImagePhoto} alt="" className="w-[501px] m-0 absolute bottom-0 z-10"/>
            <button
                onClick={() => setIsOpen(true)}
                className="flex gap-7 justify-center items-center group absolute top-2/5 right-0 border-none bg-[#0b0c0e] px-8 py-5 rounded-l-full">
                <p className="text-6xl waving-hand">👋</p>
                <p className="text-4xl hidden group-hover:block">Hi I'm Ayush</p>
            </button>
            <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
}

export default HeroImage;