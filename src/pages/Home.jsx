import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaAnglesRight, FaCalendarDay, FaGraduationCap, FaInstagram, FaLink, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { MdAccountCircle, MdEmail } from "react-icons/md";

import HomeWrapper from "../components/HomeWrapper";
import { PiHandshakeBold } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";

export default function Home() {

    const [toggled, setToggled] = useState(false)
    const navigate = useNavigate()

    return (

        <div className="font-serif w-screen h-screen">

            <div className="flex">

                <div>

                    <div className={`fixed top-0 left-0 h-full bg-gold flex flex-col items-center transition-all duration-500 ${toggled ? "w-56" : "w-20"
                        }`}>
                        <FaAnglesRight onClick={() => {
                            setToggled(!toggled)
                        }} size={42} className={`mt-3 cursor-pointer transform transition-transform duration-500 ${toggled ? "rotate-180" : "rotate-0"
                            }`} />

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
                        <div className="flex flex-row gap-6 mt-3">
                            <FaLinkedin size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>LinkedIn</h1>
                        </div>
                        <div className="flex flex-row gap-6 mt-3">
                            <FaTiktok size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>TikTok</h1>
                        </div>
                        <div className="flex flex-row gap-6 mt-3">
                            <MdEmail size={42} className="" />
                            <h1 className={`text-xl mt-1.5 inline-block align-middle ${!toggled ? "hidden" : ""}`}>Email</h1>
                        </div>

                    </div>

                </div>

                <div className={`transition-all duration-500 ${toggled ? "ml-56" : "ml-20"
                    }`}>
                    <HomeWrapper />
                </div>

            </div>

        </div>

    )

}