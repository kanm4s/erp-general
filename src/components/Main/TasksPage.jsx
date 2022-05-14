import TaskListMain from "./TaskList/TaskListMain";

export default function TasksPage() {
    return (
        <>
            <main className="relative px-48 flex flex-col h-screen grow gap-1 bg-neutral-50">
                <h1 className="text-4xl 2xl:text-6xl text-main-color font-bold cursor-default px-14 2xl:px-20 pt-9 mt-10 mb-6">
                    Tasks
                </h1>
                <div className="flex flex-row w-full h-full px-16 2xl:px-20 mb-28">
                    <TaskListMain />
                </div>
            </main>
        </>
    );
}
