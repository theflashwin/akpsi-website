import React from "react";

import UpcomingEvent from "./UpcomingEvent";

export default function Brotherhood() {

    const benefits = {
        "1": {
            title: "Strong Bonds",
            text: "Our brotherhood is built on mutual respect, trust, and shared experiences, creating lasting bonds between members."
        },
        "2": {
            title: "Shared Interests",
            text: "Brothers share common interests and passions, fostering a sense of camaraderie and shared purpose."
        },
        "3": {
            title: "Supportive Network",
            text: "We provide a supportive network where brothers can rely on each other for guidance, encouragement, and mentorship."
        },
        "4": {
            title: "Big/Little Mentorship",
            text: "Fostering strong, personal connections through our Big/Little program, where experienced brothers guide, support, and help their Littles grow both personally and professionally."
        }
    }

    return (
        <div className="relative w-full p-8 h-auto bg-[url('/pictures/akpsi_drive_pictures/IMG_8161.jpeg')] bg-cover bg-center">
            {/* Overlay for opacity */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Content */}
            <div className="relative z-10">
                <div className="text-6xl mb-8 text-gold">
                    Our Brotherhood
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {Object.entries(benefits).map(([key, { title, text }]) => (
                        <div key={key} className="mb-40">
                            <UpcomingEvent 
                                number={key} 
                                title={title} 
                                text={text} 
                                box_color="gold" 
                                title_color="gold" 
                                text_color="gold" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
