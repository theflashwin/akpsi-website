import React from "react";

export default function BrotherCard(props) {
    
    console.log(props)

    return (
        <div className="w-full h-96 relative overflow-hidden">
            <img
                src={props.image}
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Blurred Image" />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white backdrop-blur-sm bg-black/30">
                {/* Text overlay positioned at the bottom left */}
                <h1 className="text-lg font-semibold">{props.name}</h1>
                <p className="text-sm">{props.major}</p>
            </div>
        </div>
    )
}