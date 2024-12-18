import React from "react";

export default function Fact(props) {
    return (
        <div className="bg-rose-900 w-full h-56 text-white rounded-lg">

            {/* title */}
            <div className="m-5 text-3xl">
                {props.title}
            </div>

            {/* text */}
            <div className="m-5 text-2xl">
                {props.text}
            </div>

        </div>
    )
}