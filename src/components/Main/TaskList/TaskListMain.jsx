import React, { useEffect, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import TaskElement from "./TaskElement";
import tasksData from "./TaskData.json"; // tmp tasks data

const perChunk = 10; // items per chunk

const result = tasksData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
}, []);

export default function TaskListMain() {
    const [tasks, setTasks] = useState(result);
    const [sortDateDesc, setSortDateDesc] = useState(true);
    const [pages, setPages] = useState([...Array(tasks.length).keys()]);
    const [pageSelect, setPageSelect] = useState(0);
    const [taskPageShow, setTaskPageShow] = useState(tasks[pageSelect]);

    const handleSortDateDesc = () => {
        setSortDateDesc(!sortDateDesc);
        if (sortDateDesc) {
            setTaskPageShow(
                taskPageShow.sort(
                    (a, b) => new Date(b.deadline) - new Date(a.deadline)
                )
            );
        } else {
            setTaskPageShow(
                taskPageShow.sort(
                    (a, b) => new Date(a.deadline) - new Date(b.deadline)
                )
            );
        }
    };

    return (
        <div className="w-full h-fit px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
            {/* Header */}
            <div className="container columns-5 px-3 py-2 2xl:py-[14px] border-b-2 border-slate-300 border-dashed cursor-default">
                <span className="flex text-zinc-400">Project</span>
                <span className="flex text-zinc-400">Client</span>
                <span className="flex text-zinc-400 gap-2">Delegate</span>
                <span className="flex text-zinc-400 gap-2">
                    Deadline
                    <div
                        className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded"
                        onClick={handleSortDateDesc}
                    >
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
            {taskPageShow.map((ele, idx) => (
                <TaskElement
                    key={idx}
                    title={ele.title}
                    client={ele.client}
                    delegateTo={ele.delegateTo}
                    deadline={ele.deadline}
                />
            ))}

            {/* pagination */}
            <div className="flex justify-end p-1 mt-2 mr-1">
                {pages.map((ele, idx) => {
                    return (
                        <span
                            key={idx}
                            className="py-1 px-3 cursor-pointer hover:bg-slate-300 hover:text-slate-50 transition-all rounded mx-1"
                            onClick={(e) => {
                                setPageSelect(e.target.innerHTML - 1);
                                setTaskPageShow(tasks[pageSelect]);
                            }}
                        >
                            {idx + 1}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
