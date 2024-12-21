import React from "react";

import Button from "../Button";

export default function RushHero({ faqRef, timelineRef }) {

    return (
        
        <div className="w-full h-auto mt-8 grid-cols-2 justify-center items-center grid lg:grid-cols-3 xl:grid-cols-3">

            {/* title */}
            <div className="col-span-2 w-full h-full">

                <div className="m-12 text-black text-4xl lg:text-7xl md:text-6xl sm:text-4xl mb-3">
                    Rush <span className="text-gold">Georgia Tech's</span> <span className="text-blue">Premier</span> <span className="text-rose-900">Professional</span> Fraternity
                </div>

                <div className="ml-14 mt-4 text-xl text-slate-700 lg:text-2xl xl:text-2xl mb-3">
                        Scroll down to learn more about Rush!
                </div>

                <div className="flex flex-row gap-3 ml-14 mt-6">
                    <Button text="FAQs" type="primary" scrollTo="faq-section" />
                    <Button text="Events" type="secondary" scrollTo="events-section" />
                </div>

            </div>

            {/* picture */}
            <div className="mr-5 invisible lg:visible xl:visible">
                <img class="h-[32rem] w-auto rounded-lg border-gold border-4" src="/pictures/rushhero.jpg" alt="image description" />
            </div>

        </div>
    )

}