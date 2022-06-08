import { useContext } from "react";
import { NavToggle } from "../../contexts/NavContext";

import "./MainNav.css";
import { PageSelect } from "../../contexts/PageContext";
import { useNavigate } from "react-router-dom";

export default function SubMenu(props) {
  const { handleShowMessage, setShowMessage, setCheckSubMenuType } =
    useContext(NavToggle);

  const { handleShowModal } = useContext(PageSelect);
  const navigate = useNavigate();
  return (
    <div
      className="menu-item pl-8 2xl:pl-14 h-7 flex items-baseline transition ease-in-out bg-main-nav hover:text-slate-100 cursor-pointer"
      onClick={
        props.type === "subMenu"
          ? () => handleShowMessage(props.name)
          : () => {
              navigate(props.name);
              handleShowModal(props.name);
              setShowMessage(false);
              setCheckSubMenuType("");
            }
      }
    >
      {props.icons}
      <h1 className="text-base pl-3">{props.name}</h1>
      {props.notificationBell && props.name === "Notification" ? (
        <span class="flex h-2 w-2 items-center justify-center ml-3 relative bottom-[1px]">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
