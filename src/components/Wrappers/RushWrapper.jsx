import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import RushHero from "../RushPage/RushHero";
import FAQ from "../RushPage/FAQ";
import ImageTrack from "../ImageTrack";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import RushVideo from "../RushPage/RushVideo";
import RushTimeline from "../RushPage/RushTimeline";
import VerticalRushTimeline from "../RushPage/VerticalRushTimeline";

export default function RushWrapper() {

    const showVerticalTimeline = useMediaQuery({ query: "(max-width: 1086px)" });

    const faqRef = useRef(null);
    const timelineRef = useRef(null);

    const images = [
        {image: "/pictures/rush_pictures/IMG_8114.jpeg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
        {image: "/pictures/rush_pictures/IMG_8119.jpeg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
        {image: "/pictures/rush_pictures/IMG_8124.jpeg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
        {image: "/pictures/rush_pictures/IMG_8130.jpeg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
        {image: "/pictures/rush_pictures/IMG_8139.jpeg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
        {image: "/pictures/rush_pictures/IMG_8145.jpeg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
        {image: "/pictures/rush_pictures/IMG_8151.jpeg", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
    ]

    return (
        <div className="overflow-x-hidden">
            <RushHero faqRef={faqRef} timelineRef={timelineRef} />
            <div className="h-0 -mt-96 lg:mt-0 xl:mt-0 lg:h-20 xl:h-20" />
            <div ref={faqRef}>
                <FAQ/>
            </div>
            <div className="h-10" />
            <div className="bg-blue w-full text-white justify-center flex flex-row text-2xl">
                <FaAnglesLeft size={42} />  <h1 className="ml-4 mr-4 mt-1.5">Drag Horizontally to explore</h1>
                <FaAnglesRight size={42} />
            </div>
            <div className="h-20" />
            {/* to edit images, go to ImageTrack component */}
            <ImageTrack images={images} /> 
            <div className="h-80" />
            <RushVideo/>
            <div className="h-20" />
            <div ref={timelineRef}>
                {showVerticalTimeline ? <VerticalRushTimeline /> : <RushTimeline /> }
            </div>
            <div className="h-20" />
        </div>
    )

}