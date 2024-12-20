import React from "react";

export default function VerticalRushTimeline() {

    const events = [
        { title: "Interest Night", date: "August 20th", location: "Tech Green @7:30" },
        { title: "Resume Blitz", date: "August 22nd", location: "IC 106 @7:30", bottom: true },
        { title: "Rush Night 1", date: "August 28th", location: "IC 203 @7:30" },
        { title: "Rush Night 2", date: "August 29th", location: "IC 107 @7:30", bottom: true },
        { title: "Rush Night 3", date: "August 30th", location: "IC 203 @7:30" },
    ];


    return (
        <div className="w-full flex justify-center items-center">

            <div className="w-[90%] h-auto flex justify-center items-center">

                <div className="w-2 h-[36rem] bg-rose-900" />
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    {events.map((event) => {
                        return (
                            <div className="w-full flex justify-center items-center">
                                <div className="-z-10 h-2 w-full bg-rose-900" />
                                <div className="z-20 bg-amber-100 text-red-900 rounded-lg px-6 py-4 shadow-lg text-center w-full">
                                    <h2 className="text-xl font-bold">{event.title}</h2>
                                    <p className="text-lg">{event.date}</p>
                                    <p className="text-lg italic">{event.location}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )

}