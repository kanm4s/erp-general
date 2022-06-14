import { useEffect, useState } from "react";
import {
  getAllWorkingTasksApi,
  getAvailableTasksApi,
} from "../../../api/project";
import { getAvailableUserApi } from "../../../api/user";
import { useProject } from "../../../contexts/ProjectContext";

export default function ProjectOverview() {
  const { project } = useProject();
  const [availableTasks, setAvailableTasks] = useState([]);
  const [availableUser, setAvailableUser] = useState([]);
  const [workingTask, setWorkingTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAvailableTasksApi();
      const user = await getAvailableUserApi();
      const task = await getAllWorkingTasksApi();

      setAvailableTasks(res.data.allAvailableTasks);
      setAvailableUser(user.data.user);
      setWorkingTask(task.data.allWorkingTasks);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full px-7 py-5 mt-3 max-h-[500px] overflow-y-auto 2xl:mt-10 rounded-lg shadow-2xl bg-white overflow-hidden dark:bg-gray-700">
      <div className="container flex py-[8px] 2xl:py-[18px] gap-7">
        <div className="flex gap-3">
          <span className="dark:text-gray-100">All project</span>
          <span className="text-red-500">{project.length}</span>
        </div>
        <div className="flex gap-3">
          <span className="dark:text-gray-100">All resource available</span>
          <span className="text-red-500">{availableUser.length}</span>
        </div>
        <div className="flex gap-3">
          <span className="dark:text-gray-100">All tasks available</span>
          <span className="text-red-500">{availableTasks.length}</span>
        </div>
        <div className="flex gap-3">
          <span className="dark:text-gray-100">All tasks working</span>
          <span className="text-red-500">{workingTask.length}</span>
        </div>
      </div>
    </div>
  );
}
