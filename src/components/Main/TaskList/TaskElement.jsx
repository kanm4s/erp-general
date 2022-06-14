import { MdOutlineStickyNote2 } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function TaskElement(props) {
  const { user } = useContext(AuthContext);
  const {
    id,
    name,
    type,
    delegateTo,
    deadLine,
    showDetailFunction,
    projectId,
    workingStatus,
  } = props;
  const navigate = useNavigate();
  return (
    <motion.div
      className=" border-l-4 border-white hover:border-teal-500 dark:border-gray-700 dark:hover:border-gray-100 transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container h-11 cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div
          className="container relative right-1 grid grid-cols-5 py-[8px]"
          onClick={() => showDetailFunction(id)}
        >
          <span className="flex text-main-color">{name}</span>
          <span className="flex text-zinc-400">{type}</span>
          <span className="flex text-main-color gap-2">{delegateTo}</span>
          <span className="flex text-zinc-400 gap-2">{deadLine}</span>
          <span className="flex text-zinc-400 gap-2">{workingStatus}</span>
        </div>
        <span className="flex text-zinc-400 justify-end z-10 py-[8px]">
          <div
            className="p-1 hover:bg-slate-300 hover:text-slate-50 dark:hover:text-gray-700  transition-all rounded"
            onClick={() => navigate(`/Projects/${projectId}/createTask/${id}`)}
          >
            {user.position === "Manager" ? (
              <MdOutlineStickyNote2 className="cursor-pointer" />
            ) : (
              ""
            )}
          </div>
        </span>
      </div>
    </motion.div>
  );
}
