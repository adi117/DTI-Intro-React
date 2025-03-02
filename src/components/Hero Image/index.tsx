import { FC } from "react";
import styled from "styled-components";
import "../../global.css";
import Header from "../Header";
import heroImagePhoto from "../../assets/Hero-Image-Photo.webp";
import SlidingContent from "../Sliding Content";

const HeroImage : FC = () => {

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
    `;

    return (
        <HeroImage>
            <Header>
            </Header>
            <SlidingContent></SlidingContent>
            <img src={heroImagePhoto} alt="" />
            <div>

            </div>
        </HeroImage>
    );
}

export default HeroImage;