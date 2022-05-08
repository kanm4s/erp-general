import { createContext, useState } from "react";

const NavToggle = createContext();

function NavContextProvider(props) {
    const [showMessage, setShowMessage] = useState(true);

    const handleShowMessage = () => {
        setShowMessage(!showMessage);
    };

    return (
        <NavToggle.Provider value={{ handleShowMessage, showMessage }}>
            {props.children}
        </NavToggle.Provider>
    );
}

export { NavToggle, NavContextProvider };
