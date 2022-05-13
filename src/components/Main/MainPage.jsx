import ProjectProgress from "./ProjectProgress/ProjectProgress";
import TaskReminder from "./TaskReminder/TaskReminder";

export default function Main() {
    return (
        <>
            <main className="relative px-48 flex h-screen flex-col grow gap-1 bg-neutral-50">
                <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-3">
                    Work hard, Play Harder!
                </h1>
                <div className="flex flex-row w-full h-full px-16 2xl:px-20 gap-14 mb-5">
                    <TaskReminder />
                    <ProjectProgress />
                </div>
            </main>
        </>
    );
}
