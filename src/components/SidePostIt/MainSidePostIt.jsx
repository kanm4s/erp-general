import SidePostIt from "./SidePostIt";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function MainSidePostIt() {
    return (
        <aside className="hidden w-56 h-screen py-8 2xl:py-16 px-10 lg:flex flex-col items-end gap-5 2xl:gap-5 bg-neutral-50">
            <button className="h-8 2xl:text-xl text-zinc-500">
                <IoIosAddCircleOutline />
            </button>
            <SidePostIt />
            <SidePostIt />
            <SidePostIt />
            {/* <SidePostIt /> */}
        </aside>
    );
}
