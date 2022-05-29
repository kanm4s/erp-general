import { motion } from "framer-motion";
import ProjectListMain from "./ProjectList/ProjectListMain";

export default function ProjectPage() {
  return (
    <motion.main
      className="relative flex flex-col px-56 h-screen grow gap-1 bg-neutral-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-6">
        Project
      </h1>
      <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-20">
        <ProjectListMain />
      </div>
    </motion.main>
  );
}
