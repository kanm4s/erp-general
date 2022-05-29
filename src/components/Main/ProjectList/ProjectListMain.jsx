import React, { useContext, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";

import { ProjectContext } from "../../../contexts/ProjectContext";

export default function ProjectListMain() {
  const { project } = useContext(ProjectContext);

  const perChunk = 10; // items per page

  const result = project.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new page
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  const [projects] = useState(result);
  const [sortDateDesc, setSortDateDesc] = useState(true);
  const [projectPageShow, setProjectPageShow] = useState(projects[0]);
  const [showDetail, setShowDetail] = useState("");

  const handleSortDateDesc = () => {
    setSortDateDesc(!sortDateDesc);
    if (sortDateDesc) {
      setProjectPageShow(
        projectPageShow.sort(
          (a, b) => new Date(b.deadline) - new Date(a.deadline)
        )
      );
    } else {
      setProjectPageShow(
        projectPageShow.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
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

  return (
    <div className="w-full h-fit min-w-[800px] max-w-[1000px] px-7 py-5 rounded-lg shadow-2xl bg-white overflow-hidden">
      {/* Header */}
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div className="container relative right-1 columns-5 py-[8px] 2xl:py-[18px]">
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
        </div>
        <span className="flex text-zinc-400 justify-end py-[8px] 2xl:py-[18px]">
          <div className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded">
            <HiOutlineFilter className="cursor-pointer" />
          </div>
        </span>
      </div>

      {/* all projects element */}
      {/* {showDetail
        ? projectPageShow
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
                  title={ele.title}
                  client={ele.client}
                  delegateTo={ele.delegateTo}
                  deadline={ele.deadline}
                  showDetailFunction={handleShowDetail}
                />
                <TaskDetail
                  title={ele.title}
                  delegateFrom={ele.delegateFrom}
                  delegateTo={ele.delegateTo}
                  delegateDate={ele.delegateDate}
                  deadline={ele.deadline}
                  clientBrief={ele.clientBrief}
                />
              </div>
            ))
        : projectPageShow.map((ele, idx) => (
            <TaskElement
              key={idx}
              id={ele.id}
              title={ele.title}
              client={ele.client}
              delegateTo={ele.delegateTo}
              deadline={ele.deadline}
              showDetailFunction={handleShowDetail}
            />
          ))} */}

      {/* {showDetail && } */}

      {/* pagination */}
      <div className="flex justify-between items-center p-1 mt-2 mr-1">
        <IoCreateOutline className="text-lg cursor-pointer" />
        {[...Array(projects.length).keys()].map((ele, idx) => {
          return (
            <span
              key={idx}
              className="py-1 px-3 cursor-pointer hover:bg-slate-300 hover:text-slate-50 transition-all rounded mx-1"
              onClick={(e) => {
                setProjectPageShow(projects[e.target.innerHTML - 1]);
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
