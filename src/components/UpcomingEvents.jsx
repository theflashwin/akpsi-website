import React from "react";
import UpcomingEvent from "./UpcomingEvent";

export default function UpcomingEvents() {

    const events = {
        "1": {
            title: "Resume Blitz",
            text: "Come and show us your resume and get helpful feedback"
        }, 
        "2": {
            title: "Night 1 Rush",
            text: "Join us January Xth for our first night of rush"
        },
        "3": {
            title: "Night 2 Rush",
            text: "Join us January Yth for our second night of rush"
        },
        "4": {
            title: "AKPsi Party",
            text: "Malen is throwing a rager in Sq5"
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">

            {/* pictures */}
            <div className="invisible flex justify-center items-center lg:visible xl:visible">
                <img class="h-[32rem] w-auto rounded-lg border-gold border-4" src="/pictures/hero.jpg" alt="image description" />
            </div>

            {/* text */}
            <div className="ml-12 -mt-96 lg:mt-0 xl:mt-0 lg:ml-0 xl:ml-0 justify-center">

                <div className="text-blue text-6xl mb-12">
                    Upcoming Events
                </div>

                {Object.entries(events).map(([key, {title, text}]) => (
                    <div className="mb-12">
                        <UpcomingEvent number={key} title={title} text={text} />
                    </div>
                ))}

            </div>

        </div>
    )

}