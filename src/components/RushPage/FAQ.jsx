import React, { useState } from "react";

export default function FAQ() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [text, setText] = useState("Rush is the recruitment process for a fraternity. During rush, you will have the opportunity to learn more about Alpha Kappa Psi and to meet and talk to many of the brothers. While you get to know more about our fraternity and our brothers, we also get the chance to know more about you and to see if you would make a good fit in AKPsi!")

    const questions = {
        "What is Rush?": "Rush is the recruitment process for a fraternity. During rush, you will have the opportunity to learn more about Alpha Kappa Psi and to meet and talk to many of the brothers. While you get to know more about our fraternity and our brothers, we also get the chance to know more about you and to see if you would make a good fit in AKPsi!",
        "How many nights of rush do I need to attend?": "Uhhhhhh 2-3 I think",
        "What's the criteria for getting a bid?": "god knows bro good luck ur cooked",
        "What is a PIS": "it where we just blankly stare and vibe check you",
        "What qualifications do I need to rush?": "nothing",
    }

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-11/12 bg-gold h-auto rounded-xl text-center">

                <h1 className="text-6xl mt-12 mb-12 text-sky-900">Rush FAQ's</h1>
                <h2 className="text-3xl text-sky-900">{text}</h2>

                <div className="p-6 w-full justify-center grid grid-cols-5 gap-6">

                {Object.entries(questions).map(([question, answer], index) => (
                    <div key={index} onClick={() => {
                        setActiveIndex(index)
                        setText(answer)
                    }} className={` w-auto flex items-center justify-center h-auto p-6 rounded-lg 
                        ${activeIndex == index ? "bg-rose-600" : "bg-rose-900"}`}>
                        <div className="text-2xl text-white">
                            {question}
                        </div>
                    </div>
                ))}

                </div>

            </div>
        </div>
    )

}