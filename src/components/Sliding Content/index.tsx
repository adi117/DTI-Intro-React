import { FC } from "react";
import styled, {keyframes} from "styled-components";
import "../../global.css";

const SlidingContent: FC = () => {

    const runningText = keyframes`
            from { transform: translate(100%); }
            to { transform: translate(-100%); }
        `;

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
            animation: ${runningText} 20s linear infinite;
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