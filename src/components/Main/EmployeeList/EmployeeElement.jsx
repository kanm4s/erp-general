import { MdOutlineStickyNote2 } from "react-icons/md";
import { motion } from "framer-motion";

export default function EmployeeElement(props) {
    const {
        id,
        firstName,
        lastName,
        position,
        phoneNumber,
        showDetailFunction,
    } = props;
    return (
        <motion.div
            className="border-l-4 border-white hover:border-teal-500 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container cursor-pointer flex px-3 border-b-2 border-slate-300 border-dashed">
                <div
                    className="container relative right-1 columns-4 py-[8px]"
                    onClick={() => showDetailFunction(id)}
                >
                    <span className="flex text-main-color">{`${firstName} ${lastName[0].toUpperCase()}.`}</span>
                    <span className="flex text-zinc-400">{position}</span>
                    <span className="flex text-main-color gap-2">
                        {phoneNumber}
                    </span>
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
