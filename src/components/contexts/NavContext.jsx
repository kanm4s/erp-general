import { createContext, useState } from "react";

const NavToggle = createContext();

function NavContextProvider(props) {
    const [showMessage, setShowMessage] = useState(false);
    const [checkSubMenuType, setCheckSubMenuType] = useState("");
    const [subMenuType, setSubMenuType] = useState("Message");

    const handleShowMessage = (type) => {
        setSubMenuType(type);

        if (checkSubMenuType === subMenuType) {
            setShowMessage(false);
            setCheckSubMenuType("");
            return;
        }
        if (showMessage) {
            setShowMessage(false);
        }

        if (subMenuType) {
            setTimeout(() => {
                setSubMenuType(type);
                setCheckSubMenuType(type);
                switch (type) {
                    case "Message":
                        if (showMessage) {
                            setTimeout(() => setShowMessage(true), 200);
                        } else {
                            setShowMessage(true);
                        }
                        return;
                    case "Notification":
                        if (showMessage) {
                            setTimeout(() => setShowMessage(true), 200);
                        } else {
                            setShowMessage(true);
                        }
                        return;
                    default:
                        setShowMessage(false);
                        return;
                }
            }, 200);
        } else {
            setShowMessage(false);
        }
    };

    return (
        <NavToggle.Provider
            value={{
                handleShowMessage,
                showMessage,
                setShowMessage,
                subMenuType,
                setSubMenuType,
            }}
        >
            {props.children}
        </NavToggle.Provider>
    );
}

export { NavToggle, NavContextProvider };
