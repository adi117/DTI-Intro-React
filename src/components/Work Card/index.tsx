import {FC, ReactNode, useState} from "react";
import arrowIcon from "../../assets/arrow_forward.svg";
import arrowIconHover from "../../assets/arrow_forward_hover.svg";
import styled from "styled-components";


const WorkCard: FC<{children: ReactNode}> = ({children}) => {

    const [over, setOver] = useState(false);

    const ArrowButton = styled.button `
        padding: 20px;
        border-radius: 50%;
        border: 1px solid rgba(60, 61, 62, 1);
        height: 85px;
        width: 85px;
        background-color: white;

        &:hover {
            background-color: rgba(60, 61, 62, 1);
            border: none;
        }
    `;

    return (
        <div className="flex justify-between pb-8 w-full">
            <div className="flex flex-col gap-y-4">
                <div className="text-6xl">
                    {children}
                </div>
                <div className="flex text-lg gap-1.5">
                    <p>Brand Design</p>
                    <p>-</p>
                    <p>Webflow Development</p>
                    <p>-</p>
                    <p>Web Design</p>
                </div>
            </div>
            <ArrowButton
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
            >
                <img src={over ? arrowIconHover : arrowIcon} alt="" 
                />
            </ArrowButton>
        </div>
    );
};

export default WorkCard;