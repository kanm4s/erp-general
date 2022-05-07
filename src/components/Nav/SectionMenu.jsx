import SubMenu from "./SubMenu";

export default function SectionMenu(props) {
    return (
        <div className="section-menu mb-4 text-zinc-500">
            <h3 className="menu-header pl-6 2xl:pl-10 font-bold text-base mb-1 cursor-default">
                {props.header}
            </h3>
            {props.element.map((ele, idx) => {
                return <SubMenu icons={ele} name={props.name[idx]} />;
            })}
        </div>
    );
}
