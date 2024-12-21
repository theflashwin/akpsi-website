import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
    const text = props.text ? props.text : "Insert Text";
    const buttonAttributes = "flex items-center justify-center w-36 h-16 rounded-lg border-2";
    const divName =
        props.type === "primary"
            ? buttonAttributes + " bg-gold border-blue hover:bg-white"
            : buttonAttributes + " bg-white border-gold hover:bg-blue";
    const headerName = props.type === "primary" ? "text-blue text-2xl" : "text-gold text-2xl";
    const route = props.route ? props.route : "";
    const scrollTarget = props.scrollTo ? props.scrollTo : null;
    const navigate = useNavigate();

    const handleClick = () => {
        if (scrollTarget) {
            // Smooth scrolling to target section
            const targetElement = document.getElementById(scrollTarget);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        } else if (route) {
            // Navigate to route
            navigate(route);
        }
    };

    return (
        <div onClick={handleClick} className={divName}>
            <h1 className={headerName}>{text}</h1>
        </div>
    );
}