import { FC } from "react"

interface GridComponentProps {
    children: React.ReactNode[];
}

const SectionGrid: FC<GridComponentProps> = ({children}) => {
    return (
        <div className="flex bg-white">
            <div className="flex-1">{children[0]}</div>
            <div className="flex-2">{children[1]}</div>
        </div>
    )
};

export default SectionGrid;