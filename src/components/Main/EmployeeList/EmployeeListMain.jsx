import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { useEmployee } from "../../../contexts/EmployeeContext";
import Pagination from "../../utils/Pagination";

// import TaskElement from "./TaskElement";
import EmployeeElement from "./EmployeeElement";
// import TaskDetail from "./TaskDetail";

export default function TaskListMain() {
  const { employees } = useEmployee();

  const [allEmployees] = useState(employees);
  const [showSentEmail, setShowSentEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(9);

  const indexOfLastTask = currentPage * employeesPerPage;
  const indexOfFirstTask = indexOfLastTask - employeesPerPage;
  const currentProjects = allEmployees.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleShowDetail = (id) => {
    if (showSentEmail === "") {
      setShowSentEmail(id);
    } else {
      setShowSentEmail("");
    }
  };

  return (
    <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white dark:bg-gray-700  overflow-hidden">
      {/* Header */}
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div className="container relative right-1 grid grid-cols-4 py-[8px] 2xl:py-[18px]">
          <span className="flex dark:text-gray-200 text-zinc-400">Name</span>
          <span className="flex dark:text-gray-200 text-zinc-400">
            Position
          </span>
          <span className="flex dark:text-gray-200 text-zinc-400 gap-2">
            Phone
          </span>
        </div>
        <span className="flex text-zinc-400 justify-end py-[8px] 2xl:py-[18px]">
          <div className="p-1 hover:bg-slate-300 hover:text-slate-50 dark:hover:text-gray-700 transition-all rounded">
            <HiOutlineFilter className="cursor-pointer" />
          </div>
        </span>
      </div>

      {/* all employees element */}
      {showSentEmail
        ? currentProjects
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
        : currentProjects.map((ele, idx) => (
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
      <div className="flex justify-end items-center p-1 mt-2 mr-1">
        <Pagination
          itemsPerPage={employeesPerPage}
          totalItems={allEmployees.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
