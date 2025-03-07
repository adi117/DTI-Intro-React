import { FC } from "react";
import "../../global.css";

const SlidingContent: FC = () => {

    return (
        <div className="flex justify-center items-center relative z-20 h-screen">
            <p className="text-white text-[150px] font-medium whitespace-nowrap overflow-hidden absolute bottom-24 running-text">
                Webflow Developer - UI/UX Designer
            </p>
        </div>
    );

};

export default SlidingContent;