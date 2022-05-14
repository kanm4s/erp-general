import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Pagination from "./Pagination";
import TaskElement from "./TaskElement";
import tasksData from "./TaskData.json"; // tmp tasks data

export default function TaskListMain() {
    const [tasks, setTasks] = useState(tasksData);
    return (
        <div className="w-full h-fit px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
            <div className="container columns-5 px-3 py-2 2xl:py-[14px] border-b-2 border-slate-300 border-dashed cursor-default">
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

            {/* all tasks element */}
            {tasks.map((ele) => (
                <TaskElement
                    title={ele.title}
                    client={ele.client}
                    delegateTo={ele.delegateTo}
                    deadline={ele.deadline}
                />
            ))}
            <Pagination pageNumber={4} />
        </div>
    );
}
