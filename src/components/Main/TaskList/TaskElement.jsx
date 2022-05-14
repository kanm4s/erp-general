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
            onClick={() => showDetailFunction(id)}
        >
            <div className="container relative right-1 columns-5 px-3 py-[8px] 2xl:py-[18px] border-b-2 border-slate-300 border-dashed cursor-pointer">
                <span className="flex text-main-color">{title}</span>
                <span className="flex text-zinc-400">{client}</span>
                <span className="flex text-main-color gap-2">{delegateTo}</span>
                <span className="flex text-zinc-400 gap-2">{deadline}</span>
                <span className="flex text-zinc-400 justify-end">
                    <div className="p-1 hover:bg-slate-300 hover:text-slate-50 transition-all rounded">
                        <MdOutlineStickyNote2 className="cursor-pointer" />
                    </div>
                </span>
            </div>
        </motion.div>
    );
}
