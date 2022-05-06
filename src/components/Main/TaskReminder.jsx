import TaskElement from "./TaskElement";

export default function TaskReminder() {
    return (
        <>
            <div className="w-2/5 p-10 mt-10 mb-36 rounded-lg shadow-2xl bg-white overflow-hidden ">
                <h2 className="text-3xl font-bold text-teal-500 cursor-default">
                    Tasks
                </h2>
                <TaskElement />
                <TaskElement />
                <TaskElement />
            </div>
            <div className="w-4/5 h-56 shadow-2xl p-10 rounded-lg mt-10 bg-white">
                <h2 className="text-3xl font-bold text-teal-500">Tasks</h2>
            </div>
        </>
    );
}
