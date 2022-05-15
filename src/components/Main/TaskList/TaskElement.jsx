import { MdOutlineStickyNote2 } from "react-icons/md";
import { motion } from "framer-motion";

export default function TaskElement(props) {
    const { id, title, client, delegateTo, deadline, showDetailFunction } =
        props;
    return (
        <motion.div
            className="border-l-4 border-white hover:border-teal-500 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
                <div
                    className="container relative right-1 columns-5 py-[8px]"
                    onClick={() => showDetailFunction(id)}
                >
                    <span className="flex text-main-color">{title}</span>
                    <span className="flex text-zinc-400">{client}</span>
                    <span className="flex text-main-color gap-2">
                        {delegateTo}
                    </span>
                    <span className="flex text-zinc-400 gap-2">{deadline}</span>
                </div>
                <span className="flex text-zinc-400 justify-end z-10 py-[8px]">
                    <div
                        className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded"
                        onClick={() => console.log("test")}
                    >
                        <MdOutlineStickyNote2 className="cursor-pointer" />
                    </div>
                </span>
            </div>
        </motion.div>
    );
}
