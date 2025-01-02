import React from "react";

export default function VerticalRushTimeline() {

    const events = [
        { title: "Interest Night", date: "Janurary 22nd", location: "Tech Green", time: "4:00-8:00 PM" },
        { title: "Resume Blitz", date: "TBA", location: "TBA", bottom: true, time: "TBA" },
        { title: "Rush Night 1", date: "Jan 26th", location: "IC 211", time: "6:30-8:30 PM" },
        { title: "Rush Night 2", date: "Jan 27th", location: "IC 111", bottom: true, time: "7:00-9:00 PM" },
        { title: "Closed Night", date: "Jan 29th", location: "Invite Only", time: "7:00 - 9:00 PM" },
    ];


    return (
        <div className="w-full flex justify-center items-center">

            <div className="w-[90%] h-auto flex justify-center items-center">

                <div className="w-2 h-[44rem] bg-rose-900" />
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    {events.map((event) => {
                        return (
                            <div className="w-full flex justify-center items-center">
                                <div className="-z-10 h-2 w-full bg-rose-900" />
                                <div className="z-20 bg-amber-100 text-red-900 rounded-lg px-6 py-4 shadow-lg text-center w-full">
                                    <h2 className="text-xl font-bold">{event.title}</h2>
                                    <p className="text-lg">{event.date}</p>
                                    <p className="text-lg">{event.time}</p>
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