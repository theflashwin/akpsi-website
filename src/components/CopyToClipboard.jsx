import React, { useState } from "react";

function CopyToClipboard({ email, children }) {
    const [tooltip, setTooltip] = useState(null);

    const handleCopyEmail = (event) => {
        // Copy email to clipboard
        navigator.clipboard.writeText(email);

        // Get cursor position
        const { clientX, clientY } = event;

        // Show tooltip near the cursor
        setTooltip({ x: clientX, y: clientY });

        // Hide tooltip after 2 seconds
        setTimeout(() => setTooltip(null), 1000);
    };

    return (
        <div>
            {/* Clickable Wrapper */}
            <div onClick={handleCopyEmail} className="cursor-pointer">
                {children}
            </div>

            {/* Tooltip */}
            {tooltip && (
                <div
                    style={{
                        position: "absolute",
                        top: tooltip.y + 20,
                        left: tooltip.x,
                        backgroundColor: "#333",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "0.8rem",
                        pointerEvents: "none",
                        zIndex: 1000,
                    }}
                >
                    Copied to clipboard!
                </div>
            )}
        </div>
    );
}

export default CopyToClipboard;