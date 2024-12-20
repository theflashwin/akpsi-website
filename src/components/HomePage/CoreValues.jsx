import React from "react";

export default function CoreValues() {
    return (
        <div className="max-w-5xl mx-auto font-serif p-6">
            <h1 className="text-center text-3xl font-bold text-gold mb-8">Our Core Values</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="text-center">
                    <img src="/brotherhood.png" alt="Brotherhood" className="w-16 h-16 mx-auto mb-4 object-contain" />
                    <h2 className="text-xl font-semibold text-blue mb-2">Brotherhood</h2>
                    <p>Cultivating strong bonds of friendship and support within the fraternity.</p>
                </div>
                <div className="text-center">
                    <img src="/unity.png" alt="Unity" className="w-16 h-16 mx-auto mb-4 object-contain" />
                    <h2 className="text-xl font-semibold text-blue mb-2">Unity</h2>
                    <p>Being together as a whole and supporting others within.</p>
                </div>
                <div className="text-center">
                    <img src="/service.png" alt="Service" className="w-16 h-16 mx-auto mb-4 object-contain" />
                    <h2 className="text-xl font-semibold text-blue mb-2">Service</h2>
                    <p>Serving our communities and giving back to those in need.</p>
                </div>
                <div className="text-center">
                    <img src="/integrity.png" alt="Integrity" className="w-16 h-16 mx-auto mb-4 object-contain" />
                    <h2 className="text-xl font-semibold text-blue mb-2">Integrity</h2>
                    <p>Honesty and ethical behavior are paramount in all our interactions.</p>
                </div>
                <div className="text-center">
                    <img src="/knowledge.png" alt="Knowledge" className="w-16 h-16 mx-auto mb-4 object-contain" />
                    <h2 className="text-xl font-semibold text-blue mb-2">Knowledge</h2>
                    <p>Information, skills, and experience gained through others and situation.</p>
                </div>
            </div>
        </div>
    );
}



