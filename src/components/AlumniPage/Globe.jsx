import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export default function GlobeExample() {
    const globeEl = useRef();

    // Example data: locations with latitude, longitude, and size
    const pointsData = [
        { lat: 37.7749, lng: -122.4194, size: 1, city: "San Francisco" },
        { lat: 40.7128, lng: -74.006, size: 1.5, city: "New York" },
        { lat: 51.5074, lng: -0.1278, size: 1, city: "London" },
        { lat: 35.6895, lng: 139.6917, size: 1.2, city: "Tokyo" },
    ];

    useEffect(() => {
        // Fly to San Francisco on mount
        globeEl.current.pointOfView({ lat: 37.7749, lng: -122.4194, altitude: 2 }, 500);
    }, []);

    return (
        <div>
            <div style={{ width: "20vw", height: "40vh" }}>
                <Globe
                    ref={globeEl}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    // globeImageUrl="//unpkg.com/three-globe/example/img/earth-gray.jpg"
                    backgroundColor="#000000"
                    pointsData={pointsData}
                    pointLat={(d) => d.lat}
                    pointLng={(d) => d.lng}
                    pointAltitude={(d) => d.size * 0.1}
                    pointColor={() => "red"}
                    pointLabel={(d) => `${d.city}`}
                    pointRadius={(d) => d.size * 0.1}
                    onPointClick={(point) => alert(`You clicked: ${point.city}`)}
                    globeScale={0.5}
                />
            </div>
        </div>
    );
};
