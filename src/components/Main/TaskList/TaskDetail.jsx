import { motion } from "framer-motion";

export default function TaskDetail(props) {
    const {
        title,
        delegateFrom,
        delegateTo,
        delegateDate,
        deadline,
        clientBrief,
    } = props;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container flex px-3 py-8 h-[378px] gap-4"
        >
            <div className="min-w-[260px] flex flex-col gap-3 basis-1/3 pr-5">
                <h1 className="text-main-color font-bold">{title}</h1>
                <div>
                    <p>{`Delegate from: ${delegateFrom}`}</p>
                    <p>{`Delegate to: ${delegateTo}`}</p>
                    <p>{`Delegate date: ${delegateDate}`}</p>
                    <p>{`Deadline: ${deadline}`}</p>
                </div>
                <form>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        className="w-full resize-none border-2 border-slate-300 focus:border-teal-500 rounded outline-none p-2 text-sm h-32"
                    ></textarea>
                    <div className="container flex gap-2">
                        <button className="w-32 border-2 border-slate-300 hover:border-teal-500 bg-white hover:bg-teal-500 px-2 py-1 text-teal-900 hover:text-teal-50 rounded transition-all">
                            Add note
                        </button>
                        <button className="w-full border-2 border-slate-300 hover:border-teal-500 bg-white hover:bg-teal-500 px-2 py-1 text-teal-900 hover:text-teal-50 rounded transition-all">
                            Done Task
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col gap-3 basis-1/2">
                <h1 className="text-main-color font-bold">Brief from client</h1>
                <div className="flex gap-4">
                    <span>Brief version: {clientBrief.version}</span>
                    <span>{clientBrief.lastUpdate}</span>
                </div>
                <p className="h-full">{clientBrief.content}</p>
            </div>
        </motion.div>
    );
}