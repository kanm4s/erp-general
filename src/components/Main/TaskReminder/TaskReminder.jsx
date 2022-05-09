import TaskElement from "./TaskElement";

export default function TaskReminder() {
    return (
        <>
            <div className="w-2/5 px-7 py-5 mt-3 2xl:mt-10 mb-16 2xl:mb-36 rounded-lg shadow-2xl bg-white overflow-hidden">
                <h2 className="text-xl 2xl:text-3xl h-6 2xl:h-10 font-bold text-main-color cursor-default overflow-hidden">
                    Tasks
                </h2>
                <TaskElement />
                <TaskElement />
                <TaskElement />
            </div>
        </>
    );
}