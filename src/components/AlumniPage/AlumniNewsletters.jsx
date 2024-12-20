import React from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import ImageTrack from "../ImageTrack";

export default function AlumniNewsletters() {

    const newsletters = [
        { image: "/pictures/newsletters/march2020.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" },
        { image: "/pictures/newsletters/march2020.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" },
        { image: "/pictures/newsletters/march2020.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" },
        { image: "/pictures/newsletters/march2020.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" },
        { image: "/pictures/newsletters/march2020.png", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" },
    ]

    return (
        <div className="w-full">

            {/* Title */}
            <div className="w-full flex items-center justify-center">
                <div className="text-black text-6xl">
                    Alumni Newsletters
                </div>
            </div>

            <div className="h-6" />

            {/* Slider */}
            <div className="bg-blue w-full text-white justify-center flex flex-row text-2xl">
                <FaAnglesLeft size={42} />  <h1 className="ml-4 mr-4 mt-1.5">Drag Horizontally to explore</h1>
                <FaAnglesRight size={42} />
            </div>

            <div className="h-20" />

            <ImageTrack images={newsletters} />

            <div className="h-80" />

        </div>
    )

}