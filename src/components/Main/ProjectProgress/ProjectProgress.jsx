import { useProject } from "../../../contexts/ProjectContext";
import ProjectProgressElement from "./ProjectProgressElement";

export default function ProjectProgress() {
  const { projectProgress } = useProject();
  return (
    <div className="w-4/5 px-7 max-h-[350px] overflow-y-auto py-5 mt-3 2xl:mt-10 rounded-lg shadow-2xl bg-white overflow-hidden">
      <h2 className="text-xl 2xl:text-3xl h-10 font-bold text-main-color cursor-default">
        Project Progression
      </h2>
      <div className="flex py-3">
        <span className="flex basis-1/4 text-zinc-400">Name</span>
        <span className="flex basis-1/2 text-zinc-400">Progress</span>
        <span className="flex basis-1/5 justify-end text-zinc-400">
          Deadline
        </span>
      </div>
      {projectProgress.map((ele) => {
        const totalTask = ele.Tasks.length;

        let count = 0;
        for (let item of ele.Tasks) {
          if (item.workingStatus === "done") {
            count++;
          }
        }

        if (count === 0) {
          return (
            <ProjectProgressElement
              title={ele.name}
              deadLine={ele.deadLine}
              progress={0}
            />
          );
        }

        const calProgress = (count / totalTask) * 100;

        return (
          <ProjectProgressElement
            title={ele.name}
            deadLine={ele.deadLine}
            progress={calProgress.toFixed(2)}
          />
        );
      })}
    </div>
  );
}
