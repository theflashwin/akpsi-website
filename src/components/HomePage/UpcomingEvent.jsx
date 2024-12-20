import React from "react";

export default function UpcomingEvent(props) {

    const number = props.number
    const title = props.title
    const text = props.text

    const box_color = props.box_color ? props.box_color : "blue"
    const title_color = props.title_color ? props.title_color : "blue"
    const text_color = props.text_color ? props.text_color : "slate-800"

    return (
        <div className="flex flex-row w-full">

            <div className={"col-span-1 w-16 h-16 flex justify-center items-center bg-" + box_color}>
                <h1 className="text-white text-3xl">{number}</h1>
            </div>

            <div className="w-20"></div>

            <div className="col-span-5">
                <h1 className={"text-3xl text-" + title_color}>
                    {title}
                </h1>
                <h3 className={"text-xl text-" + text_color}>
                    {text}
                </h3>
            </div>

        </div>
    )

}