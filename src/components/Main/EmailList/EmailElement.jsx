import { motion } from "framer-motion";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaReply } from "react-icons/fa";
import { useEmail } from "../../../contexts/EmailContext";

export default function EmailElement(props) {
  const { id, sender, subject, handleShowDetail } = props;
  const { deleteEmail } = useEmail();
  return (
    <motion.div
      className="border-l-4 border-white hover:border-teal-500 transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
        <div
          className="container relative right-1  grid grid-cols-4 py-[8px]"
          onClick={() => {
            handleShowDetail(id);
          }}
        >
          <span className="flex text-main-color">{sender}</span>
          <span className="flex text-zinc-400">{subject}</span>
        </div>
        <span className="flex text-zinc-400 justify-end z-10 py-[8px]">
          <div
            className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded"
            onClick={() => handleShowDetail(id)}
          >
            <FaReply className="cursor-pointer" />
          </div>
          <div
            className="p-1 hover:bg-red-600 hover:text-slate-50 transition-all rounded"
            onClick={() => deleteEmail(id)}
          >
            <RiDeleteBin5Fill className="cursor-pointer" />
          </div>
        </span>
      </div>
    </motion.div>
  );
}
