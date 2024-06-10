import { useEffect, useRef, useState } from 'react';
import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import image from '../Content/quotation-mark-1.0.png';
import FloatingImage from '../Components/FloatingImage';
import ScrollHighlightText from '../Components/ScrollHighlightText';
import useWindowDimensions from '../Utils/UseWindowDimensions';

function AboutIntroPage({ scrollPos }) {
    const aboutIntroPageRef = useRef(null);
    const [pageHeight, setPageHeight] = useState(0);
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (aboutIntroPageRef.current) {
            const boundingRect = aboutIntroPageRef.current.getBoundingClientRect();
            setPageHeight(boundingRect.height);
            console.log(`VH from my way: ${boundingRect.height}`);
            console.log(`VH from other way: ${height}`);
        }
    }, [scrollPos]);
    
    return (
        <div ref={aboutIntroPageRef} className="About-pages">
            <div className='Fadeout-gradient-dark' />
            <FloatingImage image={image} left={30} top={10} rotation={0} scale={0.6} scrollPos={scrollPos} invertParalax={-1} />
            <FloatingImage image={image} left={160} top={10} rotation={0} scale={-0.6} scrollPos={scrollPos} invertParalax={-1} />
            <div className="Centered-container-horz-vert Middle Margin-to-center">
                <span className="Inter-black Spacing-medium Text-medium Text-white Drop-shadow-black">
                    I’m a web designer with computer science and video editing skills who can take your site to the <ScrollHighlightText scrollPos={scrollPos} pageHeight={pageHeight} displayText={"next level."} />
                </span>
            </div>
            <div className='Fadeout-gradient-compensation' />
        </div>
    );
}

export default AboutIntroPage;