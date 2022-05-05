export default function SubMenu(props) {
    return (
        <div className="relative pl-3 menu-item flex items-baseline mb-2">
            {props.icons}
            <h1 className="text-lg pl-3 text-zinc-500 cursor-pointer">
                {props.name}
            </h1>
        </div>
    );
}
