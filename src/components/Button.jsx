import React from "react";

export default function Button(props) {
    const text = props.text ? props.text : "Insert Text";
    const primary = props.type === "primary";

    const buttonAttributes = "flex items-center justify-center w-36 h-16 rounded-lg border-2 cursor-pointer";

    return (
        <div
            className={
                primary
                    ? `${buttonAttributes} bg-gold border-blue hover:bg-white`
                    : `${buttonAttributes} bg-white border-gold hover:bg-blue`
            }
            onClick={props.onClick} // Attach the onClick handler here
        >
            <h1 className={primary ? "text-blue text-2xl" : "text-gold text-2xl"}>
                {text}
            </h1>
        </div>
    );
}