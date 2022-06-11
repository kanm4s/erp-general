import SubMenu from "./SubMenu";

export default function SectionMenu(props) {
  return (
    <div className="section-menu mb-4 text-zinc-500 dark:bg-gray-800 dark:text-gray-300">
      <h3 className="menu-header pl-6 2xl:pl-10 font-bold text-base mb-1 cursor-default">
        {props.header}
      </h3>
      {props.element.map((ele, idx) => {
        return (
          <SubMenu
            key={idx}
            icons={ele}
            name={props.name[idx].title}
            type={props.name[idx].type}
            notificationBell={props.name[idx].notificationBell}
          />
        );
      })}
    </div>
  );
}
