import React from "react";
import BrotherCard from "./BrotherCard";

import brothers from '../../assets/brothers.json'

// DEPRACTED - MOVED TO BrotherWrapper
export default function PledgeClass(props) {

    const members = brothers["Fall 2023"]

    return (
        <div className="w-full">

            <div className="relative w-full h-[350px]">
                {/* Background Image */}
                <img
                    src="/pictures/pcbanner.jpg"
                    alt="Spring 2024"
                    className="w-full h-full object-cover brightness-90"
                />

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6">
                    <h1 className="text-white text-6xl font-bold drop-shadow-md">
                        {props.title}
                    </h1>
                </div>
            </div>

            {/* Brother Cards */}
            <div className="m-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 items-center justify-center">

                {Object.entries(members).map(([name, details]) => (
                    <BrotherCard name={name} major={details.major} image={details.image} />
                ))}

            </div>

        </div>
    )

}