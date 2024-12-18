import React from "react";

export default function RushVideo() {

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-11/12 bg-gold h-auto rounded-xl text-center">

                <h1 className="text-6xl mt-12 mb-12 text-sky-900">Rush Video</h1>

                <iframe width="560" height="315" className="mx-auto mb-24" src="https://www.youtube.com/embed/v0YEaeIClKY?si=VgUvkf6qGkPQQ_kv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        </div>
    )

}