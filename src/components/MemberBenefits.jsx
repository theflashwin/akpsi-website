import React from "react";

import UpcomingEvent from "./UpcomingEvent";

export default function MemberBenefits() {

    const benefits = {
        "1": {
            title: "Networking Opportunities",
            text: "Connect with professionals and mentors from various industries."
        },
        "2": {
            title: "Career Advancement",
            text: "Enhance your resume and make valuable connections to advance your career."
        },
        "3": {
            title: "Professional Development",
            text: "Gain valuable skills and knowledge through workshops, conferences, and mentorship programs."
        },
        "4": {
            title: "Lifelong Friends",
            text: "Form lasting friendships and build a network of support for your personal and professional life."
        }
    }

    return (
        <div className="w-full p-8 h-auto bg-[url('pictures/member-benefits-background.jpg')]">
            
            <div className="text-6xl mb-8 text-gold">
                Member Benefits
            </div>

            <div className="grid grid-cols-2">

            {Object.entries(benefits).map(([key, {title, text}]) => (
                    <div className="mb-40">
                        <UpcomingEvent number={key} title={title} text={text} box_color="gold" title_color="gold" text_color="gold" />
                    </div>
                ))}

            </div>

        </div>
    )

}