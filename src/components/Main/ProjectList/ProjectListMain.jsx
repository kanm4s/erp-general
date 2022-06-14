import React, { useContext, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { ProjectContext } from "../../../contexts/ProjectContext";
import Pagination from "../../utils/Pagination";
import ProjectElement from "./ProjectElement";
import { v4 as uuidv4 } from "uuid";

export default function ProjectListMain() {
  const { project, loading } = useContext(ProjectContext);
  const navigate = useNavigate();

  const [projects, setProject] = useState(project);
  const [sortDateDesc, setSortDateDesc] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(9);

  const indexOfLastTask = currentPage * projectsPerPage;
  const indexOfFirstTask = indexOfLastTask - projectsPerPage;
  const currentProjects = projects?.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortDateDesc = () => {
    setSortDateDesc(!sortDateDesc);
    if (sortDateDesc) {
      setProject(
        projects.sort((a, b) => new Date(b.deadLine) - new Date(a.deadLine))
      );
    } else {
      setProject(
        projects.sort((a, b) => new Date(a.deadLine) - new Date(b.deadLine))
      );
    }
  };

  const handleCreateProject = () => {
    navigate("/Projects/create");
  };

  const handleNavigateToTasks = (id) => {
    navigate(`/Projects/${id}`);
  };

  return (
    <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white dark:bg-gray-700 overflow-hidden">
      {/* Header */}
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div className="container relative right-1 grid grid-cols-6 py-[8px] 2xl:py-[18px]">
          <span className="flex dark:text-gray-200 text-zinc-400 ">
            Project
          </span>
          <span className="flex dark:text-gray-200 text-zinc-400">Client</span>
          <span className="flex dark:text-gray-200 text-zinc-400 gap-2">
            Deadline
            <div
              className="p-1 hover:bg-slate-300 hover:text-slate-50 dark:hover:text-gray-700 transition-all rounded"
              onClick={handleSortDateDesc}
            >
              <IoIosArrowDown className="cursor-pointer" />
            </div>
          </span>
        </div>
        <span className="flex text-zinc-400 justify-end py-[8px] 2xl:py-[18px]">
          <div className="p-1 hover:bg-slate-300 hover:text-slate-50 dark:hover:text-gray-700 transition-all rounded">
            <HiOutlineFilter className="cursor-pointer" />
          </div>
        </span>
      </div>

      {/* all projects element */}
      {loading && <h2>loading ...</h2>}
      {currentProjects?.map((ele, idx) => (
        <ProjectElement
          key={uuidv4()}
          id={ele.id}
          name={ele.name}
          clientName={ele.clientName}
          deadLine={ele.deadLine}
          handleNavigateToTasks={handleNavigateToTasks}
        />
      ))}

      {/* {showDetail && } */}

      {/* pagination */}
      <div className="flex justify-between items-center p-1 mt-2 mr-1">
        <div
          className="p-1 hover:bg-slate-300 text-slate-500 hover:text-slate-50 dark:hover:text-gray-700 transition-all rounded cursor-pointer"
          onClick={handleCreateProject}
        >
          <IoCreateOutline className="text-lg" />
        </div>
        <Pagination
          itemsPerPage={projectsPerPage}
          totalItems={projects.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
