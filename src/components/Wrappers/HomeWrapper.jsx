import React from "react";

import Hero from "../HomePage/Hero";
import UpcomingEvents from "../HomePage/UpcomingEvents";
import About from "../HomePage/About";
import MemberBenefits from "../HomePage/MemberBenefits";
import Brotherhood from "../HomePage/Brotherhood";
import CoreValues from "../HomePage/CoreValues";
import PresidentMessage from "../HomePage/PresidentMessage";

export default function HomeWrapper() {

    return (
        <div className="w-full overflow-clip">
            <Hero/>
            <div className="w-full -m-80 -mb-96 lg:mb-10 xl:mb-10 lg:m-0 xl:m-0 h-20"/>
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