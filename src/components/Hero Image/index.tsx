import { FC } from "react";
import styled, {keyframes} from "styled-components";
import "../../global.css";
import Header from "../Header";
import heroImagePhoto from "../../assets/Hero-Image-Photo.webp";
import SlidingContent from "../Sliding Content";
import "../../heroImage.css";

const HeroImage : FC = () => {

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
            justify-content: end;
            align-items:end;
        }

        .waving-hand:hover {
            animation: ${wavingHand} 1s ease-in-out infinite;
        }
    `;

    return (
        <HeroImage>
            <Header>
            </Header>
            <SlidingContent></SlidingContent>
            <img src={heroImagePhoto} alt=""/>
            <button className="wave-hand-button">
                <p className="text-6xl waving-hand">👋</p>
            </button>
        </HeroImage>
    );
}

export default HeroImage;