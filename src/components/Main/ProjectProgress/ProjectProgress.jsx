import ProjectProgressElement from "./ProjectProgressElement";

export default function ProjectProgress() {
    return (
        <div className="w-4/5 px-7 py-5 mt-3 2xl:mt-10 h-fit rounded-lg shadow-2xl bg-white overflow-hidden">
            <h2 className="text-xl 2xl:text-3xl h-10 font-bold text-teal-500 cursor-default">
                Project Progression
            </h2>
            <div className="flex pb-3">
                <span className="flex basis-1/4 text-zinc-400">Name</span>
                <span className="flex basis-1/2 text-zinc-400">Progress</span>
                <span className="flex basis-1/5 relative left-5 text-zinc-400">
                    Deadline
                </span>
            </div>
            <ProjectProgressElement />
            <ProjectProgressElement />
            <ProjectProgressElement />
        </div>
    );
}
