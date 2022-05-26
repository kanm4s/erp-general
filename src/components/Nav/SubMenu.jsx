import { useContext } from "react";
import { NavToggle } from "../../contexts/NavContext";

import "./MainNav.css";
import { PageSelect } from "../../contexts/PageContext";

export default function SubMenu(props) {
  const { handleShowMessage, setShowMessage, setCheckSubMenuType } =
    useContext(NavToggle);

  const { handleShowModal } = useContext(PageSelect);
  return (
    <div
      className="menu-item pl-8 2xl:pl-14 h-7 flex items-baseline transition ease-in-out bg-main-nav hover:text-slate-100 cursor-pointer"
      onClick={
        props.type === "subMenu"
          ? () => handleShowMessage(props.name)
          : () => {
              handleShowModal(props.name);
              setShowMessage(false);
              setCheckSubMenuType("");
            }
      }
    >
      {props.icons}
      <h1 className="text-base pl-3">{props.name}</h1>
    </div>
  );
}
