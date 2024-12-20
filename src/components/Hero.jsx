import React from "react";
import Tilt from 'react-vanilla-tilt'
import { TypeAnimation } from 'react-type-animation';
import Button from "./Button";

const images = [
    "/pictures/akpsi_drive_pictures/home_page_hero.jpeg"
]

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 60,     // max tilt rotation (degrees)
    perspective: 100,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.5,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Hero() {
    return (

        <div className="ml-7 w-full h-auto bg-white">

            <div className="grid grid-cols-2 gap-6 p-6">

                {/* Title */}
                <div className="w-full h-full mt-8 ml-16">
                    <div className="text-black lg:text-8xl md:text-7xl sm:text-5xl mb-3">
                        Welcome to the home of <span className="text-gold">Georgia Tech</span> <span className="text-blue">AKPsi</span>
                    </div>
                    <div className="text-slate-700 lg:text-2xl mb-3">
                        Alpha Kappa Psi is a professional business fraternity for collegiate undergraduates dedicated to fostering leadership and ethical business practices.
                    </div>

                    <div className="flex flex-row gap-3">
                        <Button text="Join Us" type="primary" route = "/rush" />
                        <Button text="Learn More" type="secondary" route = "/" />
                    </div>

                </div>


                {/* Pictures */}
                <div className="w-full h-full flex items-center justify-center mt-8">
                    <img id="first_img" class="h-[32rem] w-auto rounded-lg border-gold border-4" alt="image description" />
                </div>

            </div>

        </div>

    )

}

first_img.src = images[0];