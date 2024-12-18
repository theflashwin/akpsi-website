import React from "react";
import PledgeClass from "./BrotherPage/PledgeClass";

export default function BrotherWrapper() {

    const classes = {
        "Spring  2024": "pcbanner.jpg",
        "Fall 2023": "pcbanner.jpg"
    }

    return (
        <div className="w-full h-auto">

            <div className="w-full text-5xl my-8 justify-center flex items-center text-black">
                Current Brothers
            </div>

            {Object.entries(classes).map(([title, image], index) => (
                <PledgeClass key={index} className="w-full" title={title} image={image} />
            ))}

        </div>
    )

}