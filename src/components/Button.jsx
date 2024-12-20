import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Button(props) {

    const text = props.text ? props.text : "Insert Text"
    const buttonAttributes = " flex items-center justify-center w-36 h-16 rounded-lg border-2"
    const divName = props.type == "primary" ? buttonAttributes + " bg-gold border-blue hover:bg-white" : buttonAttributes + " bg-white border-gold hover:bg-blue"
    const headerName = props.type == "primary" ? "text-blue text-2xl" : "text-gold text-2xl"
    const route = props.route? props.route : ""
    const navigate = useNavigate();

    return (
        <div onClick ={() => {navigate(route)}} className={divName}>
            <h1 className={headerName}>
                {text}
            </h1>
        </div>
    )

}