import React from "react";

export default function RushTimeline() {
  const events = [
    { title: "Interest Night", date: "August 20th", location: "Tech Green @7:30" },
    { title: "Resume Blitz", date: "August 22nd", location: "IC 106 @7:30", bottom: true },
    { title: "Rush Night 1", date: "August 28th", location: "IC 203 @7:30" },
    { title: "Rush Night 2", date: "August 29th", location: "IC 107 @7:30", bottom: true },
    { title: "Rush Night 3", date: "August 30th", location: "IC 203 @7:30" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
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
              event.bottom ? "mt-52" : "-mt-36"
            }`}
          >
            {/* Connecting Line to Card */}
            <div className={`absolute w-1 bg-rose-900 ${event.bottom ? "top-0 -mt-8 h-24" : "bottom-0 h-24"}`}></div>

            {/* Event Content */}
            <div className="z-20 bg-amber-100 text-red-900 rounded-lg px-6 py-4 shadow-lg text-center">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-lg">{event.date}</p>
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
