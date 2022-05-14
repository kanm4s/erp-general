import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import TaskElement from "./TaskElement";

export default function TaskListMain() {
    return (
        // <div className="w-full h-full px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
        //     {/* header */}
        //     <div className="flex py-2 items-center border-b-2 border-slate-300 border-dashed">
        //         <span className="flex basis-1/4 text-zinc-400">Project</span>
        //         <span className="flex basis-1/4 text-zinc-400">Client</span>
        //         <span className="flex basis-1/4 text-zinc-400 gap-1">
        //             Delegate
        //             <IoIosArrowDown className="relative top-[5px] cursor-pointer" />
        //         </span>
        //         <span className="flex basis-1/4 text-zinc-400 gap-1">
        //             Deadline
        //             <IoIosArrowDown className="relative top-[5px] cursor-pointer" />
        //         </span>
        //         <span className="flex basis-1/6 text-zinc-400 justify-end">
        //             <HiOutlineFilter className="cursor-pointer" />
        //         </span>
        //     </div>

        // {/* all element */}
        // <TaskElement />
        // <TaskElement />
        // <TaskElement />
        // <TaskElement />
        // <TaskElement />
        // <TaskElement />
        // </div>
        <div className="w-full h-full px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
            <div className="container columns-5 py-2 border-b-2 border-slate-300 border-dashed cursor-default">
                <span className="flex text-zinc-400">Project</span>
                <span className="flex text-zinc-400">Client</span>
                <span className="flex text-zinc-400 gap-2">
                    Delegate
                    <div className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded">
                        <IoIosArrowDown className="cursor-pointer" />
                    </div>
                </span>
                <span className="flex text-zinc-400 gap-2">
                    Deadline
                    <div className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded">
                        <IoIosArrowDown className="cursor-pointer" />
                    </div>
                </span>
                <span className="flex text-zinc-400 justify-end">
                    <div className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded">
                        <HiOutlineFilter className="cursor-pointer" />
                    </div>
                </span>
            </div>
            {/* all element */}
            <TaskElement />
            <TaskElement />
            <TaskElement />
            <TaskElement />
            <TaskElement />
            <TaskElement />
        </div>
    );
}
