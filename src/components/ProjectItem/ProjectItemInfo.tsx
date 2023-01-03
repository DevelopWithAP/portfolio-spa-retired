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
                <div className='border rounded mx-1 my-1 p-2 divide-y bg-neutral-200 dark:bg-slate-600'>
                    <p><span className='text-neutral-400 underline'>Challenge</span>: {challenge}</p>
                    <p><span className='text-neutral-400 underline'>Solution</span>: {solution}</p>
                    <p><span className='text-neutral-400 underline'>Features</span>: {features}</p>
                </div>
            )}
        </div>
    );
}

export default ProjectItemInfo;