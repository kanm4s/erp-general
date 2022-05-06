export default function SubMenu(props) {
    return (
        <div className="menu-item pl-14 h-7 flex items-baseline transition ease-in-out hover:bg-teal-500 hover:text-slate-100 cursor-pointer">
            {props.icons}
            <h1 className="text-base pl-3">{props.name}</h1>
        </div>
    );
}
