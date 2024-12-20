import React from "react";

export default function CompanyPlacements() {

    const placements = [
        {name: "Google", logo: "/pictures/logos/google.png"},
        {name: "Google", logo: "/pictures/logos/google.png"},
        {name: "Google", logo: "/pictures/logos/google.png"},
        {name: "Google", logo: "/pictures/logos/google.png"},
        {name: "Google", logo: "/pictures/logos/google.png"},
        {name: "Google", logo: "/pictures/logos/google.png"},
        {name: "Google", logo: "/pictures/logos/google.png"},
        {name: "Google", logo: "/pictures/logos/google.png"},
    ]

    return (
        <div className="bg-[#e3d7a6] w-full h-auto">

            {/* Title */}
            <div className="text-6xl text-blue flex items-center justify-center">
                <div className="mt-5">
                    Company Placements
                </div>
            </div>

            <div className="mx-5 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-xl xl:grid-cols-4  gap-8">
                {placements.map((company) => (
                    <div
                        key={company.name}
                        className="w-full mb-12 h-40 flex justify-center items-center bg-white rounded-lg shadow-lg"
                    >
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="w-3/4 h-3/4 object-contain"
                        />
                    </div>
                ))}
            </div>

        </div>
    )

}