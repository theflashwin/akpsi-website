import React from "react";

export default function AlumniCard(props) {

    return (
        <div className="flex flex-col items-center justify-center w-64 h-64 bg-transparent">
            {/* Circular Profile Icon */}
            <div className="w-32 h-32 bg-black rounded-full overflow-hidden flex items-center justify-center">
                <img
                    src={props.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name */}
            <p className="mt-4 text-xl font-bold text-black">{props.name}</p>

            {/* LinkedIn Link */}
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-800 text-lg hover:underline mt-1"
            >
                LinkedIn
            </a>
        </div>
    )

}