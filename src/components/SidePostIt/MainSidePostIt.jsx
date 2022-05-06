import SidePostIt from "./SidePostIt";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function MainSidePostIt() {
    return (
        <aside className="w-56 2xl:w-72 bg-neutral-50 h-screen py-20 px-10 flex flex-col items-end gap-5 2xl:gap-8">
            <button className="h-8 text-xl 2xl:text-4xl text-zinc-500">
                <IoIosAddCircleOutline />
            </button>
            <SidePostIt />
            <SidePostIt />
            <SidePostIt />
            <SidePostIt />
        </aside>
    );
}
