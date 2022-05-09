import { createContext, useState } from "react";

const NavToggle = createContext();

function NavContextProvider(props) {
    const [showMessage, setShowMessage] = useState(true);
    const [subMenuType, setSubMenuType] = useState("");

    const handleShowMessage = (type) => {
        setShowMessage(!showMessage);
        if (showMessage) {
            setSubMenuType(type);
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
