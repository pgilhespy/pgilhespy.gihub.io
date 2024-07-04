import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import { useState } from 'react';

const FadeoutCaptionText = ({ mainText, subText }) => {
    const [isHovered, setIsHovered] = useState(false);
 
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
 
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
 
    const subtextOpacity = isHovered ? '1' : '0';
    const subtextBlur = isHovered ? '0px' : '2px';

    return (
        <div className='Even-spread-to-edges Position-relative'>
            <span 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                className='Inter-black Spacing-tight Text-large Text-white Tight-fadeout-text'
            >
                { mainText }
            </span>
            <span 
                className='Inter-regular Spacing-normal Text-small Text-white Tight-fadeout-subText'
                style={{opacity: `${subtextOpacity}`, filter: `blur(${subtextBlur})`}}
            >
                { subText }
            </span>
        </div>
    );
}

export default FadeoutCaptionText;