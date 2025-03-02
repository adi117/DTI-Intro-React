import { FC } from "react";
import { WebURL } from "../../constants/workcard";


const Work: FC<WebURL> = ({title, url}) => {

    return (
        <a className="!text-gray-900" href={url} target="_blank">
            {title}
        </a>
    );
};

export default Work;