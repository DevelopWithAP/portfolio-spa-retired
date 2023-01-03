import { useState } from "react";
import HoverableInfoDiv, { HoverableInfoDivProps } from "./HoverableInfoDiv";

export type ProjectItemInfoProps = HoverableInfoDivProps & {
    challenge: string;
    solution: string;
    features: string;
};

const ProjectItemInfo = ({ challenge, solution, features }: ProjectItemInfoProps) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div>
            <HoverableInfoDiv handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver} />
            {isHovering && (
                <div className='border rounded mx-1 my-1 p-2 divide-y'>  
                    <p>Challenge: {challenge}</p>
                    <p>Solution: {solution}</p>
                    <p>Features: {features}</p>
                </div>
            )}
        </div>
    );
};

export default ProjectItemInfo;