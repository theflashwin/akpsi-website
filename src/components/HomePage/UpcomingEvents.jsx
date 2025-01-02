import React from "react";
import UpcomingEvent from "./UpcomingEvent";

export default function UpcomingEvents() {

    const events = {
        "1": {
            title: "Resume Blitz",
            text: "Come and show us your resume and get helpful feedback"
        }, 
        "2": {
            title: "Interest Night",
            text: "Join us to learn more about AKPsi on Janurary 22nd"
        },
        "3": {
            title: "Recruitment Night 1",
            text: "Join us on Janurary 26th for the first name of rush (6:30 to 8:30)"
        },
        "4": {
            title: "Recruitment Night 2",
            text: "Join us on Janurary 27th for the first name of rush (7 to 9)"
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">

            {/* pictures */}
            <div className="flex justify-center items-center invisible lg:visible xl:visible">
                <img class="h-[32rem] w-auto rounded-lg border-gold border-4" src="/pictures/rush_pictures/IMG_8052.jpeg" alt="image description" />
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