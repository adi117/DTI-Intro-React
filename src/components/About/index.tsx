import { FC } from "react";
import styled from "styled-components";
import "../../global.css";

const About : FC = () => {
    const AboutWrapper = styled.div `
    height: 200vh;
    background-color: white;
    `;

    return(
        <div>
            <AboutWrapper>About Me</AboutWrapper>
        </div>
    );
};

export default About;