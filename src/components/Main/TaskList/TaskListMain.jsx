import React, { useContext, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

import TaskElement from "./TaskElement";
import TaskDetail from "./TaskDetail";
import { IoCreateOutline } from "react-icons/io5";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

import Pagination from "../../utils/Pagination";

export default function TaskListMain(props) {
  const { tasks, setTasks, loading } = props;
  const { projectId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [sortDateDesc, setSortDateDesc] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(9);
  const [showDetail, setShowDetail] = useState("");

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortDateDesc = () => {
    setSortDateDesc(!sortDateDesc);
    if (sortDateDesc) {
      setTasks(
        tasks.sort(
          (a, b) => new Date(b.Task.deadLine) - new Date(a.Task.deadLine)
        )
      );
    } else {
      setTasks(
        tasks.sort(
          (a, b) => new Date(a.Task.deadLine) - new Date(b.Task.deadLine)
        )
      );
    }
  };
  const handleShowDetail = (id) => {
    if (showDetail === "") {
      setShowDetail(id);
    } else {
      setShowDetail("");
    }
  };
  console.log(currentTasks);

  return (
    <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white dark:bg-gray-700 overflow-hidden">
      {/* Header */}
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div className="container relative right-1 grid grid-cols-5 py-[8px] 2xl:py-[18px]">
          <span className="flex dark:text-gray-200  text-zinc-400">Name</span>
          <span className="flex dark:text-gray-200 text-zinc-400">Type</span>
          <span className="flex dark:text-gray-200 text-zinc-400 gap-2">
            Delegate
          </span>
          <span className="flex dark:text-gray-200 text-zinc-400 gap-2">
            Deadline
            <div
              className="p-1 hover:bg-slate-300 dark:hover:text-gray-700 hover:text-slate-50 transition-all rounded"
              onClick={handleSortDateDesc}
            >
              <IoIosArrowDown className="cursor-pointer" />
            </div>
          </span>
          <span className="flex dark:text-gray-200 text-zinc-400 gap-2">
            Status
          </span>
        </div>
        <span className="flex text-zinc-400 justify-end py-[8px] 2xl:py-[18px]">
          <div className="p-1 hover:bg-slate-300 hover:text-slate-50 dark:hover:text-gray-700  transition-all rounded">
            <HiOutlineFilter className="cursor-pointer" />
          </div>
        </span>
      </div>

      {/* all tasks element */}
      {loading && <h2>loading ...</h2>}
      {showDetail
        ? currentTasks
            .filter((element) => {
              if (showDetail) {
                return element.Task.id === showDetail;
              } else {
                return "";
              }
            })
            .map((ele, idx) => (
              <div>
                <TaskElement
                  key={uuidv4()}
                  id={ele.Task.id}
                  name={ele.Task.name}
                  type={ele.Task.type}
                  delegateTo={ele.receiverTaskOwner?.firstName}
                  deadLine={ele.Task.deadLine}
                  showDetailFunction={handleShowDetail}
                  projectId={projectId}
                  workingStatus={ele.Task.workingStatus}
                />
                <TaskDetail
                  key={uuidv4()}
                  id={ele.Task.id}
                  user={user}
                  title={ele.Task.name}
                  delegateFrom={ele.senderTaskOwner?.firstName}
                  delegateTo={ele.receiverTaskOwner?.firstName}
                  delegateDate={dayjs(ele.updatedAt).format("YYYY-MM-DD")}
                  deadLine={ele.Task.deadLine}
                  brief={ele.Task.brief}
                  setShowDetail={setShowDetail}
                  workingStatus={ele.Task.workingStatus}
                />
              </div>
            ))
        : currentTasks?.map((ele, idx) => (
            <TaskElement
              key={uuidv4()}
              id={ele.Task.id}
              name={ele.Task.name}
              type={ele.Task.type}
              delegateTo={ele.receiverTaskOwner?.firstName}
              deadLine={ele.Task.deadLine}
              showDetailFunction={handleShowDetail}
              projectId={projectId}
              workingStatus={ele.Task.workingStatus}
            />
          ))}

      {/* {showDetail && } */}

      {/* pagination */}
      <div className="flex justify-between items-center p-1 mt-2 mr-1">
        {user.position === "Manager" && (
          <div
            className="p-1 hover:bg-slate-300 text-slate-500 hover:text-slate-50 dark:hover:text-gray-700 transition-all rounded cursor-pointer"
            onClick={() => navigate(`/Projects/${projectId}/createTask`)}
          >
            <IoCreateOutline className="text-lg" />
          </div>
        )}
        <div>
          <Pagination
            itemsPerPage={tasksPerPage}
            totalItems={tasks.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}
