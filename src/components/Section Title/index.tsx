import { FC, ReactNode } from "react";
import styled from "styled-components";

interface SectionTitleProps {
    children: ReactNode;
}

const SectionTitle : FC <SectionTitleProps> = ({children}) => {
    const TitleWrapper = styled.div `
        height: 100%;
        background-color: white;
        color: rgba(11, 12, 14, 1);
        font-family: "PP Neue Montreal", sans-serif;
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        padding-left: 80px
    `;

    return (
        <div>
            <TitleWrapper>{children}</TitleWrapper>
        </div>
    );
};

export default SectionTitle;