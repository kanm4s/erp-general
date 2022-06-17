import { useProject } from "../../../contexts/ProjectContext";
import { v4 as uuidv4 } from "uuid";
import ProjectProgressManagerElement from "./ProjectProgressManagerElement";

export default function ProjectProgressManager() {
  const { projectProgress } = useProject();

  let sortDeadlineProgress = projectProgress.sort(
    (a, b) => new Date(a.deadLine) - new Date(b.deadLine)
  );

  return (
    <div className="w-full px-7 max-h-[350px] overflow-y-scroll py-5 mt-3 2xl:mt-10 rounded-lg shadow-2xl bg-white dark:bg-gray-700 overflow-hidden">
      <div className="p-2 bg-white dark:bg-gray-700">
        <h2 className="text-xl 2xl:text-3xl h-10 font-bold text-main-color dark:text-gray-100 cursor-default">
          Project Progression
        </h2>
        <div className="py-3 grid grid-cols-7">
          <span className="text-zinc-400 dark:text-gray-100">Name</span>
          <span className="text-zinc-400 dark:text-gray-100 col-span-2">
            Progress
          </span>
          <span className="text-zinc-400 dark:text-gray-100">Deadline</span>
          <span className="text-zinc-400 dark:text-gray-100 text-center">
            Resource
          </span>
          <span className="text-zinc-400 dark:text-gray-100 text-center">
            Tasks left
          </span>
          <span className="text-zinc-400 dark:text-gray-100 text-center">
            Day left
          </span>
        </div>

        {sortDeadlineProgress.map((ele) => {
          const totalTask = ele.Tasks.length;

          let count = 0;
          let working = 0;
          let waiting = 0;
          for (let item of ele.Tasks) {
            if (item.workingStatus === "done") {
              count++;
            } else if (item.workingStatus === "active") {
              working++;
            } else if (item.workingStatus === "waiting") {
              waiting++;
            }
          }

          if (count === 0) {
            return (
              <ProjectProgressManagerElement
                key={uuidv4()}
                title={ele.name}
                deadLine={ele.deadLine}
                progress={0}
                tasksLeft={waiting}
                resourceUsed={working}
              />
            );
          }

          const calProgress = (count / totalTask) * 100;

          return (
            <ProjectProgressManagerElement
              key={uuidv4()}
              title={ele.name}
              deadLine={ele.deadLine}
              progress={calProgress.toFixed(2)}
              tasksLeft={waiting}
              resourceUsed={working}
            />
          );
        })}
      </div>
    </div>
  );
}
