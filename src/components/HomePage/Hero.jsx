import React from "react";
import Tilt from 'react-vanilla-tilt'
import { TypeAnimation } from 'react-type-animation';
import Button from "../Button";

const images = [
    "/pictures/akpsi_drive_pictures/home_page_hero.jpeg"
]

export default function Hero() {

    const firstImageSrc = images[0];

    return (

        <div className="-ml-2 md:ml-7 lg:w-full xl:w-full w-[90%] h-auto bg-white">

            <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2">

                {/* Title */}
                <div className="w-full h-full m-8 text-center lg:text-left">
                    <div className="text-black text-5xl lg:text-8xl md:text-7xl sm:text-5xl mb-3">
                        Welcome to the home of <span className="text-gold">Georgia Tech</span> <span className="text-blue">AKPsi</span>
                    </div>
                    <div className="text-slate-700 lg:text-2xl mb-3">
                        Alpha Kappa Psi is a professional business fraternity for collegiate undergraduates dedicated to fostering leadership and ethical business practices.
                    </div>

                    <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
                        <Button text="Join Us" type="primary" route = "/rush" />
                        <Button text="Learn More" type="secondary" route = "/" />
                    </div>

                </div>


                {/* Pictures */}
                <div className="w-full h-full flex items-center justify-center mt-8 invisible lg:visible xl:visible">
                    <img class="h-[32rem] w-auto rounded-lg border-gold border-4" src={firstImageSrc} alt="image description" />
                </div>

            </div>

        </div>

    )

}