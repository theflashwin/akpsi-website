import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [showMenu, setShowMenu]= useState(false)

    return (
        <div className="text-white bg-gradient-to-r from-sky-700 to-amber-600">
            <nav class="backdrop-blur-sm">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/user/dashboard" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/akpsilogo.png" class="h-12" alt="AKPsi Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alpha Kappa Psi | Epsilon Sigma</span>
                    </a>
                    <button onClick={() => {
                        setShowMenu(!showMenu)
                    }} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class={showMenu ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="/" class="block py-2 px-3 text-whit rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/rush" class="block py-2 px-3 text-white rounded md:border-0 md:p-0 dark:text-white">Rush</a>
                            </li>
                            <li>
                                <a href="/brothers" class="block py-2 px-3 text-white rounded md:border-0 md:p-0 dark:text-white">Brothers</a>
                            </li>
                            <li>
                                <a href="/gallery" class="block py-2 px-3 text-white rounded md:border-0 md:p-0 dark:text-white">Gallery</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}