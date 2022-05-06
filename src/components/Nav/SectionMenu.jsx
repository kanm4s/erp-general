import SubMenu from "./SubMenu";

export default function SectionMenu(props) {
    return (
        <div className="section-menu mb-10 text-zinc-500">
            <h3 className="menu-header pl-10 font-bold text-2xl mb-3 cursor-default">
                {props.header}
            </h3>
            {props.element.map((ele, idx) => {
                return <SubMenu icons={ele} name={props.name[idx]} />;
            })}
        </div>
    );
}
