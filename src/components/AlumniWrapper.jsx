import React from "react";

import alumni from '../assets/alumni.json'

export default function AlumniWrapper() {
    return (
        <div className="w-full h-auto">
            <div className="text-6xl text-rose-900 m-12">
                Alumni
            </div>
            <div className="h-20" />
            <div className="w-full h-auto flex flex-col justify-center items-center">
                <div className="w-[95%] m-6 h-auto bg-gray-500 rounded-xl mr-6">

                {/* {Object.entries(members).map(([name, details]) => (
                                    <div/>
                                ))} */}

                    {Object.entries(alumni).map(([className, members]) => (
                        <div className="">
                            <div className="">
                                
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}