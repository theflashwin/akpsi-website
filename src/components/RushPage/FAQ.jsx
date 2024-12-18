import React, { useState } from "react";

export default function FAQ() {

    const [show, setShow] = useState(false)
    const [text, setText] = useState("something")

    const questions = {
        "What is Rush?": "answer",
        "How many nights of rush do I need to attend?": "answer",
        "What's the criteria for getting a bid?": "answer",
        "What is a PIS": "answer",
        "What qualifications do I need to rush?": "answer",
    }

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-11/12 bg-gold h-96 rounded-xl text-center">

                <h1 className="text-6xl mt-12 mb-12 text-sky-900">Rush FAQ's</h1>
                <h2 className="text-3xl text-sky-900">Rush is the recruitment process for a fraternity. During rush, you will have the opportunity to learn more about Alpha Kappa Psi and to meet and talk to many of the brothers. While you get to know more about our fraternity and our brothers, we also get the chance to know more about you and to see if you would make a good fit in AKPsi!</h2>

                

            </div>
        </div>
    )

}