import { MdOutlineStickyNote2 } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectElement(props) {
  const { id, name, clientName, deadLine, handleNavigateToTasks } = props;
  const navigate = useNavigate();
  return (
    <motion.div
      className="border-l-4 border-white hover:border-teal-500 transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div
          className="container relative right-1  grid grid-cols-6 py-[8px]"
          onClick={() => handleNavigateToTasks(id)}
        >
          <span className="flex text-main-color">{name}</span>
          <span className="flex text-zinc-400">{clientName}</span>
          <span className="flex text-zinc-400 gap-2">{deadLine}</span>
        </div>
        <span className="flex text-zinc-400 justify-end z-10 py-[8px]">
          <div
            className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded"
            onClick={() => navigate(`/Projects/edit/${id}`)}
          >
            <MdOutlineStickyNote2 className="cursor-pointer" />
          </div>
        </span>
      </div>
    </motion.div>
  );
}
