import React, { useContext, useEffect, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import TaskElement from "./TaskElement";
import TaskDetail from "./TaskDetail";
import { IoCreateOutline } from "react-icons/io5";
import { AuthContext } from "../../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { getAllTasksApi, getTasksByProjectIdApi } from "../../../api/project";
import Pagination from "../../utils/Pagination";

export default function TaskListMain() {
  const { projectId } = useParams();
  const { user } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  const [sortDateDesc, setSortDateDesc] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(9);
  const [showDetail, setShowDetail] = useState("");

  useEffect(() => {
    try {
      const fetchTask = async (id) => {
        if (!id) {
          setLoading(true);
          const res = await getAllTasksApi();
          setTasks(res.data.allTask);
          setLoading(false);
        } else {
          setLoading(true);
          const res = await getTasksByProjectIdApi(id);
          setTasks(res.data.tasks);
          setLoading(false);
        }
      };
      fetchTask(projectId);
    } catch (err) {
      console.log(err);
    }
  }, [projectId]);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortDateDesc = () => {
    setSortDateDesc(!sortDateDesc);
    if (sortDateDesc) {
      setTasks(
        tasks.sort((a, b) => new Date(b.deadLine) - new Date(a.deadLine))
      );
    } else {
      setTasks(
        tasks.sort((a, b) => new Date(a.deadLine) - new Date(b.deadLine))
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

  return (
    <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
      {/* Header */}
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div className="container relative right-1 columns-5 py-[8px] 2xl:py-[18px]">
          <span className="flex text-zinc-400">Name</span>
          <span className="flex text-zinc-400">Type</span>
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
        </div>
        <span className="flex text-zinc-400 justify-end py-[8px] 2xl:py-[18px]">
          <div className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded">
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
                return element.id === showDetail;
              } else {
                return "";
              }
            })
            .map((ele, idx) => (
              <div>
                <TaskElement
                  key={idx}
                  id={ele.id}
                  name={ele.name}
                  type={ele.type}
                  delegateTo={ele.delegateTo}
                  deadLine={ele.deadLine}
                  showDetailFunction={handleShowDetail}
                />
                <TaskDetail
                  user={user}
                  title={ele.name}
                  delegateFrom={ele.delegateFrom}
                  delegateTo={ele.delegateTo}
                  delegateDate={ele.delegateDate}
                  deadLine={ele.deadLine}
                  brief={ele.brief}
                />
              </div>
            ))
        : currentTasks?.map((ele, idx) => (
            <TaskElement
              key={idx}
              id={ele.id}
              name={ele.name}
              type={ele.type}
              delegateTo={ele.delegateTo}
              deadLine={ele.deadLine}
              showDetailFunction={handleShowDetail}
            />
          ))}

      {/* {showDetail && } */}

      {/* pagination */}
      <div className="flex justify-between p-1 mt-2 mr-1">
        {user.position === "Manager" && (
          <IoCreateOutline
            className="text-lg cursor-pointer"
            // onClick={handleCreateProject}
          />
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
