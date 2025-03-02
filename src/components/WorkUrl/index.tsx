import { FC } from "react";
import { WebURL } from "../../constants/workcard";

const WorkUrl: FC<WebURL> = ({title}) => {
    return (
        <div>
            {title}
        </div>
    )
};

export default WorkUrl;