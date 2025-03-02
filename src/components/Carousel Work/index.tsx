import { FC } from "react";
import { WorkImage } from "../../constants/workimage";


const CarouselWorkImage : FC<WorkImage> = ({url}) => {
    return (
        <div className="px-12 py-14 max-w-96 flex">
            <img src={url} alt="" className="w-64 object-cover"/>
        </div>
    );
};

export default CarouselWorkImage;