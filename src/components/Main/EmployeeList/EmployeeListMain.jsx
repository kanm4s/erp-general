import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

// import TaskElement from "./TaskElement";
import employeeData from "./EmployeeData.json"; // tmp tasks data
import EmployeeElement from "./EmployeeElement";
// import TaskDetail from "./TaskDetail";

const perChunk = 10; // items per page

const result = employeeData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new page
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
}, []);

export default function TaskListMain() {
    const [employees] = useState(result);
    const [sortDateDesc, setSortDateDesc] = useState(true);
    const [taskPageShow, setTaskPageShow] = useState(employees[0]);
    const [showSentEmail, setShowSentEmail] = useState("");

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

    const handleShowDetail = (id) => {
        if (showSentEmail === "") {
            setShowSentEmail(id);
        } else {
            setShowSentEmail("");
        }
    };

    return (
        <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
            {/* Header */}
            <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
                <div className="container relative right-1 columns-4 py-[8px] 2xl:py-[18px]">
                    <span className="flex text-zinc-400">Project</span>
                    <span className="flex text-zinc-400">Client</span>
                    <span className="flex text-zinc-400 gap-2">Delegate</span>
                </div>
                <span className="flex text-zinc-400 justify-end py-[8px] 2xl:py-[18px]">
                    <div className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded">
                        <HiOutlineFilter className="cursor-pointer" />
                    </div>
                </span>
            </div>

            {/* all employees element */}
            {showSentEmail
                ? taskPageShow
                      .filter((element) => {
                          if (showSentEmail) {
                              return element.id === showSentEmail;
                          } else {
                              return "";
                          }
                      })
                      .map((ele, idx) => (
                          <div>
                              <EmployeeElement
                                  key={idx}
                                  id={ele.id}
                                  firstName={ele.firstName}
                                  lastName={ele.lastName}
                                  position={ele.position}
                                  phoneNumber={ele.phoneNumber}
                                  email={ele.email}
                                  showDetailFunction={handleShowDetail}
                              />
                              {/* <TaskDetail
                                  title={ele.title}
                                  delegateFrom={ele.delegateFrom}
                                  delegateTo={ele.delegateTo}
                                  delegateDate={ele.delegateDate}
                                  deadline={ele.deadline}
                                  clientBrief={ele.clientBrief}
                              /> */}
                          </div>
                      ))
                : taskPageShow.map((ele, idx) => (
                      <EmployeeElement
                          key={idx}
                          id={ele.id}
                          firstName={ele.firstName}
                          lastName={ele.lastName}
                          position={ele.position}
                          phoneNumber={ele.phoneNumber}
                          email={ele.email}
                          showDetailFunction={handleShowDetail}
                      />
                  ))}
            {/* {showDetail && } */}

            {/* pagination */}
            <div className="flex justify-end p-1 mt-2 mr-1">
                {[...Array(employees.length).keys()].map((ele, idx) => {
                    return (
                        <span
                            key={idx}
                            className="py-1 px-3 cursor-pointer hover:bg-slate-300 hover:text-slate-50 transition-all rounded mx-1"
                            onClick={(e) => {
                                setTaskPageShow(
                                    employees[e.target.innerHTML - 1]
                                );
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
