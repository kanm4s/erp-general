import SubMenu from "./SubMenu";

export default function SectionMenu(props) {
    return (
        <div className="section-menu mb-10">
            <h3 className="menu-header font-bold text-2xl mb-3 text-zinc-500 cursor-default">
                {props.header}
            </h3>
            {props.element.map((ele, idx) => {
                return <SubMenu icons={ele} name={props.name[idx]} />;
            })}
        </div>
    );
}
