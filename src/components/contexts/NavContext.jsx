import { createContext, useState } from "react";

const NavToggle = createContext();

function NavContextProvider(props) {
    const [showMessage, setShowMessage] = useState(true);
    const [checkSubMenuType, setCheckSubMenuType] = useState("");
    const [subMenuType, setSubMenuType] = useState("Message");

    const handleShowMessage = (type) => {
        setSubMenuType(type);

        if (checkSubMenuType === subMenuType) {
            setShowMessage(true);
            setCheckSubMenuType("");
            return;
        }
        if (!showMessage) {
            setShowMessage(true);
        }

        if (subMenuType) {
            setTimeout(() => {
                setSubMenuType(type);
                setCheckSubMenuType(type);
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
