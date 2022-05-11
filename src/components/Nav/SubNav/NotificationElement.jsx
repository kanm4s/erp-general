import React, { useState } from "react";

export default function NotificationElement() {
    const [toggleView, setToggleView] = useState(false);
    const handleToggleView = () => {
        setToggleView(!toggleView);
    };
    return (
        <div
            className={`${toggleView ? "h-auto" : "h-8"} w-full px-5 ${
                toggleView ? "py-4" : "py-1"
            } mb-3 rounded bg-invert-color shadow-lg text-main-color font-bold cursor-pointer`}
            onClick={handleToggleView}
        >
            <div className="relative">
                <p className="w-full mb-5">Task receive</p>

                <p
                    className={`w-full ${
                        toggleView ? "opacity-100" : "opacity-0"
                    }`}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quod autem repudiandae totam quis quasi quisquam iste id hic
                </p>
            </div>
        </div>
    );
}
