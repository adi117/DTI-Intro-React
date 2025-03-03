import { FC, useState } from "react";
import styled, {keyframes} from "styled-components";
import "../../global.css";
import Header from "../Header";
import heroImagePhoto from "../../assets/Hero-Image-Photo.webp";
import SlidingContent from "../Sliding Content";
import SideMenu from "../Sidemenu";

const HeroImage : FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const wavingHand = keyframes`
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4.0deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(14deg); }
        `;

    const HeroImage = styled.section `
        background-color: rgba(199, 208, 217, 1);
        display:flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        position: relative;
        overflow-x: hidden;

        img {
            max-width: 501px;
            margin: 0;
            position:absolute;
            bottom:0;
            z-index: 1;
        }

        .wave-hand-button {
            position: absolute;
            top: 40%;
            right: 0;
            background: rgba(11, 12, 14, 1);
            border: none;
            padding: 20px 30px;
            border-radius: 50px 0 0 50px;
        }

        .wave-hand-button:hover .waving-hand{
            animation: ${wavingHand} 1s ease-in-out infinite;
        }
    `;

    return (
        <HeroImage>
            <Header>
            </Header>
            <SlidingContent></SlidingContent>
            <img src={heroImagePhoto} alt=""/>
            <button 
            onClick={() => setIsOpen(true)}
            className="wave-hand-button flex gap-7 justify-center items-center group">
                <p className="text-6xl waving-hand">👋</p>
                <p className="text-4xl hidden group-hover:block">Hi I'm Ayush</p>
            </button>
            <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </HeroImage>
    );
}

export default HeroImage;