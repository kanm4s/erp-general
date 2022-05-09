import { createContext, useState } from "react";

const NavToggle = createContext();

function NavContextProvider(props) {
    const [showMessage, setShowMessage] = useState(true);
    const [subMenuType, setSubMenuType] = useState("");

    const handleShowMessage = (type) => {
        setSubMenuType(type);
        if (showMessage) {
            switch (type) {
                case "Message":
                    setShowMessage(false);
                    return;
                default:
                    return;
            }
        } else {
            setShowMessage(true);
        }
    };

    return (
        <NavToggle.Provider
            value={{ handleShowMessage, showMessage, subMenuType }}
        >
            {props.children}
        </NavToggle.Provider>
    );
}

export { NavToggle, NavContextProvider };
