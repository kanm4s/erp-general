import { createContext, useState } from "react";

const NavToggle = createContext();

function NavContextProvider(props) {
    const [showMessage, setShowMessage] = useState(true);
    const [subMenuType, setSubMenuType] = useState("");

    const handleShowMessage = (type) => {
        if (!showMessage) {
            setShowMessage(true);
        }
        if (!subMenuType) {
            setSubMenuType(type);
        }

        if (subMenuType) {
            setTimeout(() => {
                setSubMenuType(type);
                switch (type) {
                    case "Message":
                        if (!showMessage) {
                            setTimeout(() => setShowMessage(false), 200);
                        } else {
                            setShowMessage(false);
                        }
                        return;
                    case "Notification":
                        if (!showMessage) {
                            setTimeout(() => setShowMessage(false), 200);
                        } else {
                            setShowMessage(false);
                        }
                        return;
                    default:
                        setShowMessage(true);
                        return;
                }
            }, 200);
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
