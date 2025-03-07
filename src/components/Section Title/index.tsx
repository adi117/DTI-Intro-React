import { FC, ReactNode } from "react";

interface SectionTitleProps {
    children: ReactNode;
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
    return (
        <div>
            <div className="h-full bg-white text-[#0b0c0e] text-[40px] pl-20 font-medium">
                {children}
            </div>
        </div>
    );
}

export default SectionTitle;