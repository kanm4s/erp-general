import TaskListMain from "./TaskList/TaskListMain";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { getAllTasksApi, getTasksByProjectIdApi } from "../../api/project";
import { useParams } from "react-router-dom";

export default function TasksPage() {
  const { projectId } = useParams();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

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
  return (
    <motion.main
      className="relative flex flex-col px-56 h-screen grow gap-1 bg-neutral-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-6">
        {projectId ? (
          <div>{`${tasks[0]?.Project?.clientName} > Tasks`}</div>
        ) : (
          "Tasks"
        )}
      </h1>
      <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-20">
        <TaskListMain tasks={tasks} loading={loading} setTasks={setTasks} />
      </div>
    </motion.main>
  );
}
