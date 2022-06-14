import ProjectProgress from "./ProjectProgress/ProjectProgress";
import TaskReminder from "./TaskReminder/TaskReminder";
import { motion } from "framer-motion";
import { ModalTaskContext } from "../../contexts/ModalContext";
import ProjectOverview from "./ProjectOverview/ProjectOverview";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import ProjectProgressManager from "./ProjectProgress/ProjectProgressManager";

export default function MainPage() {
  const { user } = useContext(AuthContext);
  return (
    <motion.main
      className="relative px-56 flex h-screen flex-col grow gap-1 bg-neutral-50 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-3 dark:text-gray-100">
        Work hard, Play Harder!
      </h1>
      <div className="flex flex-col w-full px-16 2xl:px-20">
        {user.position === "Manager" ? <ProjectOverview /> : <></>}
      </div>
      <div className="flex flex-row w-full h-full px-16 2xl:px-20 gap-14 mb-5">
        <ModalTaskContext>
          {user.position === "Manager" ? (
            <ProjectProgressManager />
          ) : (
            <>
              <TaskReminder />
              <ProjectProgress />
            </>
          )}
          {/* <TaskReminder />
          <ProjectProgress /> */}
        </ModalTaskContext>
      </div>
    </motion.main>
  );
}
