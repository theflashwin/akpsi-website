import React from "react";
import PledgeClass from "./BrotherPage/PledgeClass";

import BrotherCard from "./BrotherCard";
import brothers from '../assets/brothers.json'

export default function BrotherWrapper() {

    const classes = {
        "Spring  2024": "pcbanner.jpg",
        "Fall 2023": "pcbanner.jpg"
    }

    const bindings = [
        "Spring 2024",
        "Fall 2023",
    ]

    return (
        <div className="w-full h-auto">

            <div className="w-full text-5xl my-8 justify-center flex items-center text-black">
                Current Brothers
            </div>

            {Object.entries(classes).map(([title, image], index) => (
                <div key={index} className="w-full">

                    <div className="relative w-full h-[350px]">
                        {/* Background Image */}
                        <img
                            src={`/pictures/${image}`}
                            alt="Spring 2024"
                            className="w-full h-full object-cover brightness-90"
                        />

                        {/* Overlay Text */}
                        <div className="absolute bottom-6 left-6">
                            <h1 className="text-white text-6xl font-bold drop-shadow-md">
                                {title}
                            </h1>
                        </div>
                    </div>

                    {/* Brother Cards */}
                    <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 items-center justify-center">

                        {Object.entries(brothers[bindings[index]]).map(([name, details]) => (
                            <BrotherCard name={name} major={details.Major} image={details.Image} />
                        ))}

                    </div>

                </div>
            ))}

        </div>
    )

}