import ProjectProgress from "./ProjectProgress/ProjectProgress";
import TaskReminder from "./TaskReminder/TaskReminder";
import { motion } from "framer-motion";
import { ModalTaskContext } from "../../contexts/ModalContext";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <motion.main
      className="relative px-5 flex h-screen flex-col grow gap-1 bg-neutral-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-3">
        Work hard, Play Harder!
      </h1>
      <div className="flex flex-row w-full h-full px-16 2xl:px-20 gap-14 mb-5">
        <ModalTaskContext>
          <TaskReminder />
        </ModalTaskContext>
        <ProjectProgress />
      </div>
      <Outlet />
    </motion.main>
  );
}
