import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { FaAnglesRight, FaCalendarDay, FaGraduationCap, FaInstagram, FaLink, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { MdAccountCircle, MdEmail } from "react-icons/md";

import HomeWrapper from "../components/Wrappers/HomeWrapper";
import { PiHandshakeBold } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import RushWrapper from "../components/Wrappers/RushWrapper";

export default function Rush() {

    const [toggled, setToggled] = useState(false)
    const navigate = useNavigate()

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (

        <div className="font-serif w-screen h-screen">

            <div className="flex">

                <div>

                    <div className={`fixed top-0 left-0 h-full bg-gold flex flex-col items-center transition-all duration-500 ${toggled ? "w-56" : "w-20"
                        }`}>
                        <FaAnglesRight onClick={() => {
                            setToggled(!toggled && !isMobile)
                        }} size={42} className={`mt-3 cursor-pointer transform transition-transform duration-500 ${toggled ? "rotate-180" : "rotate-0"
                            } ${isMobile ? "invisible" : "visible"}`} />

                        <div className="h-36" />

                        <div onClick={() => navigate("/")} className="flex flex-row gap-6 cursor-grab">
                            <MdAccountCircle size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>About Us</h1>
                        </div>
                        <div onClick={() => navigate("/rush")} className="flex flex-row gap-6 mt-3">
                            <PiHandshakeBold size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>Rush Info</h1>
                        </div>
                        <div onClick={() => navigate("/brothers")} className="flex flex-row gap-6 mt-3">
                            <IoPeopleSharp size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>Brothers</h1>
                        </div>
                        <div onClick={() => navigate("/alumni")} className="flex flex-row gap-6 mt-3">
                            <FaGraduationCap size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>Alumni</h1>
                        </div>
                        <div onClick={() => navigate("/calendar")} className="flex flex-row gap-6 mt-3">
                            <FaCalendarDay size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>Calendar</h1>
                        </div>

                        <div className="h-20" />
                        <div className="w-4/5 h-0.5 bg-black rounded-lg" />
                        <div className="h-20" />

                        <div onClick={() => navigate("/instagram")} className="flex flex-row gap-6 mt-3">
                            <FaInstagram size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>Instagram</h1>
                        </div>
                        <div onClick={() => navigate("/linkedin")} className="flex flex-row gap-6 mt-3">
                            <FaLinkedin size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>LinkedIn</h1>
                        </div>
                        <div onClick={() => navigate("/tiktok")} className="flex flex-row gap-6 mt-3">
                            <FaTiktok size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>TikTok</h1>
                        </div>
                        <div onClick={() => navigate("/email")} className="flex flex-row gap-6 mt-3">
                            <MdEmail size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>Email</h1>
                        </div>

                    </div>

                </div>

                <div className={`transition-all duration-500 ${toggled ? "ml-56" : "ml-20"
                    }`}>
                        <RushWrapper/>
                </div>

            </div>

        </div>


    )
}