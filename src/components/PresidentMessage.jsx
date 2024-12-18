import React from "react";

export default function PresidentMessage() {
    return (
        <>
            <div className="justify-center max-w-3xl mx-auto font-serif leading-relaxed p-4">
                <h1 className="text-center text-3xl font-bold text-gold mb-4">President’s Message</h1>
                <div className="flex justify-center mb-4">
                    <img src="/presidentHeadshot.png" alt="President" className="w-48 rounded-lg" />
                </div>
                <h2 className="text-center text-xl font-semibold text-gold mb-6">Rohan Daswani</h2>
                <p className="mb-4">
                    Welcome to the Alpha Kappa Psi (AKPsi) Epsilon Sigma Chapter at Georgia Tech! We’re excited to have you explore what
                    our professional business fraternity has to offer. As the current Chapter President, I’m proud to represent an
                    organization that has been a cornerstone of professional development and leadership at Georgia Tech for over six
                    decades.
                </p>
                <p className="mb-4">
                    Our chapter is home to a diverse group of students from various academic backgrounds, including Business, Economics,
                    Industrial Engineering, Computer Science, Computational Media, Mechanical Engineering, Neuroscience, and more. What
                    unites us is our shared commitment to personal growth and community impact.
                </p>
                <p className="mb-4">
                    At AKPsi, we believe in the power of unique perspectives. We encourage our members to bring their own experiences and
                    ideas to the table, creating a dynamic environment where innovation and collaboration thrive. Whether you’re interested
                    in technology, consulting, entrepreneurship, or any other field, AKPsi will provide the resources and support to help
                    you succeed.
                </p>
                <p className="mb-4">
                    Our Brothers are equipped with not just technical skills, but also the leadership and ethical grounding necessary to
                    navigate the professional world. The impact of our fraternity is evident in the achievements of our alumni, who have
                    gone on to create startups, contribute to top-tier companies, pursue advanced degrees, and make meaningful contributions
                    to their industries.
                </p>
                <p className="mb-4">
                    Being a part of AKPsi has deeply enriched my Georgia Tech experience, offering opportunities for growth, learning, and
                    connection that are truly unparalleled. We invite you to explore our community, learn more about our chapter’s
                    initiatives, and discover how AKPsi can help you achieve your goals. We look forward to the possibility of welcoming
                    you into our Brotherhood!
                </p>
            </div>
        </>
    );
}
