import { FC, ReactNode } from "react";

const TestimonialCard : FC<{children: ReactNode}> = ({children}) => {

    return (
        <div className="flex">
            {children}
        </div>
    );

};

export default TestimonialCard;