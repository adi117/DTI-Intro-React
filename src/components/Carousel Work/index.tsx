import { FC } from "react";
import { WorkImage } from "../../constants/workimage";


const CarouselWorkImage : FC<WorkImage> = ({url}) => {
    return (
        <div className="px-12 py-14 flex bg-gray-300 max-w-96 shadow-gray-400">
            <img src={url} alt="" className="w-full aspect-video object-contain"/>
        </div>
    );
};

export default CarouselWorkImage;