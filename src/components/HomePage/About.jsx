import React from "react";
import Fact from "./Fact";

export default function About() {

    const facts = {
        "Founded in 1904": "Alpha Kappa Psi is the oldest professional business fraternity in the world, founded on the principles of brotherhood, service, and ethical leadership.",
        "Global Network": "With over 200,000 members worldwide, Alpha Kappa Psi provides a vast network of connections and opportunities for its members.",
        "Chapters": "Alpha Kappa Psi operates through a network of chapters across the United States and internationally, offering loval connections and networking opportunities.",
        "Focus on Business": "Our curriculum and activities are specifically tailored to develop business skills, leadership qualities, and professional networks.",
    }

    return (
        <div className="w-full h-auto">
            <div className="text-gold text-4xl lg:text-6xl md:text-5xl sm:text-4xl mb-6 ml-12">
                About Our Fraternity
            </div>

            <div className="px-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">

                {Object.entries(facts).map(([title, description]) => (
                    <Fact title={title} text={description} />
                ))}

            </div>

        </div>
    )

}