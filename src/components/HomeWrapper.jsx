import React from "react";

import Hero from "./Hero";
import UpcomingEvents from "./UpcomingEvents";
import About from "./About";
import MemberBenefits from "./MemberBenefits";
import Brotherhood from "./Brotherhood";
import CoreValues from "./CoreValues";
import PresidentMessage from "./PresidentMessage";

export default function HomeWrapper() {

    return (
        <div className="w-full overflow-clip">
            <Hero/>
            <div className="w-full h-20"/>
            <UpcomingEvents/>
            <div className="w-full h-20"/>
            <About/>
            <div className="w-full h-20"/>
            <MemberBenefits/>
            <div className="w-full h-20"/>
            <Brotherhood/>
            <div className="w-full h-20"/>
            <CoreValues/>
            <div className="w-full h-20" />
            <PresidentMessage/>
        </div>
    )

}