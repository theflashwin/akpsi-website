import React from "react";
import RushHero from "./RushPage/RushHero";
import FAQ from "./RushPage/FAQ";
import ImageTrack from "./ImageTrack";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import RushVideo from "./RushPage/RushVideo";
import RushTimeline from "./RushPage/RushTimeline";

export default function RushWrapper() {

    return (
        <div className="overflow-x-hidden">
            <RushHero/>
            <div className="h-20" />
            <FAQ/>
            <div className="h-10" />
            <div className="bg-blue w-full text-white justify-center flex flex-row text-2xl">
                <FaAnglesLeft size={42} />  <h1 className="ml-4 mr-4 mt-1.5">Drag Horizontally to explore</h1>
                <FaAnglesRight size={42} />
            </div>
            <div className="h-20" />
            {/* to edit images, go to ImageTrack component */}
            <ImageTrack/> 
            <div className="h-80" />
            <RushVideo/>
            <div className="h-20" />
            <RushTimeline/>
        </div>
    )

}