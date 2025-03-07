import { FC, ReactNode, useState } from "react";
import arrowIcon from "../../assets/arrow_forward.svg";
import arrowIconHover from "../../assets/arrow_forward_hover.svg";


const WorkCard: FC<{ children: ReactNode }> = ({ children }) => {

    const [over, setOver] = useState(false);

    return (
        <div className="flex justify-between pb-8 w-full">
            <div className="flex flex-col gap-y-4">
                <div className="text-6xl">
                    {children}
                </div>
                <div className="flex text-lg gap-1.5 text-gray-600">
                    <p>Brand Design</p>
                    <p>-</p>
                    <p>Webflow Development</p>
                    <p>-</p>
                    <p>Web Design</p>
                </div>
            </div>
            <div
                className="p-5 rounded-full border-[1px] border-solid border-[#3c3d3e] h-[85px] w-[85px] bg-white hover:bg-[#3c3d3e] hover:border-none"
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
            >
                <img src={over ? arrowIconHover : arrowIcon} alt=""
                />
            </div>
        </div>
    );
};

export default WorkCard;