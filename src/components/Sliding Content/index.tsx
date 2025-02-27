import { FC } from "react";
import styled from "styled-components";
import "../../global.css";

const SlidingContent: FC = () => {

    const Slider = styled.div `
        
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        z-index: 2;
        height: 100vh;

        p {
            color: white;
            font-family: "PP Neue Montreal", sans-serif;
            font-size: 150.38px;
            font-weight: 500;
            white-space:nowrap;
            overflow: hidden;
            position: absolute;
            bottom: 98px;
        }
    `;

    return (
        <Slider>
            <p>
                Webflow Developer - UI/UX Designer
            </p>
        </Slider>
    );

};

export default SlidingContent;