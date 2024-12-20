import React, { useState } from "react";

import alumni from '../../assets/alumni.json'
import GlobeExample from "../AlumniPage/Globe";
import AlumniCard from "../AlumniPage/AlumniCard";
import CompanyPlacements from "../AlumniPage/CompanyPlacements";
import AlumniNewsletters from "../AlumniPage/AlumniNewsletters";

export default function AlumniWrapper() {

    const [shownClass, setShownClass] = useState("nothing")

    return (
        <div className="w-full h-auto">
            <div className="text-6xl text-rose-900 m-12">
                Alumni
            </div>
            <div className="h-5" />
            <div className="w-full h-auto flex justify-center items-center">
                <div className="w-[90%] flex flex-col justify-center items-center h-auto bg-gray-500 rounded-xl py-6">


                    {Object.entries(alumni).map(([className, members]) => (
                        <div key={className} className="w-full flex flex-col items-center">

                            {/* Title */}
                            <div onClick={() => {
                                if (shownClass == className) {
                                    setShownClass("none")
                                } else {
                                    setShownClass(className)
                                }
                            }} className="mt-2 w-11/12 h-auto bg-gold border-4 text-black border-stone-900 hover:text-white hover:bg-blue">
                                <div className="text-3xl m-6 ">
                                    {className}
                                </div>
                            </div>

                            {/* Alumni Members */}
                            <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${shownClass === className ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
                                }`}>
                                <div className="w-full items-center justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid lg:grid-cols-4 gap-5">
                                    {Object.entries(members).map(([name, details]) => (
                                        <AlumniCard name={name} link={details.linkedin} image={details.image} />
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

            <div className="w-full items-center justify-center flex">
                {/* <GlobeExample /> */}
            </div>

            <div className="h-10" />

            <CompanyPlacements />

            <div className="h-20" />

            <AlumniNewsletters />

        </div>

    )
}