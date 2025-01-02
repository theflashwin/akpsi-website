import React from "react";
import { time } from "three/tsl";

export default function RushTimeline() {
  const events = [
    { title: "Interest Night", date: "Janurary 22nd", location: "Tech Green", time: "4:00-8:00 PM" },
    { title: "Resume Blitz", date: "TBA", location: "TBA", bottom: true, time: "TBA" },
    { title: "Rush Night 1", date: "Jan 26th", location: "IC 211", time: "6:30-8:30 PM" },
    { title: "Rush Night 2", date: "Jan 27th", location: "IC 111", bottom: true, time: "7:00-9:00 PM" },
    { title: "Closed Night", date: "Jan 29th", location: "Invite Only", time: "7:00 - 9:00 PM" },
  ];


  return (
    <div id="events-section" className="w-full flex flex-col items-center">
      {/* Title */}
      <h1 className="text-5xl font-bold text-rose-900 mb-12">Rush Timeline</h1>

      {/* Timeline Container */}
      <div className="relative flex items-center justify-between w-11/12 mx-auto">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-rose-900 transform -translate-y-1/2"></div>

        {/* Event Cards */}
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center ${
              event.bottom ? "mt-60" : "-mt-44"
            }`}
          >
            {/* Connecting Line to Card */}
            <div className={`absolute w-1 bg-rose-900 ${event.bottom ? "top-0 -mt-8 h-24" : "bottom-0 h-24"}`}></div>

            {/* Event Content */}
            <div className="z-20 bg-amber-100 text-red-900 rounded-lg px-6 py-4 shadow-lg text-center">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-lg">{event.date}</p>
              <p className="text-lg">{event.time}</p>
              <p className="text-lg italic">{event.location}</p>
            </div>

            {/* Dot Indicator */}
            <div className="w-6 h-6 bg-red-900 rounded-full mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}