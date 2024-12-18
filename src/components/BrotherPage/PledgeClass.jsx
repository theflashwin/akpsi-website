import React from "react";

export default function PledgeClass(props) {

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

            

        </div>
    )

}