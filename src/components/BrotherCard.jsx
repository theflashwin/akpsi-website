import React from "react";

export default function BrotherCard() {
    return (
        <><body>
            <div class="your-element" data-tilt></div>

            <script type="text/javascript" src="vanilla-tilt.js"></script>
        </body><><div className="rounded-3xl w-60 h-60 relative overflow-hidden">
            <img
                src="IMG_0699.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Blurred Image" />
            <div className="absolute bottom-0 left-0 w-full p-4 text-white backdrop-blur-sm bg-black/30 rounded-b-3xl">
                {/* Text overlay positioned at the bottom left */}
                <h1 className="text-lg font-semibold">Brother Danger</h1>
                <p className="text-sm">B.S. in Danger</p>
            </div>
        </div><script type="text/javascript" src="vanilla-tilt.js"></script></></>
    )
}