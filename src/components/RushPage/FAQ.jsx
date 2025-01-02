import React, { useState } from "react";

export default function FAQ() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [text, setText] = useState("Rush is the recruitment process for a fraternity. During rush, you will have the opportunity to learn more about Alpha Kappa Psi and to meet and talk to many of the brothers. While you get to know more about our fraternity and our brothers, we also get the chance to know more about you and to see if you would make a good fit in AKPsi!")

    const questions = {
        "What is Rush?": "Rush is the recruitment process for a fraternity. During rush, you will have the opportunity to learn more about Alpha Kappa Psi and to meet and talk to many of the brothers. While you get to know more about our fraternity and our brothers, we also get the chance to know more about you and to see if you would make a good fit in AKPsi!",
        "How many nights of rush do I need to attend?": "You must attend at least one open night of rush and complete a PIS interview. However, it is encouraged that you attend both nights and closed night (if invited) to increase your chances of getting a bid.",
        "What's the criteria for getting a bid?": "We are looking for driven people who are looking to grow professionally. We are also a fraternity, so we are also looking for a social fit. There are no major requirements or year requirements.",
        "What is a PIS?": "The PIS is a 30-minute virtual behavioral interview with you and two Brothers. The Brothers will ask you a series of questions to get to know you better as a person and evaluate your fit into AKPsi. It gives us a chance to talk to you outside of the rush atmosphere and to know more about you on a professional and personal level.",
        "What qualifications do I need to rush?": "There are no qualifications needed to rush! Just be your authentic self and we will look for a mutual fit.",
    }

    return (
        <div id="faq-section" className="w-full flex justify-center items-center">
            <div className="w-11/12 bg-gold h-auto rounded-xl text-center">

                <h1 className="text-6xl mt-12 mb-12 text-sky-900">Rush FAQ's</h1>
                <h2 className="text-3xl text-sky-900 p-6">{text}</h2>

                <div className="p-6 w-full justify-center grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6">

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