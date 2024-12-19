import React from "react";

export default function BrotherCard(props) {
    return (
        <div className="rounded-3xl w-60 h-60 relative overflow-hidden">
            <img
                src={props.image}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Blurred Image" />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white backdrop-blur-sm bg-black/30 rounded-b-3xl">
                {/* Text overlay positioned at the bottom left */}
                <h1 className="text-lg font-semibold">{props.name}</h1>
                <p className="text-sm">{props.major}</p>
            </div>
        </div>
    )
}