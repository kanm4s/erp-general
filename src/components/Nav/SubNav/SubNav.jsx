import { useContext } from "react";
import { NavToggle } from "../../contexts/NavContext";
import "./SubNav.css";

export default function SubNav() {
    const { showMessage } = useContext(NavToggle);
    return (
        <div
            className={`w-72 2xl:w-96 z-10 ${
                showMessage ? "Message-hidden" : "Message-show"
            } absolute bg-main-color h-screen py-8 2xl:py-16 flex flex-col justify-between transition-all`}
        >
            Message
        </div>
    );
}
